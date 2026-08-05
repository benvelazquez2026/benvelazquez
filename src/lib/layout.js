/**
 * The HTML shell. Every page passes through here, which is what guarantees
 * the SEO scaffolding (canonical, hreflang, OG, JSON-LD, breadcrumbs) is
 * present and correct on all 40+ pages without anyone remembering to add it.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { site, routes, primaryNav, footerNav, pathFor, urlFor, absolute } from '../data/site.js';
import { esc, each, jsonLd, minify, clamp } from './html.js';
import { ui } from '../data/ui.js';

const CSS = readFileSync(fileURLToPath(new URL('../styles/main.css', import.meta.url)), 'utf8');
const JS = readFileSync(fileURLToPath(new URL('../assets/js/site.js', import.meta.url)), 'utf8');

/** Collapse the stylesheet — comments and indentation add up over 40 pages. */
function squishCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;\}/g, '}')
    .replace(/\s+/g, ' ')
    .trim();
}

const CSS_MIN = squishCss(CSS);

/** Alternate-language URLs for the current page. */
function alternates(key, locale, slugOverride) {
  if (slugOverride) return slugOverride;
  return site.locales.map((l) => ({ locale: l, url: urlFor(key, l) }));
}

function headerHtml(locale, activeKey, alts) {
  const t = ui[locale];
  const langLinks = site.locales
    .map((l) => {
      const alt = alts.find((a) => a.locale === l);
      // Site-relative, so the switcher works on preview deploys and locally.
      // The <link rel="alternate"> tags in <head> stay absolute, as required.
      const href = (alt ? alt.url : urlFor('home', l)).replace(site.origin, '') || '/';
      const current = l === locale;
      return `<a href="${esc(href)}" hreflang="${l}" lang="${l}"${
        current ? ' aria-current="true"' : ''
      } aria-label="${esc(t.langLabel[l])}">${l.toUpperCase()}</a>`;
    })
    .join('');

  const navItems = each(primaryNav, (key) => {
    const current = key === activeKey;
    return `<li><a href="${esc(pathFor(key, locale))}"${current ? ' aria-current="page"' : ''}>${esc(
      t.nav[key],
    )}</a></li>`;
  });

  return `<header class="site-header">
<div class="wrap bar">
<a href="${esc(pathFor('home', locale))}" class="wordmark" aria-label="${esc(t.homeLabel)}">${esc(
    site.brand,
  )}<span>.</span></a>
<nav id="nav" class="nav-links-wrap" aria-label="${esc(t.primaryNavLabel)}">
<ul class="nav-links" id="navList">${navItems}</ul>
</nav>
<div class="bar-right">
<div class="lang-switch" role="group" aria-label="${esc(t.languageLabel)}">${langLinks}</div>
<a href="${esc(pathFor('apply', locale))}" class="btn btn-primary">${esc(t.navCta)}</a>
<button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navList" aria-label="${esc(
    t.menuLabel,
  )}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg></button>
</div>
</div>
</header>`;
}

function footerHtml(locale) {
  const t = ui[locale];
  const col = (heading, keys) => `<div class="foot-col">
<h3>${esc(heading)}</h3>
<ul>${each(keys, (k) => `<li><a href="${esc(pathFor(k, locale))}">${esc(t.nav[k])}</a></li>`)}</ul>
</div>`;

  const socialLinks = each(
    Object.entries(site.socialLabels),
    ([label, href]) =>
      `<li><a href="${esc(href)}" rel="me noopener" target="_blank">${esc(label)}<span class="visually-hidden"> ${esc(
        t.newWindow,
      )}</span></a></li>`,
  );

  return `<footer class="site-footer">
<div class="wrap">
<div class="foot-grid">
<div class="foot-brand">
<h2>${esc(site.brand)}<span class="signal">.</span></h2>
<span class="mono">${esc(t.footerTag)}</span>
<p>${esc(t.footerBlurb)}</p>
</div>
${col(t.footerHeadings.work, footerNav.work)}
${col(t.footerHeadings.explore, footerNav.explore)}
${col(t.footerHeadings.company, footerNav.company)}
<div class="foot-col">
<h3>${esc(t.footerHeadings.connect)}</h3>
<ul>${socialLinks}<li><a href="mailto:${esc(site.email)}">Grey Matters Sports Group</a></li></ul>
</div>
</div>
<div class="foot-grid" style="margin-bottom:26px">
${col(t.footerHeadings.legal, footerNav.legal)}
</div>
<div class="foot-bottom">
<span>© ${new Date().getFullYear()} ${esc(site.name)}. ${esc(t.rights)}</span>
<span class="mono">${esc(t.socrates)}</span>
</div>
</div>
</footer>`;
}

