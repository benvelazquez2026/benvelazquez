/**
 * Global site configuration — the single source of truth for anything that
 * appears in more than one place (domain, business identity, schema.org
 * entities, social profiles, route table).
 *
 * Editing a value here updates every page, the sitemap, the RSS feed, the
 * structured data and llms.txt on the next `npm run build`.
 */

/**
 * The live domain. Everything canonical hangs off this.
 *
 * Override it with SITE_ORIGIN to build for anywhere else — a workers.dev
 * sandbox, a preview alias, localhost. Any origin other than production is
 * treated as staging, which forces `noindex, nofollow` on every page and a
 * `Disallow: /` robots.txt, so a review deploy can never be indexed or
 * canonicalised at the real site. Unset SITE_ORIGIN and it flips back.
 *
 *   SITE_ORIGIN=https://benvelazquez.blue-recipe-dcdd.workers.dev npm run build
 *   npm run build:staging     # same thing, shorter
 */
const PRODUCTION_ORIGIN = 'https://www.benvelazquez.com';
const ORIGIN = (process.env.SITE_ORIGIN || PRODUCTION_ORIGIN).replace(/\/+$/, '');

export const site = {
  origin: ORIGIN,
  productionOrigin: PRODUCTION_ORIGIN,
  isStaging: ORIGIN !== PRODUCTION_ORIGIN,
  defaultLocale: 'en',
  locales: ['en', 'es'],

  name: 'Ben Velazquez',
  brand: 'BEN VELAZQUEZ',
  founded: '2004',

  // Contact + social. Used by schema.org, the footer and the contact page.
  email: 'ben@benvelazquez.com',

  // Form handler. The application form posts here directly — both via fetch
  // and, with JavaScript off, as a native form submit. Changing this needs a
  // matching change to connect-src and form-action in the CSP (build.mjs).
  formEndpoint: 'https://formspree.io/f/xzebvjgz',
  formHost: 'https://formspree.io',
  social: [
    'https://www.instagram.com/benvelazqueznyc/',
    'https://www.linkedin.com/in/benvelazqueznyc/',
    'https://twitter.com/benvelazqueznyc',
  ],
  socialLabels: {
    Instagram: 'https://www.instagram.com/benvelazqueznyc/',
    LinkedIn: 'https://www.linkedin.com/in/benvelazqueznyc/',
    'Twitter / X': 'https://twitter.com/benvelazqueznyc',
  },
  twitterHandle: '@benvelazqueznyc',

  // Service area. Ben works with clients in NYC and travels; there is no
  // walk-in address published, so schema uses areaServed rather than a
  // street address.
  geo: {
    city: 'New York',
    region: 'NY',
    regionName: 'New York',
    country: 'US',
    countryName: 'United States',
    latitude: 40.7128,
    longitude: -74.006,
  },

  // External references used across pages and in structured data.
  links: {
    book: 'https://www.amazon.com/FASCIA-Clinical-Applications-Health-Performance/dp/1418055697',
    stack: 'https://www.stack.com/expert/ben-velazquez',
    beingMariano: 'https://www.amazon.com/BEING-Mariano-Rivera-Season-1/dp/B00G4B073O',
    concussionFoundation: 'https://concussionfoundation.org/',
    // Placeholders — swap for the live URLs when they are ready.
    executiveReset: '#',
    podcast: '#',
    gtg: '#',
    p2717: '#',
    superpatch: '#',
  },

  // Videos are embedded through a click-to-load facade so that YouTube's
  // ~1.5 MB player never touches the critical path.
  videos: [
    {
      id: 'Fl_pMMycVhM',
      name: { en: 'Performance work with the world’s best', es: 'Trabajo de rendimiento con el mejor del mundo' },
      tag: 'NHL · Connor McDavid',
      description: {
        en: 'Ben Velazquez leading a performance rehabilitation session with NHL centre Connor McDavid.',
        es: 'Ben Velazquez dirigiendo una sesión de rehabilitación de rendimiento con el centro de la NHL Connor McDavid.',
      },
      uploadDate: '2023-08-14',
    },
    {
      id: 'eruxVLHQkJE',
      name: { en: 'Building durability and power', es: 'Construyendo durabilidad y potencia' },
      tag: 'NHL · Connor McDavid',
      description: {
        en: 'Off-season durability and power development work from inside the weight room.',
        es: 'Trabajo de durabilidad y desarrollo de potencia de pretemporada desde dentro de la sala de pesas.',
      },
      uploadDate: '2023-09-05',
    },
  ],

  // Roster scarcity numbers surface in several places; keep them in one spot.
  roster: {
    conciergeSeats: 7,
    openSpots: 5,
  },

  pricing: {
    reset: 2970, // in USD *10 to avoid float drift where needed; see money()
    core: 2300,
    concierge: 6500,
    performanceDay: 3000,
    resetDisplay: 297,
  },
};

