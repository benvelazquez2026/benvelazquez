#!/usr/bin/env node
/**
 * Pre-flight audit of dist/.
 *
 * Catches the things that silently degrade a site over time: broken internal
 * links, duplicate or over-long titles and descriptions, missing alt text,
 * heading-order breaks, unlabelled form fields, invalid JSON-LD, and pages
 * that lost their canonical or hreflang tags.
 *
 *   npm run check     # build + audit
 */

import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const errors = [];
const warnings = [];
const fail = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

/* ---- Collect files ---- */
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const allFiles = walk(DIST);
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));

/**
 * Staging builds deliberately drop hreflang and force noindex, so those
 * checks have to invert rather than fire. Detected from the robots.txt the
 * build emits, so the audit needs no environment of its own.
 */
const robotsTxt = existsSync(join(DIST, 'robots.txt')) ? readFileSync(join(DIST, 'robots.txt'), 'utf8') : '';
const isStaging = /STAGING \/ REVIEW DEPLOY/.test(robotsTxt);
if (isStaging) console.log('\n(staging build — indexing checks inverted)');
const assetPaths = new Set(allFiles.map((f) => `/${relative(DIST, f).split('\\').join('/')}`));

/** URL paths that resolve: every directory index plus every raw asset. */
const validPaths = new Set(assetPaths);
for (const p of assetPaths) {
  if (p.endsWith('/index.html')) validPaths.add(p.replace(/index\.html$/, ''));
}

/* ---- Per-file checks ---- */
const titles = new Map();
const descriptions = new Map();

const attr = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

