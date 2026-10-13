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
    privacidad: 'Las estadísticas de visitas se recogen con GoatCounter, sin cookies ni datos personales.',
    privacidadUrl: 'https://www.goatcounter.com/help/privacy',
    descripcion: 'APT-GRAN: atribución de amenazas persistentes avanzadas mediante redes neuronales de grafos. Proyecto de investigación de la Universidad de Alcalá.',
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
    privacidad: 'Visit statistics are collected with GoatCounter, without cookies or personal data.',
    privacidadUrl: 'https://www.goatcounter.com/help/privacy',
    descripcion: 'APT-GRAN: attribution of advanced persistent threats with graph neural networks. Research project at the University of Alcalá.',
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

export const fichaUAH = 'https://portalcientifico.uah.es/proyectos/1528321/detalle';
export const repositorio = 'https://github.com/GNOSIS-UAH/apt-gran';

// Datos del proyecto para los datos estructurados (schema.org) de JsonLd.astro.
export const proyecto = {
  acronimo: 'APT-GRAN',
  titulo: 'Atribución Inteligente de Amenazas Persistentes Avanzadas en Ciberseguridad mediante Redes Neuronales y Modelado en Grafos',
  titulo_en: 'Intelligent Attribution of Advanced Persistent Threats in Cybersecurity through Neural Networks and Graph Modelling',
  referencia,
  inicio: '2025-12-19',
  fin: '2026-12-18',
  importe: 7605,
  sameAs: [fichaUAH, 'https://edelahozuah.github.io/investigacion/#apt-gran', repositorio],
  financiador: {
    nombre: 'Universidad de Alcalá',
    nombre_en: 'University of Alcalá',
    url: 'https://www.uah.es/',
    sameAs: ['https://ror.org/04pmn0e78'],
  },
  convocatoria: 'Ayudas para la realización de proyectos de investigación 2025, Programa Propio de Investigación de la Universidad de Alcalá',
  convocatoria_en: '2025 research project grants, Own Research Programme of the University of Alcalá',
  grupos: [
    { id: 'netis', clave: 'NetIS', nombre: 'NetIS, Grupo de Investigación Redes y Sistemas Inteligentes', nombre_en: 'NetIS, Networks and Intelligent Systems research group', url: 'https://netis.web.uah.es/' },
    { id: 'gheode', clave: 'GHEODE', nombre: 'GHEODE, Grupo de Investigación en Heurísticas Avanzadas y Optimización para el Diseño de Sistemas Inteligentes', nombre_en: 'GHEODE, Advanced Heuristics and Optimization research group', url: 'https://gheode.web.uah.es/' },
  ],
  palabrasClave: ['atribución de ciberataques', 'amenazas persistentes avanzadas', 'inteligencia de ciberamenazas', 'redes neuronales de grafos', 'MITRE ATT&CK', 'ciberseguridad'],
  palabrasClave_en: ['cyberattack attribution', 'advanced persistent threats', 'cyber threat intelligence', 'graph neural networks', 'MITRE ATT&CK', 'cybersecurity'],
};
