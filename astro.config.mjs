import { defineConfig } from 'astro/config';

// Español en la raíz, inglés en /en/.
// Si se cambia el repositorio o el dominio, ajustar `site` y `base`.
export default defineConfig({
  site: 'https://gnosis-uah.github.io',
  base: '/apt-gran',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
