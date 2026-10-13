# Web del proyecto APT-GRAN

Sitio estático construido con [Astro](https://astro.build), con la misma hoja de estilos (convenciones al-folio: Roboto, un color de acento en `--global-theme-color`, barra y pie fijos, modo oscuro automático) que la web personal del IP. Todo el contenido vive en `src/content/` como ficheros Markdown con cabecera YAML; no hace falta tocar código para añadir noticias, resultados, publicaciones, recursos o personas.

## Uso

```bash
npm install        # solo la primera vez
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera el sitio en dist/
```

## Añadir contenido

| Qué | Carpeta | Plantilla |
|---|---|---|
| Noticia | `src/content/noticias/` | ver `2026-10-semana-ciencia.md` (campos opcionales `url` y `etiqueta` para un enlace) |
| Resultado | `src/content/resultados/` | `_ejemplo.md.txt` |
| Publicación | `src/content/publicaciones/` | `_ejemplo.md.txt` |
| Recurso (dataset, software) | `src/content/recursos/` | `_ejemplo.md.txt` |
| Persona | `src/content/equipo/` | cualquier fichero existente |

Copia la plantilla, renómbrala a `<slug>.md`, rellena la cabecera y ejecuta `npm run build`. Si falta un campo obligatorio o un valor no es válido, la compilación falla indicando el fichero.

Los ficheros `_ejemplo.md.txt` no se publican.

## Páginas

- `src/pages/index.astro`: portada con accesos y últimas noticias.
- `src/pages/proyecto.astro`: motivación, hipótesis, objetivos, impacto y financiación. Texto fijo.
- `src/pages/resultados.astro`: lista cronológica de resultados con etiqueta temática.
- `src/pages/publicaciones.astro`: agrupadas por tipo.
- `src/pages/recursos.astro`: tarjetas con enlaces a GitHub y Zenodo.
- `src/pages/equipo.astro`: fichas, colaboraciones y contacto.

## Pendiente antes de publicar

- Enlaces reales a Zenodo, X y Bluesky en `src/pages/index.astro`.

## Despliegue en GitHub Pages

El repositorio es https://github.com/GNOSIS-UAH/apt-gran. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica el sitio en https://gnosis-uah.github.io/apt-gran/. Si se cambia el repositorio o el dominio, ajustar `site` y `base` en `astro.config.mjs`.
