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
| Noticia | `src/content/noticias/` y `noticias/en/` | ver `2026-10-semana-ciencia.md` (campos opcionales `url` y `etiqueta` para un enlace) |
| Resultado | `src/content/resultados/` y `resultados/en/` | `_ejemplo.md.txt` |
| Publicación | `src/content/publicaciones/` | `_ejemplo.md.txt` |
| Recurso (dataset, software) | `src/content/recursos/` | `_ejemplo.md.txt` |
| Persona | `src/content/equipo/` | cualquier fichero existente |
| Estudiante de TFM | se genera solo: entrada en resultados con `clase: tfm` | `_ejemplo.md.txt` |

Copia la plantilla, renómbrala a `<slug>.md`, rellena la cabecera y ejecuta `npm run build`. Si falta un campo obligatorio o un valor no es válido, la compilación falla indicando el fichero.

Los ficheros `_ejemplo.md.txt` no se publican.

## Idiomas

El español se sirve en la raíz y el inglés en `/en/`. Cada página tiene su equivalente en `src/pages/en/` y la navegación incluye el cambio de idioma. Los textos de interfaz (menú, rótulos, avisos) están en `src/i18n.ts`.

- **Noticias y resultados**: un fichero por idioma. Los ingleses van en la subcarpeta `en/` de la colección, con el mismo nombre de fichero que el español.
- **Publicaciones, recursos y equipo**: un solo fichero para ambos idiomas, con campos opcionales `titulo_en`, `venue_en`, `resumen_en` y `rol_en`. Si faltan, se muestra el texto en español.

## Páginas

- `src/pages/index.astro`: portada con presentación y últimas noticias. Los listados viven en `src/components/` y se reutilizan en ambos idiomas.
- `src/pages/proyecto.astro`: motivación, hipótesis, objetivos, impacto y financiación. Texto fijo.
- `src/pages/resultados.astro`: lista cronológica de resultados con etiqueta temática.
- `src/pages/publicaciones.astro`: agrupadas por tipo.
- `src/pages/recursos.astro`: tarjetas con enlaces a GitHub y Zenodo.
- `src/pages/equipo.astro`: fichas, colaboraciones y contacto.

## Datos estructurados

`src/components/JsonLd.astro` genera en cada página un bloque JSON-LD de schema.org con la universidad, los grupos, el proyecto (`ResearchProject` con su `MonetaryGrant`), las personas del equipo (con su ORCID como identificador), el sitio y la página. En publicaciones, recursos y resultados añade además cada entrada (`ScholarlyArticle`, `Dataset`, `SoftwareSourceCode`, `Thesis`). Los datos fijos del proyecto están en `proyecto`, en `src/i18n.ts`.

## Pendiente antes de publicar

- Enlaces reales a Zenodo, X y Bluesky en `src/components/Social.astro`.
- Crear el sitio `apt-gran` en GoatCounter (o cambiar `goatcounter` en `src/i18n.ts`).

## Despliegue en GitHub Pages

El repositorio es https://github.com/GNOSIS-UAH/apt-gran. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica el sitio en https://gnosis-uah.github.io/apt-gran/. Si se cambia el repositorio o el dominio, ajustar `site` y `base` en `astro.config.mjs`.
