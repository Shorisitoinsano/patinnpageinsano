// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Astro 7 cambió el manejo de espacios por defecto; esto conserva los espacios entre elementos en línea.
  compressHTML: true,
  // Alpine.js: integración oficial. El entrypoint registra collapse y los componentes (carousel, diary, faq, contactForm).
  integrations: [alpinejs({ entrypoint: '/src/scripts/alpine' })],
  // Tailwind CSS v4: plugin oficial de Vite. La configuración (colores, fuentes, componentes) vive en src/styles/global.css.
  vite: { plugins: [tailwindcss()] }
});
