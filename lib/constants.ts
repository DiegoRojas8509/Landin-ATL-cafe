// ============================================================
// ATL CAFÉ — SITE CONSTANTS
// All copy, data and configuration lives here.
// Update this file when content changes.
// ============================================================

export const SITE = {
  name:        'ATL Café',
  tagline:     'Más que café. Un espacio para crear.',
  description: 'Espacio de valor. Café de especialidad, arte y comunidad en el corazón de León, Guanajuato.',
  address:     'Panorama 907, León, Guanajuato',
  mapsUrl:     'https://maps.google.com/?q=Panorama+907+Leon+Guanajuato',
  instagram:   'https://www.instagram.com/atl_cafe/',
  tiktok:      'https://www.tiktok.com/@atlcafe',
  instagramHandle: '@atl_cafe',
  tiktokHandle:    '@atlcafe',
} as const

// ============================================================
// NAVIGATION
// ============================================================
export const NAV_LINKS = [
  { label: 'Café',         href: '/cafe' },
  { label: 'Taller de Arte', href: '/taller-de-arte' },
  { label: 'Galería',      href: '/galeria' },
  { label: 'Cursos',       href: '/cursos' },
  { label: 'Comunidad',    href: '/comunidad' },
] as const

// ============================================================
// SPACES (homepage cards + individual pages)
// ============================================================
export interface Space {
  id:       string
  tag:      string
  name:     string
  shortDesc: string
  longDesc: string
  href:     string
  /*
   * IMAGE SLOTS
   * cardImage  → used in the spaces grid card (/public/images/spaces/*)
   * heroImage  → used on each space's dedicated page hero
   */
  cardImage:  string   // e.g. '/images/spaces/cafe-espacio.jpg'
  heroImage:  string   // e.g. '/images/spaces/cafe-hero.jpg'
  highlights: string[]
}

export const SPACES: Space[] = [
  {
    id:        'cafe',
    tag:       '01 — Café',
    name:      'Café de Especialidad',
    shortDesc: 'Café orgánico de Chiapas y Oaxaca, trabajado con comercio justo y trato directo con los cafetaleros.',
    longDesc:  'Contamos con café de especialidad de Chiapas y de Oaxaca donde se trabaja por medio del comercio justo. Brindamos apoyo de asesorías y finanzas a los cafetaleros, trabajando sin intermediarios, lo que permite tener la comunicación directa con ellos, asegurando el pago justo y el café de especialidad de calidad y con certificaciones.',
    href:      '/cafe',
    cardImage: '/images/spaces/cafe_especialidad.webp',
    heroImage: '/images/spaces/cafe_especialidad.webp',
    highlights: ['Sin intermediarios', 'Comercio Justo', 'Q-Score 83.5', 'Chiapas · Oaxaca'],
  },
  {
    id:        'taller',
    tag:       '02 — Creatividad',
    name:      'Taller de Arte',
    shortDesc: 'Espacio abierto en todo horario. Lienzos, mándalas, cerámica, pirograbado y más.',
    longDesc:  'El espacio de taller de arte es abierto al público en todo horario, en el cual pueden elegir su actividad favorita como lienzos, mándalas, bolsas, espejos, piezas de cerámica, termos, separadores y postales para poder crear. ATL ofrece todo el material necesario para cada obra, desde acuarelas, óleos, acrílicos, colores, plumones, textiles y máquina de pirógrafo. Si no terminan sus piezas se pueden resguardar y continuar con ellas otro día sin costo adicional.',
    href:      '/taller-de-arte',
    cardImage: '/images/spaces/taller1.webp',
    heroImage: '/images/spaces/cafe_especialidad.webp',
    highlights: ['Abierto todo el día', 'Material incluido', 'Sin reservación', 'Piezas resguardadas'],
  },
  {
    id:        'galeria',
    tag:       '03 — Cultura',
    name:      'Galería Abierta',
    shortDesc: 'Para todo artista, sin importar trayectoria ni género. Digital, escultura, pintura, danza y música.',
    longDesc:  'El espacio de galería es para todo artista, sin importar el tiempo que lleven de trayectoria, la edad o el género. Lo que se busca en ATL es darle la oportunidad a todas las personas que busquen crear y compartir arte en todas sus ramas ya sea, digital, escultura, pintura, danza, música, etc. Se hace una inauguración oficial de las obras y el tiempo de duración entre cada obra es de 2 meses por artista.',
    href:      '/galeria',
    cardImage: '/images/spaces/galeria2.webp',
    heroImage: '/images/spaces/cafe_especialidad.webp',
    highlights: ['Inauguración oficial', '2 meses por artista', 'Todas las disciplinas', 'Sin restricciones'],
  },
  {
    id:        'cursos',
    tag:       '04 — Comunidad',
    name:      'Cursos y Talleres',
    shortDesc: 'Joyería, serigrafía, escultura y más. El espacio disponible para talleristas por dinámica de consumo.',
    longDesc:  'Se ofrece el espacio de ATL para cursos y talleres creativos donde los talleristas pueden seleccionar la fecha más conveniente y se otorga el espacio a través de una dinámica de consumo. Se han llevado a cabo talleres de toda clase como joyería, cerámica, escultura, arte, serigrafía, etc. Se busca apoyar a los talleristas por medio del espacio y la accesibilidad.',
    href:      '/cursos',
    cardImage: '/images/spaces/cursos1.webp',
    heroImage: '/images/spaces/cursos1.webp',
    highlights: ['Fecha a elegir', 'Dinámica de consumo', 'Joyería · Cerámica · Serigrafía', 'Apoyo a talleristas'],
  },
]