function breadcrumbHtml(trail, locale) {
  if (!trail || trail.length < 2) return '';
  const items = each(trail, (item, i) => {
    const last = i === trail.length - 1;
    return last
      ? `<li aria-current="page">${esc(item.name)}</li>`
      : `<li><a href="${esc(item.url.replace(site.origin, '') || '/')}">${esc(item.name)}</a></li>`;
  });
  return `<nav class="breadcrumbs" aria-label="${esc(ui[locale].breadcrumbLabel)}"><div class="wrap"><ol>${items}</ol></div></nav>`;
}

/**
 * Render a complete page.
 *
 * @param {object} page
 * @param {string} page.locale        'en' | 'es'
 * @param {string} page.key           route key (for nav highlighting)
 * @param {string} page.url           absolute canonical URL
 * @param {string} page.title         <title> — keep under ~60 chars
 * @param {string} page.description   meta description — kept under 160
 * @param {string} page.content       page body HTML
 * @param {Array}  page.schema        JSON-LD entities for the @graph
 * @param {Array}  page.breadcrumb    [{name, url}] trail
 * @param {Array}  [page.alternates]  override hreflang pairs
 * @param {boolean}[page.noindex]     exclude from indexes (404, thank-you)
 * @param {string} [page.ogImage]     absolute OG image URL
 */
export function renderPage(page) {
  const {
    locale = 'en',
    key,
    url,
    title,
    description,
    content,
    schema = [],
    breadcrumb = [],
    noindex = false,
    ogImage = absolute('/img/og-default.jpg'),
    ogType = 'website',
    publishedTime,
    modifiedTime,
    bodyClass = '',
  } = page;

  const t = ui[locale];
  const alts = alternates(key, locale, page.alternates);
  const desc = clamp(description, 158);

  // A staging deploy must never be indexed, and must never canonicalise at
  // the production domain — that would hand its signals to whatever is
  // currently served there.
  const blockIndexing = noindex || site.isStaging;

  const hreflangTags = each(
    alts,
    (a) => `<link rel="alternate" hreflang="${a.locale === 'en' ? 'en' : a.locale}" href="${esc(a.url)}">`,
  );
  const xDefault = alts.find((a) => a.locale === site.defaultLocale);

  const graphJson = jsonLd({ '@context': 'https://schema.org', '@graph': schema.filter(Boolean) });

  const html = `<!doctype html>
<html lang="${locale === 'es' ? 'es' : 'en'}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(url)}">
${
  site.isStaging
    ? '<meta name="robots" content="noindex, nofollow">\n<meta name="googlebot" content="noindex, nofollow">'
    : noindex
      ? '<meta name="robots" content="noindex, follow">'
      : '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">'
}
${blockIndexing ? '' : hreflangTags}
${blockIndexing || !xDefault ? '' : `<link rel="alternate" hreflang="x-default" href="${esc(xDefault.url)}">`}
<meta name="author" content="${esc(site.name)}">
<meta name="theme-color" content="#14161a">
<meta name="color-scheme" content="dark light">
<meta name="format-detection" content="telephone=no">

<meta property="og:type" content="${esc(ogType)}">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:locale" content="${locale === 'es' ? 'es_ES' : 'en_US'}">
${each(
  alts.filter((a) => a.locale !== locale),
  (a) => `<meta property="og:locale:alternate" content="${a.locale === 'es' ? 'es_ES' : 'en_US'}">`,
)}
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(t.ogAlt)}">
${publishedTime ? `<meta property="article:published_time" content="${esc(publishedTime)}">` : ''}
${modifiedTime ? `<meta property="article:modified_time" content="${esc(modifiedTime)}">` : ''}

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="${esc(site.twitterHandle)}">
<meta name="twitter:creator" content="${esc(site.twitterHandle)}">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(ogImage)}">

<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">

<link rel="preload" href="/fonts/bricolage-grotesque-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/hanken-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>

<link rel="alternate" type="application/rss+xml" title="${esc(t.rssTitle)}" href="${esc(
    locale === 'es' ? '/es/feed.xml' : '/feed.xml',
  )}">

<style>${CSS_MIN}</style>
<script type="application/ld+json">${graphJson}</script>
</head>
<body class="${esc(bodyClass)}">
<script>document.documentElement.classList.remove('no-js')</script>
<a class="skip-link" href="#main">${esc(t.skip)}</a>
${headerHtml(locale, key, alts)}
${breadcrumbHtml(breadcrumb, locale)}
<main id="main">
${content}
</main>
${footerHtml(locale)}
<script>${JS}</script>
</body>
</html>`;

  return minify(html);
}