/**
 * Route table. Every page is declared once, with a per-locale slug so that
 * Spanish URLs read like Spanish (proper international SEO) while still
 * pairing cleanly with their English counterpart for hreflang.
 *
 * `key`      internal identifier, also the content lookup key
 * `path`     per-locale path segment(s) below the locale root
 * `priority` sitemap priority
 * `changefreq` sitemap change frequency
 */
export const routes = [
  { key: 'home', path: { en: '', es: '' }, priority: 1.0, changefreq: 'weekly' },
  { key: 'about', path: { en: 'about', es: 'sobre-ben' }, priority: 0.9, changefreq: 'monthly' },
  { key: 'method', path: { en: 'method', es: 'metodo' }, priority: 0.9, changefreq: 'monthly' },
  { key: 'eldoa', path: { en: 'eldoa', es: 'eldoa' }, priority: 0.9, changefreq: 'monthly' },
  {
    key: 'executive',
    path: { en: 'executive-performance', es: 'rendimiento-ejecutivo' },
    priority: 0.95,
    changefreq: 'monthly',
  },
  { key: 'athletes', path: { en: 'athletes', es: 'atletas' }, priority: 0.9, changefreq: 'monthly' },
  {
    key: 'concussion',
    path: { en: 'concussion-recovery', es: 'recuperacion-de-conmociones' },
    priority: 0.9,
    changefreq: 'monthly',
  },
  { key: 'programs', path: { en: 'programs', es: 'programas' }, priority: 0.95, changefreq: 'monthly' },
  { key: 'results', path: { en: 'results', es: 'resultados' }, priority: 0.8, changefreq: 'monthly' },
  { key: 'insights', path: { en: 'insights', es: 'insights' }, priority: 0.8, changefreq: 'weekly' },
  { key: 'faq', path: { en: 'faq', es: 'preguntas-frecuentes' }, priority: 0.8, changefreq: 'monthly' },
  { key: 'apply', path: { en: 'apply', es: 'aplicar' }, priority: 0.9, changefreq: 'monthly' },
  { key: 'contact', path: { en: 'contact', es: 'contacto' }, priority: 0.7, changefreq: 'yearly' },
  { key: 'podcast', path: { en: 'podcast', es: 'podcast' }, priority: 0.6, changefreq: 'monthly' },
  { key: 'whatIUse', path: { en: 'what-i-use', es: 'lo-que-uso' }, priority: 0.6, changefreq: 'monthly' },
  { key: 'privacy', path: { en: 'privacy', es: 'privacidad' }, priority: 0.2, changefreq: 'yearly' },
  { key: 'terms', path: { en: 'terms', es: 'terminos' }, priority: 0.2, changefreq: 'yearly' },
  {
    key: 'disclosure',
    path: { en: 'affiliate-disclosure', es: 'divulgacion-de-afiliados' },
    priority: 0.2,
    changefreq: 'yearly',
  },
];

/** Navigation, as route keys. Labels come from the locale content files. */
export const primaryNav = ['executive', 'athletes', 'concussion', 'method', 'programs', 'insights', 'about'];

export const footerNav = {
  work: ['executive', 'athletes', 'concussion', 'eldoa'],
  explore: ['method', 'programs', 'results', 'insights', 'podcast'],
  company: ['about', 'faq', 'contact', 'whatIUse'],
  legal: ['privacy', 'terms', 'disclosure'],
};

/**
 * Resolve the absolute path for a route key in a locale.
 * English lives at the root, Spanish under /es/.
 */
export function pathFor(key, locale = 'en') {
  const route = routes.find((r) => r.key === key);
  if (!route) throw new Error(`Unknown route key: ${key}`);
  const slug = route.path[locale];
  const prefix = locale === site.defaultLocale ? '' : `/${locale}`;
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

/** Absolute URL for a route key in a locale. */
export function urlFor(key, locale = 'en') {
  return site.origin + pathFor(key, locale);
}

/** Absolute URL for an arbitrary site-root-relative path. */
export function absolute(path) {
  return site.origin + (path.startsWith('/') ? path : `/${path}`);
}