// ============================================================
// PHILOSOPHY PILLARS
// ============================================================
export const PHILOSOPHY_ITEMS = [
  {
    icon:  '☕',
    title: 'Café de Especialidad',
    text:  'Trabajamos directamente con cafetaleros de Chiapas y Oaxaca. Sin intermediarios. Con asesorías y apoyo financiero para impulsar su crecimiento con un pago que respeta su trabajo.',
  },
  {
    icon:  '🤝',
    title: 'Comercio Justo',
    text:  'Una relación equitativa y sostenible con principios de dignidad y respeto. El comercio justo se extiende más allá del café: a cada obra, taller y colaboración dentro de ATL.',
  },
  {
    icon:  '🎨',
    title: 'Arte y Comunidad',
    text:  'Un ecosistema que conecta café, creatividad y cultura. Apoyamos artistas y emprendedores para que crezcan con propósito dentro de nuestra comunidad.',
  },
] as const

// ============================================================
// MANIFESTO PILLARS
// ============================================================
export const MANIFESTO_PILLARS = [
  {
    num:   '01',
    title: 'El Café',
    text:  'Trabajamos directamente con productores de Chiapas y Oaxaca. Sin intermediarios. Con asesorías, apoyo y un precio justo que respeta el trabajo del cafetalero.',
  },
  {
    num:   '02',
    title: 'El Arte',
    text:  'Nuestro espacio es tuyo. Taller abierto, galería sin restricciones de género ni trayectoria. Cualquier persona que quiera crear tiene un lugar en ATL.',
  },
  {
    num:   '03',
    title: 'La Comunidad',
    text:  'Impulsamos emprendedores, artistas y talleristas. El comercio justo no termina con el café — se extiende a cada obra, cada taller y cada colaboración.',
  },
] as const

// ============================================================
// COFFEE DATA (from Zozoaga Roasters trazabilidad document)
// ============================================================
export const COFFEE_DATA = {
  name:       'ATL #1',
  varieties:  ['Typica', 'Mundo Novo', 'Gesha'],
  process:    'Lavado 48h',
  origin:     'San Pedro El Alto / Pochutla, Oaxaca',
  altitude:   '1,500 msnm',
  humidity:   '10.7%',
  density:    'g/L 710',
  qScore:     83.5,
  roastLevel: 'Medio-Claro (Agtron 69)',
  roaster:    'Zozoaga Roasters',
  profile:    ['Miel', 'Caramelo', 'Uva', 'Ciruela', 'Té negro', 'Nueces'],
  stats: [
    { num: '1,500', label: 'msnm' },
    { num: '83.5',  label: 'Q-Score' },
    { num: 'Lavado', label: 'Proceso 48h' },
  ],
} as const

// ============================================================
// CAFÉ COLABORATIVO — weekly poll mock
// (swap out question/options each week, or connect to CMS)
// ============================================================
export const COLAB_POLL = {
  weekLabel: 'Semana 1 · Marzo 2026',
  question:  '¿Les gustaria tener su marca de café o cafetería?',
  options: [
    { id: 'chiapas', label: 'Café de Chiapas',    pct: 1 },
    { id: 'oaxaca',  label: 'Café de Oaxaca',      pct: 31 },
  ],
} as const

// ============================================================
// SEO DEFAULTS
// ============================================================
export const SEO_DEFAULTS = {
  titleTemplate: '%s | ATL Café',
  defaultTitle:  'ATL Café — Café de Especialidad, Arte y Comunidad en León, Guanajuato',
  description:   'Espacio de valor. Café orgánico de Chiapas y Oaxaca con comercio justo, taller de arte abierto, galería y cursos creativos en León, Guanajuato.',
  openGraph: {
    type:        'website',
    locale:      'es_MX',
    url:         'https://atlcafe.mx',
    siteName:    'ATL Café',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'ATL Café' }],
  },
  twitter: {
    handle:      '@atl_cafe',
    cardType:    'summary_large_image',
  },
}
