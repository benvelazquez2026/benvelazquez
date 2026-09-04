/**
 * schema.org / JSON-LD graph builders.
 *
 * Every page emits a single `@graph` so entities can cross-reference by
 * `@id` instead of repeating themselves. Search engines get an unambiguous
 * entity model; answer engines (ChatGPT, Perplexity, Gemini, Claude) get a
 * machine-readable summary of who Ben is and what he sells.
 *
 * Nothing here invents facts. Ratings are never fabricated: only real,
 * attributed `Review` objects are emitted, with no `aggregateRating`.
 */

import { site, urlFor, absolute } from '../data/site.js';
import { plain } from './html.js';

export const ID = {
  person: `${site.origin}/#person`,
  business: `${site.origin}/#business`,
  website: `${site.origin}/#website`,
  organization: `${site.origin}/#organization`,
};

/** The Person entity — the anchor for E-E-A-T and for AI entity resolution. */
export function personEntity(locale = 'en') {
  const bio = {
    en: 'Ben Velazquez is a New York City performance rehabilitation specialist and strength coach with over 20 years working with elite performers, including athletes across the NFL, NHL and MLB. He is a co-contributing author of "Fascia: Clinical Applications for Health and Human Performance", a licensed Soma-Therapist and a Certified Strength & Conditioning Specialist, and a recognised expert in exercise-based concussion solutions.',
    es: 'Ben Velazquez es especialista en rehabilitación de alto rendimiento y preparador físico en Nueva York, con más de 20 años trabajando con atletas de élite de la NFL, la NHL y la MLB. Es coautor colaborador de "Fascia: Clinical Applications for Health and Human Performance", Soma-Terapeuta licenciado y Especialista Certificado en Fuerza y Acondicionamiento, y un experto reconocido en soluciones de ejercicio para conmociones cerebrales.',
  };

  return {
    '@type': 'Person',
    '@id': ID.person,
    name: 'Ben Velazquez',
    alternateName: 'Ben Velázquez',
    url: site.origin + (locale === 'en' ? '/' : '/es/'),
    description: bio[locale],
    disambiguatingDescription:
      locale === 'en'
        ? 'Performance rehabilitation specialist and strength coach in New York City.'
        : 'Especialista en rehabilitación de alto rendimiento y preparador físico en Nueva York.',
    jobTitle:
      locale === 'en'
        ? ['Performance Rehabilitation Specialist', 'Posturologist', 'Strength and Conditioning Coach']
        : ['Especialista en Rehabilitación de Alto Rendimiento', 'Posturólogo', 'Preparador Físico'],
    image: absolute('/img/og-default.jpg'),
    email: `mailto:${site.email}`,
    sameAs: [...site.social, site.links.stack],
    knowsLanguage: [
      { '@type': 'Language', name: 'English', alternateName: 'en' },
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
    ],
    knowsAbout: [
      'Performance rehabilitation',
      'ELDOA',
      'Fascia',
      'Myofascial stretching',
      'Strength and conditioning',
      'Injury prevention',
      'Concussion recovery exercise',
      'Postural restoration',
      'Athletic longevity',
      'Executive health',
    ],
    hasCredential: [
      credential('Licensed Soma-Therapist (Performance Physical Therapy)'),
      credential('Certified Strength & Conditioning Specialist (CSCS)'),
      credential('ACSM Exercise Specialist'),
      credential('ISSA Sports Performance Nutritionist'),
    ],
    memberOf: [
      { '@type': 'Organization', name: 'National Strength and Conditioning Association (NSCA)' },
      { '@type': 'Organization', name: 'American College of Sports Medicine (ACSM)' },
      { '@type': 'Organization', name: 'International Sports Sciences Association (ISSA)' },
    ],
    worksFor: { '@id': ID.business },
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.geo.city,
        addressRegion: site.geo.region,
        addressCountry: site.geo.country,
      },
    },
  };
}

function credential(name) {
  return {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'professional certification',
    name,
  };
}

/** The business entity — powers local/branded search and Knowledge Panel. */
export function businessEntity(locale = 'en') {
  return {
    '@type': ['ProfessionalService', 'HealthAndBeautyBusiness'],
    '@id': ID.business,
    name: 'Ben Velazquez — Performance Rehabilitation',
    alternateName: 'Ben Velazquez Performance',
    url: site.origin + (locale === 'en' ? '/' : '/es/'),
    description:
      locale === 'en'
        ? 'Performance rehabilitation, ELDOA and strength coaching in New York City for professional athletes, executives and people recovering from concussion. Available virtually worldwide and in person in NYC.'
        : 'Rehabilitación de alto rendimiento, ELDOA y preparación física en Nueva York para atletas profesionales, ejecutivos y personas en recuperación de conmociones cerebrales. Disponible en línea a nivel mundial y presencial en NYC.',
    image: absolute('/img/og-default.jpg'),
    logo: absolute('/icons/icon-512.png'),
    email: `mailto:${site.email}`,
    founder: { '@id': ID.person },
    employee: { '@id': ID.person },
    foundingDate: site.founded,
    priceRange: '$$$$',
    currenciesAccepted: 'USD',
    sameAs: site.social,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.geo.city,
      addressRegion: site.geo.region,
      addressCountry: site.geo.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'New York City' },
      { '@type': 'State', name: 'New York' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Place', name: 'Worldwide (virtual)' },
    ],
    availableLanguage: ['en', 'es'],
    knowsLanguage: ['en', 'es'],
    slogan: locale === 'en' ? 'Precision over intensity.' : 'Precisión sobre intensidad.',
  };
}

