#!/usr/bin/env node
/**
 * Generate branded Open Graph images and PNG app icons.
 *
 * Renders an HTML card with the real site fonts in headless Chromium and
 * screenshots it at 1200×630 — so social previews match the site instead of
 * falling back to a generic logo.
 *
 * Run once after changing branding or adding pages, then commit the output:
 *
 *   npm run og
 *
 * Requires Playwright (available globally in this environment). Build output
 * does not depend on this script — the PNGs it writes live in public/.
 */

import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

import { site, routes } from '../src/data/site.js';
import { allInsights as insights } from '../src/data/insights.js';
import { content as contentEn } from '../src/data/content.en.js';
import { content as contentEs } from '../src/data/content.es.js';
import { plain, esc } from '../src/lib/html.js';
import { LOGO_PATH, LOGO_WIDTH, LOGO_HEIGHT, logoSvg } from '../src/data/logo.js';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_IMG = join(ROOT, 'public', 'img');
const OUT_ICON = join(ROOT, 'public', 'icons');

/* Resolve Playwright from wherever it is installed (local or global). */
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  try {
    const globalRoot = execSyncSafe('npm root -g');
    ({ chromium } = require(join(globalRoot, 'playwright')));
  } catch {
    console.error('Playwright not found. Install it, or skip: the committed PNGs remain valid.');
    process.exit(1);
  }
}

function execSyncSafe(cmd) {
  const { execSync } = require('node:child_process');
  return execSync(cmd).toString().trim();
}

const fontData = (file) => readFileSync(join(ROOT, 'public', 'fonts', file)).toString('base64');
const BRICOLAGE = fontData('bricolage-grotesque-latin.woff2');
const HANKEN = fontData('hanken-grotesk-latin.woff2');
const MONO = fontData('space-mono-400-latin.woff2');

const LOCALE_CONTENT = { en: contentEn, es: contentEs };

const STRAP = {
  en: 'Performance Rehab · NYC · Tampa · Puerto Rico',
  es: 'Rehabilitación · NYC · Tampa · Puerto Rico',
};
const FOOT = {
  en: 'NFL · NHL · MLB · 20+ years · ELDOA & fascia work',
  es: 'NFL · NHL · MLB · 20+ años · ELDOA y trabajo de fascia',
};

/** An article's own photo, inlined, for the right-hand side of its card. */
function photoLayer(photo) {
  if (!photo) return '';
  const file = join(OUT_IMG, `${photo.slug}-${photo.widths[photo.widths.length - 1]}.jpg`);
  const data = readFileSync(file).toString('base64');
  return `<div class="photo" style="background-image:url(data:image/jpeg;base64,${data});background-position:${photo.position || '50% 50%'}"></div>`;
}

function cardHtml({ kicker, title, locale, photo }) {
  const size = photo ? (title.length > 60 ? 50 : title.length > 36 ? 60 : 70) : title.length > 74 ? 58 : title.length > 46 ? 70 : 82;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(data:font/woff2;base64,${BRICOLAGE}) format('woff2');font-weight:200 800}
@font-face{font-family:H;src:url(data:font/woff2;base64,${HANKEN}) format('woff2');font-weight:100 900}
@font-face{font-family:M;src:url(data:font/woff2;base64,${MONO}) format('woff2')}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#14161A;font-family:H,sans-serif;color:#EFEBE2;
  position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;padding:64px 72px}
.glow{position:absolute;right:-10%;top:-34%;width:62%;height:150%;
  background:radial-gradient(closest-side,rgba(99,102,241,.28),transparent 70%)}
.ticks{position:absolute;left:0;right:0;bottom:0;height:18px;
  background-image:repeating-linear-gradient(90deg,rgba(239,237,226,.16) 0 1px,transparent 1px 28px)}