for (const file of htmlFiles) {
  const rel = relative(DIST, file).split('\\').join('/');
  const html = readFileSync(file, 'utf8');
  const is404 = rel.endsWith('404.html');

  /* --- Title --- */
  const title = attr(html, /<title>([\s\S]*?)<\/title>/);
  if (!title) fail(rel, 'missing <title>');
  else {
    if (title.length > 65) warn(rel, `title is ${title.length} chars (aim for <= 60): "${title}"`);
    if (!is404) {
      if (titles.has(title)) fail(rel, `duplicate title, also on ${titles.get(title)}`);
      else titles.set(title, rel);
    }
  }

  /* --- Meta description --- */
  const desc = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!desc) fail(rel, 'missing meta description');
  else {
    if (desc.length > 160) fail(rel, `meta description is ${desc.length} chars (max 160)`);
    if (desc.length < 70) warn(rel, `meta description is only ${desc.length} chars`);
    if (desc.endsWith('…')) warn(rel, 'meta description was truncated mid-sentence by clamp()');
    if (!is404) {
      if (descriptions.has(desc)) fail(rel, `duplicate description, also on ${descriptions.get(desc)}`);
      else descriptions.set(desc, rel);
    }
  }

  /* --- Canonical + hreflang --- */
  if (!/<link rel="canonical"/.test(html)) fail(rel, 'missing canonical');

  if (isStaging) {
    // A review deploy must be un-indexable, and must not point search
    // engines at the production domain.
    if (!/<meta name="robots" content="noindex, nofollow">/.test(html))
      fail(rel, 'staging page is not noindex');
    const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
    if (canonical && /www\.benvelazquez\.com/.test(canonical))
      fail(rel, `staging page canonicalises at production: ${canonical}`);
  } else if (!is404) {
    if (!/hreflang="en"/.test(html)) fail(rel, 'missing hreflang=en');
    if (!/hreflang="es"/.test(html)) fail(rel, 'missing hreflang=es');
    if (!/hreflang="x-default"/.test(html)) fail(rel, 'missing hreflang=x-default');
  }

  /* --- Lang + landmarks --- */
  if (!/<html lang="(en|es)"/.test(html)) fail(rel, 'missing or invalid <html lang>');
  if (!/<main id="main">/.test(html)) fail(rel, 'missing <main>');
  if (!/class="skip-link"/.test(html)) fail(rel, 'missing skip link');

  /* --- Headings --- */
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length === 0) fail(rel, 'no <h1>');
  if (h1s.length > 1) fail(rel, `${h1s.length} <h1> elements (expected exactly 1)`);

  const levels = [...html.matchAll(/<h([1-4])[\s>]/g)].map((m) => Number(m[1]));
  let prev = 0;
  levels.forEach((lvl) => {
    if (prev && lvl > prev + 1) warn(rel, `heading jumps from h${prev} to h${lvl}`);
    prev = lvl;
  });

  /* --- Images --- */
  for (const img of html.match(/<img[^>]*>/g) || []) {
    if (!/\salt=/.test(img)) fail(rel, `<img> without alt: ${img.slice(0, 90)}`);
    if (!/\swidth=/.test(img) || !/\sheight=/.test(img))
      warn(rel, `<img> without width/height (CLS risk): ${img.slice(0, 70)}`);
  }

  /* --- Form controls --- */
  for (const input of html.match(/<(input|select|textarea)[^>]*>/g) || []) {
    const id = attr(input, /\sid="([^"]+)"/);
    const hasAria = /aria-label(ledby)?=/.test(input);
    if (!id && !hasAria) {
      fail(rel, `form control with no id or aria-label: ${input.slice(0, 70)}`);
      continue;
    }
    if (id && !hasAria && !new RegExp(`<label[^>]*for="${id}"`).test(html))
      fail(rel, `no <label for="${id}">`);
  }

  /* --- Buttons need an accessible name --- */
  for (const btn of html.match(/<button[^>]*>(?:(?!<\/button>)[\s\S])*<\/button>/g) || []) {
    const text = btn.replace(/<[^>]+>/g, '').trim();
    if (!text && !/aria-label=/.test(btn)) fail(rel, `<button> with no accessible name`);
  }

  /* --- JSON-LD --- */
  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ld) fail(rel, 'missing JSON-LD');
  else {
    try {
      const data = JSON.parse(ld[1].replace(/\\u003c/g, '<'));
      if (!data['@graph'] || !Array.isArray(data['@graph'])) fail(rel, 'JSON-LD has no @graph array');
      else {
        const types = data['@graph'].flatMap((n) => (Array.isArray(n['@type']) ? n['@type'] : [n['@type']]));
        for (const required of ['Person', 'WebSite', 'WebPage']) {
          if (!types.includes(required)) fail(rel, `JSON-LD missing ${required}`);
        }
        // A fabricated rating is a manual-action risk; assert we never emit one.
        if (JSON.stringify(data).includes('aggregateRating'))
          fail(rel, 'JSON-LD contains aggregateRating — ratings must not be fabricated');
      }
    } catch (err) {
      fail(rel, `JSON-LD does not parse: ${err.message}`);
    }
  }

  /* --- FAQ markup must match visible content --- */
  const visibleFaqs = (html.match(/<details class="faq-item">/g) || []).length;
  const schemaFaqs = (html.match(/"@type":"Question"/g) || []).length;
  if (visibleFaqs !== schemaFaqs)
    fail(rel, `FAQ mismatch: ${visibleFaqs} visible, ${schemaFaqs} in schema (must be equal)`);

  /* --- Internal links --- */
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (href.startsWith('/api/')) continue;
    if (!validPaths.has(href) && !validPaths.has(`${href}/`) && !validPaths.has(`${href}index.html`))
      fail(rel, `broken internal link: ${href}`);
  }

  /* --- External links must be safe --- */
  for (const a of html.match(/<a [^>]*target="_blank"[^>]*>/g) || []) {
    if (!/rel="[^"]*noopener/.test(a)) fail(rel, `target=_blank without rel=noopener: ${a.slice(0, 80)}`);
  }

  /* --- Template leakage ---
     A removed config key renders as the literal string "undefined" rather
     than failing the build, so assert it never reaches the output. */
  for (const token of ['undefined', 'null', '[object Object]', 'NaN']) {
    if (html.includes(`>${token}<`) || html.includes(`"${token}"`) || html.includes(`:${token}`))
      fail(rel, `template leaked "${token}" into the page`);
  }

  /* --- Mailto links must be real addresses --- */
  for (const m of html.matchAll(/href="mailto:([^"]*)"/g)) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m[1]))
      fail(rel, `invalid mailto address: "${m[1]}"`);
  }

  /* --- Performance smells --- */
  if (/<link[^>]+rel="stylesheet"[^>]+href="http/.test(html))
    fail(rel, 'external render-blocking stylesheet');
  if (/<script[^>]+src="http/.test(html)) fail(rel, 'external blocking script');
  if (/<iframe/.test(html) && !/video-facade/.test(html)) warn(rel, 'raw <iframe> outside the video facade');

  /* --- Page weight --- */
  const kb = Buffer.byteLength(html) / 1024;
  if (kb > 120) warn(rel, `page is ${Math.round(kb)} KB uncompressed`);
}

/* ---- Site-level files ---- */
for (const required of [
  'sitemap.xml',
  'robots.txt',
  'llms.txt',
  'llms-full.txt',
  'feed.xml',
  'es/feed.xml',
  'manifest.webmanifest',
  '_headers',
  '_redirects',
  '404.html',
  'favicon.ico',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'img/og-default.jpg',
]) {
  if (!existsSync(join(DIST, required))) fail('dist', `missing ${required}`);
}

/* ---- Sitemap sanity ---- */
const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const indexablePages = htmlFiles.filter((f) => !f.endsWith('404.html'));
if (locs.length !== indexablePages.length)
  fail('sitemap.xml', `${locs.length} URLs but ${indexablePages.length} indexable pages`);
for (const loc of locs) {
  const path = loc.replace(/^https?:\/\/[^/]+/, '');
  if (!validPaths.has(path)) fail('sitemap.xml', `URL not present in dist: ${loc}`);
}

/* ---- Report ---- */
console.log(`\nAudited ${htmlFiles.length} pages, ${allFiles.length} files.\n`);

if (warnings.length) {
  console.log(`⚠  ${warnings.length} warning${warnings.length === 1 ? '' : 's'}`);
  warnings.forEach((w) => console.log(`   ${w}`));
  console.log('');
}

if (errors.length) {
  console.log(`✗  ${errors.length} error${errors.length === 1 ? '' : 's'}`);
  errors.forEach((e) => console.log(`   ${e}`));
  console.log('');
  process.exit(1);
}

console.log('✓ No errors.\n');
