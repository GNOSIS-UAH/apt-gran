export type Lang = 'es' | 'en';

// Estadísticas de acceso con GoatCounter (sin cookies ni datos personales).
// Vacío para desactivarlas.
export const goatcounter = 'https://apt-gran.goatcounter.com/count';
export const referencia = 'PIUAH25/IA-058';
export const urlSitio = 'https://gnosis-uah.github.io/apt-gran/';

export const textos = {
  es: {
    locale: 'es-ES',
    nav: { inicio: 'inicio', proyecto: 'el proyecto', resultados: 'resultados', publicaciones: 'publicaciones', recursos: 'recursos', equipo: 'equipo' },
    cambioIdioma: { etiqueta: 'en', lang: 'en', titulo: 'English version' },
    saltar: 'Saltar al contenido',
    pie: 'Universidad de Alcalá. Proyecto APT-GRAN, financiado por el Programa Propio de Investigación de la UAH. Hecho con Astro y alojado en GitHub Pages.',
    descripcion: 'APT-GRAN: atribución de amenazas persistentes avanzadas mediante redes neuronales de grafos. Universidad de Alcalá.',
    tituloSitio: 'APT-GRAN, Universidad de Alcalá',
    temas: { datos: 'Datos', atribucion: 'Atribución', alertas: 'Alertas', otros: 'Otros' },
    tiposPub: { revista: 'revistas', congreso: 'congresos', capitulo: 'capítulos de libro', charla: 'charlas y talleres', divulgacion: 'divulgación' },
    estados: { enviado: 'enviado', aceptado: 'aceptado', publicado: '' },
    tiposRec: { dataset: 'datasets', software: 'software', documento: 'documentos' },
    sinNoticias: 'Todavía no hay noticias.',
    sinResultados: 'Los primeros resultados del proyecto se publicarán en cuanto estén consolidados.',
    sinPublicaciones: 'Aún no hay publicaciones asociadas al proyecto.',
    sinRecursos: 'Los recursos se irán publicando en GitHub y Zenodo a lo largo del proyecto.',
    tfm: 'trabajos fin de máster',
    dirigidoPor: 'dirigido por',
    enlace: 'Enlace',
    comoCitar: 'Cómo citar',
    webIP: 'Web del IP',
    logosNota: 'Grupos de investigación',
    logosNota2: '(subgrupo GNOSIS) y',
    logosNota3: ', Universidad de Alcalá.',
  },
  en: {
    locale: 'en-GB',
    nav: { inicio: 'home', proyecto: 'the project', resultados: 'results', publicaciones: 'publications', recursos: 'resources', equipo: 'team' },
    cambioIdioma: { etiqueta: 'es', lang: 'es', titulo: 'Versión en español' },
    saltar: 'Skip to content',
    pie: 'University of Alcalá. APT-GRAN project, funded by the UAH Own Research Programme. Built with Astro and hosted on GitHub Pages.',
    descripcion: 'APT-GRAN: attribution of advanced persistent threats with graph neural networks. University of Alcalá.',
    tituloSitio: 'APT-GRAN, University of Alcalá',
    temas: { datos: 'Data', atribucion: 'Attribution', alertas: 'Alerts', otros: 'Other' },
    tiposPub: { revista: 'journals', congreso: 'conferences', capitulo: 'book chapters', charla: 'talks and workshops', divulgacion: 'outreach' },
    estados: { enviado: 'submitted', aceptado: 'accepted', publicado: '' },
    tiposRec: { dataset: 'datasets', software: 'software', documento: 'documents' },
    sinNoticias: 'No news yet.',
    sinResultados: 'The first project results will be published as soon as they are consolidated.',
    sinPublicaciones: 'No publications associated with the project yet.',
    sinRecursos: 'Resources will be released on GitHub and Zenodo throughout the project.',
    tfm: "master's theses",
    dirigidoPor: 'supervised by',
    enlace: 'Link',
    comoCitar: 'How to cite',
    webIP: 'PI website',
    logosNota: 'Research groups',
    logosNota2: '(GNOSIS subgroup) and',
    logosNota3: ', University of Alcalá.',
  },
} as const;

export const prefijo = (lang: Lang) => (lang === 'es' ? '' : '/en');

// Devuelve la ruta equivalente en el otro idioma.
export const rutaAlterna = (lang: Lang, rutaSinBase: string) => {
  const limpia = rutaSinBase.replace(/^\/en(?=\/|$)/, '') || '/';
  return lang === 'es' ? `/en${limpia === '/' ? '' : limpia}` || '/en' : limpia;
};

export const fecha = (d: Date, lang: Lang, opciones: Intl.DateTimeFormatOptions) =>
  d.toLocaleDateString(textos[lang].locale, opciones).replace('.', '');
