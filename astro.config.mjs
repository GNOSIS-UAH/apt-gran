import { defineConfig } from 'astro/config';

// Cambia `site` y `base` cuando se decida el dominio definitivo.
// Para GitHub Pages en https://<usuario>.github.io/apt-gran/ usa base: '/apt-gran'.
export default defineConfig({
  site: 'https://edelahozuah.github.io',
  base: '/apt-gran',
  trailingSlash: 'ignore',
});
