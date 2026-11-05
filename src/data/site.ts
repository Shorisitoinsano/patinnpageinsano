import type { Bi } from './types';

export type PageKey = 'index' | 'sobre-mi' | 'gustos' | 'diario' | 'contacto';
export interface Page {
  key: PageKey;
  href: string;
  nav: Bi;
  docTitle: Bi;
  description: string;
  intro?: { signal: string; title: Bi; text: Bi; note?: Bi };
}

/** Fuente única de las 5 páginas: alimenta el menú, el menú móvil, el pie, los <title> y la cabecera de cada página. */
export const pages: Page[] = [
  {
    "key": "index",
    "href": "/",
    "nav": {
      "es": "Inicio",
      "en": "Home"
    },
    "docTitle": {
      "es": "Patinn — Illustrator",
      "en": "Patinn — Illustrator"
    },
    "description": "Página personal de Patinn: ilustradora. Gustos, rutinas y un diario."
  },
  {
    "key": "sobre-mi",
    "href": "/sobre-mi",
    "nav": {
      "es": "Sobre mí",
      "en": "About me"
    },
    "docTitle": {
      "es": "Sobre mí — Patinn",
      "en": "About me — Patinn"
    },
    "description": "Quién es Patinn: ilustradora, sus rutinas, su forma de trabajar y su día a día.",
    "intro": {
      "signal": "02/05",
      "title": {
        "es": "Sobre mí",
        "en": "About me"
      },
      "text": {
        "es": "Dibujo de noche, programo de día y colecciono cosas pequeñas.",
        "en": "I draw at night, code by day and collect small things."
      }
    }
  },
  {
    "key": "gustos",
    "href": "/gustos",
    "nav": {
      "es": "Gustos",
      "en": "Likes"
    },
    "docTitle": {
      "es": "Gustos — Patinn",
      "en": "Likes — Patinn"
    },
    "description": "Música, lecturas, comida y manías de Patinn, con un reproductor de música.",
    "intro": {
      "signal": "03/05",
      "title": {
        "es": "Gustos",
        "en": "Likes"
      },
      "text": {
        "es": "Lista abierta, siempre incompleta.",
        "en": "An open list, always incomplete."
      }
    }
  },
  {
    "key": "diario",
    "href": "/diario",
    "nav": {
      "es": "Diario",
      "en": "Journal"
    },
    "docTitle": {
      "es": "Diario — Patinn",
      "en": "Journal — Patinn"
    },
    "description": "Seis notas cortas de Patinn sobre dibujo, música, web y rutinas.",
    "intro": {
      "signal": "04/05",
      "title": {
        "es": "Diario",
        "en": "Journal"
      },
      "text": {
        "es": "Seis notas cortas. Pulsa una para abrirla.",
        "en": "Six short notes. Press one to open it."
      },
      "note": {"es":"(no voy a dejar notas personales por ahora)","en":"(I’m not leaving personal notes for now)"}
    }
  },
  {
    "key": "contacto",
    "href": "/contacto",
    "nav": {
      "es": "Contacto",
      "en": "Contact"
    },
    "docTitle": {
      "es": "Contacto — Patinn",
      "en": "Contact — Patinn"
    },
    "description": "Escribe a Patinn: formulario de contacto y preguntas frecuentes.",
    "intro": {
      "signal": "05/05",
      "title": {
        "es": "Contacto",
        "en": "Contact"
      },
      "text": {
        "es": "Escríbeme algo. La señal tarda, pero llega.",
        "en": "Write me something. The signal is slow, but it arrives."
      }
    }
  }
];

export const pageByKey = Object.fromEntries(pages.map((p) => [p.key, p])) as Record<PageKey, Page>;

/** Menú de escritorio: "Sobre mí" agrupa dos páginas en un desplegable. */
export const mainNav: Array<{ key: PageKey } | { label: Bi; children: Array<{ key: PageKey; label: Bi }> }> = [
  { key: 'index' },
  { label: { es: 'Sobre mí', en: 'About me' }, children: [
    { key: 'sobre-mi', label: { es: 'Quién soy', en: 'Who I am' } },
    { key: 'gustos', label: { es: 'Mis gustos', en: 'My likes' } }
  ] },
  { key: 'diario' },
  { key: 'contacto' }
];
