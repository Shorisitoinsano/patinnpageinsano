# Patinn

Sitio personal de Patinn, ilustrador: un autorretrato en cinco páginas con gustos, rutinas, un diario y contacto. Estética Y2K editorial: papel, tinta, azul cobalto, grano y tramas de puntos.

Hecho con **Astro**, **Tailwind CSS** y **Alpine.js**. Es un sitio estático: no tiene servidor ni base de datos.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada con el cuervo, presentación, ficha, accesos a las secciones y frase que se decodifica |
| `/sobre-mi` | Retrato nocturno, texto personal y «Un día cualquiera» |
| `/gustos` | Tarjetas de gustos, carrusel «Archivo visual» y reproductor «Lo que suena» |
| `/diario` | Seis notas que se abren en ventanas modales |
| `/contacto` | Formulario con validación, otros canales y preguntas frecuentes |
| `/arbol` | Pantalla secreta: se llega cambiando el tema muchas veces |

## Ejecutar en local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve dist/ para revisarlo
```

## Cómo está construida

### Estructura

```
src/
├─ pages/        una ruta por archivo
├─ layouts/      BaseLayout.astro: <head>, cabecera, <main>, pie y scripts, escritos una sola vez
├─ components/
│  ├─ layout/    Header, Footer, SvgSprite (iconos), BgFx (grano y tramas)
│  ├─ ui/        piezas compartidas: T, Icon, LinkCard, SectionTitle, PageIntro, Modal, CtaBand
│  ├─ inicio/    Hero, Hola, Experiencia, Canales, CuervoPosado
│  ├─ sobre-mi/  Retrato
│  ├─ gustos/    LikeCard, Carousel, NowPlaying
│  ├─ diario/    DiaryCard, DiaryModal
│  └─ contacto/  ContactForm, Field, FaqItem
├─ data/         contenido separado del marcado (TypeScript)
├─ scripts/      alpine.js (componentes Alpine) · app.js (idioma, tema, transiciones, efectos)
└─ styles/       global.css (Tailwind + estilos propios) · arbol.css
public/          archivos servidos tal cual (favicon, imagen del árbol y dos scripts independientes)
```

### Componentes y datos

- **Una sola fuente para la navegación.** `data/site.ts` define las cinco páginas. De ahí salen el menú de escritorio con su desplegable, el menú móvil, el pie, el título de cada pestaña y la cabecera de cada página.
- **El contenido vive en `data/`.** Las entradas del diario, las preguntas frecuentes, los gustos, las diapositivas y la rutina son listas en TypeScript que los componentes recorren con `.map()`. Para cambiar un texto se edita el dato, no el HTML.
- **Textos bilingües.** El componente `<T es="…" en="…" />` escribe el español y guarda el inglés en `data-en`. El botón ES/EN cambia todos los textos sin recargar la página.

### Estilos: Tailwind CSS 4

- Se integra con el plugin oficial `@tailwindcss/vite`.
- La configuración está en `src/styles/global.css`, como se hace en Tailwind 4:
  - `@theme` define la paleta (`paper`, `ink`, `cobalt`…), las tipografías y las sombras. Esos valores se convierten en clases como `bg-paper`, `text-ink` o `font-display`.
  - `@layer components` agrupa piezas reutilizables con `@apply`: `.btn`, `.field`, `.lbl`, tarjetas, modales y otras.
- Los colores son variables CSS. El modo oscuro cambia solo esas variables con `[data-theme="dark"]`.
- No hay estilos en línea. Las texturas, los recortes en diagonal y las animaciones están en CSS propio porque Tailwind no los cubre.

### Interactividad: Alpine.js

Se integra con `@astrojs/alpinejs`. En `src/scripts/alpine.js` se registran el plugin Collapse y cuatro componentes:

- `carousel`: flechas, puntos y teclado.
- `diary`: ventanas modales que mueven el foco dentro, se cierran con Esc y bloquean el scroll de fondo.
- `faq`: acordeón.
- `contactForm`: validación en vivo y mensaje de confirmación. Es una demostración: no envía nada a ningún servidor.

El desplegable del menú y el menú móvil usan estado de Alpine directamente en la cabecera.

### Otros efectos (`src/scripts/app.js`)

- Cambio de idioma y de tema, recordados entre visitas. Un script en línea del `<head>` los aplica antes de pintar para evitar parpadeos.
- Transición entre páginas sin recarga completa: solo se cambia el `<main>`.
- Texto que se decodifica letra por letra, retrato en ASCII y reproductor de música con la API de YouTube.
- Todo se desactiva o se simplifica si el sistema pide reducir el movimiento.

### Tipografías

- **Libre Bodoni** para títulos.
- **Space Mono** para etiquetas.
- **Archivo** para el texto.
- **Noto Serif JP** para los caracteres japoneses.

Se instalan con `@fontsource` y van incluidas en el build, sin depender de Google Fonts.

### Accesibilidad y responsive

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`. Hay un solo `h1` por página.
- Enlace «Saltar al contenido», atributos `aria-*` en menús, modales, carrusel y formulario, y zonas táctiles de al menos 44 px.
- Diseño mobile-first: las cuadrículas pasan de 1 a 2 y a 3 columnas, y la cabecera usa un menú hamburguesa en móvil.

### Servicios externos

La única dependencia de red en tiempo de ejecución es YouTube: la miniatura y el reproductor de «Lo que suena» y la música de la pantalla secreta. Si YouTube no responde, el resto del sitio funciona igual.

## Despliegue

El repositorio está conectado a Vercel. Vercel reconoce Astro sin configuración: el comando de build es `npm run build` y la carpeta de salida es `dist`. Cada `push` a la rama `main` publica una versión nueva.