/** WebSite entity, with declared languages for international targeting. */
export function websiteEntity(locale = 'en') {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: site.origin,
    name: 'Ben Velazquez',
    description:
      locale === 'en'
        ? 'Performance rehabilitation, ELDOA and executive performance coaching with Ben Velazquez, NYC.'
        : 'Rehabilitación de alto rendimiento, ELDOA y coaching de rendimiento ejecutivo con Ben Velazquez, NYC.',
    inLanguage: ['en-US', 'es'],
    publisher: { '@id': ID.business },
    copyrightHolder: { '@id': ID.person },
  };
}

/**
 * WebPage entity for the current page. `speakable` marks the answer-first
 * summary block so voice assistants read the right sentences aloud.
 */
export function webPageEntity({ url, title, description, locale, breadcrumb, datePublished, dateModified, type = 'WebPage' }) {
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': ID.website },
    about: { '@id': ID.person },
    inLanguage: locale === 'es' ? 'es' : 'en-US',
    datePublished,
    dateModified,
    primaryImageOfPage: absolute('/img/og-default.jpg'),
    breadcrumb: breadcrumb ? { '@id': `${url}#breadcrumb` } : undefined,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.answer-block', 'h1'],
    },
  };
}

/** BreadcrumbList from an ordered [{name, url}] trail. */
export function breadcrumbEntity(url, trail) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQPage from [{q, a}]. This is the backbone of the AEO layer: it gives
 * answer engines a clean question/answer pairing for every page.
 */
export function faqEntity(url, faqs) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: plain(faq.q),
      acceptedAnswer: {
        '@type': 'Answer',
        text: plain(faq.a),
      },
    })),
  };
}

/** Service entity for a program/offering page. */
export function serviceEntity({ url, name, description, serviceType, locale, offers = [] }) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType,
    provider: { '@id': ID.business },
    areaServed: [
      { '@type': 'City', name: 'New York City' },
      { '@type': 'Place', name: 'Worldwide (virtual)' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: urlFor('apply', locale),
      availableLanguage: ['en', 'es'],
    },
    offers: offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: 'USD',
      priceSpecification: offer.recurring
        ? {
            '@type': 'UnitPriceSpecification',
            price: offer.price,
            priceCurrency: 'USD',
            billingIncrement: 1,
            unitCode: 'MON',
          }
        : undefined,
      availability: offer.soldOut ? 'https://schema.org/LimitedAvailability' : 'https://schema.org/InStock',
      url: offer.url,
      seller: { '@id': ID.business },
    })),
  };
}

/** Article entity for an insight post. */
export function articleEntity({ url, headline, description, datePublished, dateModified, locale, section, body }) {
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline,
    description,
    articleSection: section,
    articleBody: body,
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: locale === 'es' ? 'es' : 'en-US',
    author: { '@id': ID.person },
    publisher: { '@id': ID.business },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    image: absolute('/img/og-default.jpg'),
    isAccessibleForFree: true,
  };
}

/** VideoObject for the click-to-load YouTube facades. */
export function videoEntity(video, locale) {
  return {
    '@type': 'VideoObject',
    '@id': `${site.origin}/#video-${video.id}`,
    name: `${video.tag} — ${video.name[locale]}`,
    description: video.description[locale],
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
    uploadDate: video.uploadDate,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    publisher: { '@id': ID.business },
  };
}

/** The published book — a strong, verifiable authority signal. */
export function bookEntity() {
  return {
    '@type': 'Book',
    '@id': `${site.origin}/#book`,
    name: 'Fascia: Clinical Applications for Health and Human Performance',
    url: site.links.book,
    contributor: { '@id': ID.person },
    bookFormat: 'https://schema.org/Paperback',
  };
}

/** Individual, attributed testimonial. Never paired with a fake rating. */
export function reviewEntity(quote, locale) {
  return {
    '@type': 'Review',
    reviewBody: plain(quote.text[locale]),
    author: { '@type': 'Person', name: quote.name, jobTitle: plain(quote.role[locale]) },
    itemReviewed: { '@id': ID.business },
  };
}

/** Assemble the final graph, dropping empty slots. */
export function graph(entities) {
  return {
    '@context': 'https://schema.org',
    '@graph': entities.filter(Boolean),
  };
}