.top{display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2}
.mark{display:flex;align-items:center;gap:18px;font-family:B;font-weight:800;font-size:26px;letter-spacing:.02em}
.mark svg{width:81px;height:56px;color:#EFEBE2}
.mark i{color:#6366F1;font-style:normal}
.strap{font-family:M;font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:#8C8980}
.mid{position:relative;z-index:2;max-width:940px}
.kicker{font-family:M;font-size:16px;letter-spacing:.18em;text-transform:uppercase;color:#6366F1;
  display:flex;align-items:center;gap:14px;margin-bottom:22px}
.kicker::before{content:"";width:40px;height:2px;background:#6366F1}
h1{font-family:B;font-weight:800;letter-spacing:-.025em;line-height:1.03;
  font-size:${size}px}
.photo{position:absolute;top:0;right:0;bottom:0;width:56%;background-size:cover}
.photo::after{content:"";position:absolute;inset:0;
  background:linear-gradient(90deg,#14161A 0%,rgba(20,22,26,.72) 22%,rgba(20,22,26,.12) 58%,rgba(20,22,26,.25) 100%),
  linear-gradient(180deg,rgba(20,22,26,.35) 0%,transparent 28%,transparent 70%,rgba(20,22,26,.8) 100%)}
.has-photo .mid{max-width:640px}
.has-photo .strap{display:none}
.foot{display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2;
  border-top:1px solid rgba(239,237,226,.16);padding-top:26px}
.foot span{font-family:M;font-size:15px;letter-spacing:.12em;text-transform:uppercase;color:#B7B3A9}
.dot{width:10px;height:10px;border-radius:50%;background:#6366F1;display:inline-block;margin-right:12px;
  vertical-align:middle}
</style></head><body${photo ? ' class="has-photo"' : ''}>
${photo ? photoLayer(photo) : '<div class="glow"></div>'}
<div class="top"><div class="mark">${logoSvg()}<span>BEN VELAZQUEZ<i>.</i></span></div><div class="strap">${esc(STRAP[locale])}</div></div>
<div class="mid"><div class="kicker">${esc(kicker)}</div><h1>${esc(title)}</h1></div>
<div class="foot"><span><i class="dot"></i>${esc(FOOT[locale])}</span><span>benvelazquez.com</span></div>
<div class="ticks"></div>
</body></html>`;
}

/**
 * The logo card: the BEN / V mark, large and centred, with the wordmark under
 * it. Used for the home page and the fallback image, so a bare link to the
 * site previews as the logo. Everything sits in the middle so apps that crop
 * the preview to a square (WhatsApp, Slack) still show the whole mark.
 */
function logoCardHtml({ locale }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(data:font/woff2;base64,${BRICOLAGE}) format('woff2');font-weight:200 800}
@font-face{font-family:M;src:url(data:font/woff2;base64,${MONO}) format('woff2')}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#14161A;color:#EFEBE2;position:relative;overflow:hidden;
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:34px}
.glow{position:absolute;left:50%;top:50%;width:900px;height:900px;transform:translate(-50%,-50%);
  background:radial-gradient(closest-side,rgba(31,157,118,.22),transparent 70%)}
.ticks{position:absolute;left:0;right:0;bottom:0;height:18px;
  background-image:repeating-linear-gradient(90deg,rgba(239,237,226,.16) 0 1px,transparent 1px 28px)}
svg{position:relative;width:${Math.round((300 * LOGO_WIDTH) / LOGO_HEIGHT)}px;height:300px;color:#EFEBE2}
.word{position:relative;font-family:B;font-weight:800;font-size:46px;letter-spacing:.04em}
.word i{color:#1F9D76;font-style:normal}
.strap{position:relative;font-family:M;font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:#8C8980;margin-top:-18px}
</style></head><body>
<div class="glow"></div>
${logoSvg()}
<div class="word">BEN VELAZQUEZ<i>.</i></div>
<div class="strap">${esc(STRAP[locale])}</div>
<div class="ticks"></div>
</body></html>`;
}

/**
 * The app icon / favicon: the logo, white on the brand ink, centred in a
 * square. Written to public/icons/icon.svg and rasterised from there.
 */
function iconSvg() {
  const side = LOGO_WIDTH + 100;
  const dx = (side - LOGO_WIDTH) / 2;
  const dy = (side - LOGO_HEIGHT) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${side} ${side}" role="img" aria-label="Ben Velazquez">
  <title>Ben Velazquez</title>
  <rect width="${side}" height="${side}" fill="#14161A"/>
  <path transform="translate(${dx} ${dy})" fill="#FFFFFF" fill-rule="evenodd" d="${LOGO_PATH}"/>
</svg>
`;
}

function iconHtml(size, maskable) {
  // Maskable icons get cropped to a circle; keep the logo inside the safe zone.
  const pad = maskable ? size * 0.14 : 0;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0}
body{width:${size}px;height:${size}px;background:#14161A;display:flex;align-items:center;justify-content:center}
svg{width:${size - pad * 2}px;height:${size - pad * 2}px}
</style></head><body>${iconSvg()}</body></html>`;
}

/** Trim a headline to something that reads well at OG size. */
function ogTitle(raw) {
  const text = plain(raw).replace(/\s+/g, ' ').trim();
  return text.length > 96 ? `${text.slice(0, 93).replace(/[\s,.;:—-]+$/, '')}…` : text;
}

const targets = [];

for (const locale of site.locales) {
  const content = LOCALE_CONTENT[locale];
  for (const route of routes) {
    const page = content[route.key];
    if (!page || !page.hero) continue;
    if (route.key === 'home') {
      targets.push({ file: `og-home-${locale}.jpg`, locale, logo: true });
      continue;
    }
    targets.push({
      file: `og-${route.key}-${locale}.jpg`,
      kicker: plain(page.hero.kicker),
      title: ogTitle(page.hero.h1),
      locale,
    });
  }
  for (const post of insights) {
    targets.push({
      file: `og-insight-${post.slug[locale]}.jpg`,
      kicker: post.tag[locale],
      title: ogTitle(post.title[locale]),
      locale,
      photo: post.photo,
    });
  }
}

// The fallback image, used anywhere a page-specific one is missing.
targets.unshift({ file: 'og-default.jpg', locale: 'en', logo: true });

mkdirSync(OUT_IMG, { recursive: true });
mkdirSync(OUT_ICON, { recursive: true });
writeFileSync(join(OUT_ICON, 'icon.svg'), iconSvg());
// The bare logo (white, transparent background) for press and embeds.
writeFileSync(
  join(OUT_ICON, 'logo.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}" role="img" aria-label="Ben Velazquez"><title>Ben Velazquez</title><path fill="#FFFFFF" fill-rule="evenodd" d="${LOGO_PATH}"/></svg>\n`,
);

const browser = await chromium.launch({
  executablePath: existsSync('/opt/pw-browsers/chromium') ? undefined : undefined,
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

console.log(`→ Rendering ${targets.length} Open Graph images`);
for (const target of targets) {
  await page.setContent(target.logo ? logoCardHtml(target) : cardHtml(target), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.screenshot({ type: 'jpeg', quality: 84 });
  writeFileSync(join(OUT_IMG, target.file), buf);
}

console.log('→ Rendering PNG icons');
const icons = [
  { file: 'icon-192.png', size: 192, maskable: false },
  { file: 'icon-512.png', size: 512, maskable: false },
  { file: 'icon-maskable.png', size: 512, maskable: true },
  { file: 'apple-touch-icon.png', size: 180, maskable: false },
];
for (const icon of icons) {
  await page.setViewportSize({ width: icon.size, height: icon.size });
  await page.setContent(iconHtml(icon.size, icon.maskable), { waitUntil: 'load' });
  const buf = await page.screenshot({ type: 'png' });
  writeFileSync(join(OUT_ICON, icon.file), buf);
}

// favicon.ico: browsers accept a PNG served at that path, and every engine
// that matters reads the SVG/PNG links first anyway.
await page.setViewportSize({ width: 32, height: 32 });
await page.setContent(iconHtml(32, false), { waitUntil: 'load' });
writeFileSync(join(ROOT, 'public', 'favicon.ico'), await page.screenshot({ type: 'png' }));

await browser.close();
console.log('✓ Open Graph images and icons written to public/');
