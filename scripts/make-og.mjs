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
import { insights } from '../src/data/insights.js';
import { content as contentEn } from '../src/data/content.en.js';
import { content as contentEs } from '../src/data/content.es.js';
import { plain, esc } from '../src/lib/html.js';

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
  en: 'Performance Rehabilitation · NYC',
  es: 'Rehabilitación de Alto Rendimiento · NYC',
};
const FOOT = {
  en: 'NFL · NHL · MLB · 20+ years · ELDOA & fascial work',
  es: 'NFL · NHL · MLB · 20+ años · ELDOA y trabajo fascial',
};

function cardHtml({ kicker, title, locale }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(data:font/woff2;base64,${BRICOLAGE}) format('woff2');font-weight:200 800}
@font-face{font-family:H;src:url(data:font/woff2;base64,${HANKEN}) format('woff2');font-weight:100 900}
@font-face{font-family:M;src:url(data:font/woff2;base64,${MONO}) format('woff2')}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#14161A;font-family:H,sans-serif;color:#EFEBE2;
  position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;padding:64px 72px}
.glow{position:absolute;right:-10%;top:-34%;width:62%;height:150%;
  background:radial-gradient(closest-side,rgba(31,157,118,.28),transparent 70%)}
.ticks{position:absolute;left:0;right:0;bottom:0;height:18px;
  background-image:repeating-linear-gradient(90deg,rgba(239,237,226,.16) 0 1px,transparent 1px 28px)}
.top{display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2}
.mark{font-family:B;font-weight:800;font-size:26px;letter-spacing:.02em}
.mark i{color:#1F9D76;font-style:normal}
.strap{font-family:M;font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:#8C8980}
.mid{position:relative;z-index:2;max-width:940px}
.kicker{font-family:M;font-size:16px;letter-spacing:.18em;text-transform:uppercase;color:#1F9D76;
  display:flex;align-items:center;gap:14px;margin-bottom:22px}
.kicker::before{content:"";width:40px;height:2px;background:#1F9D76}
h1{font-family:B;font-weight:800;letter-spacing:-.025em;line-height:1.03;
  font-size:${title.length > 74 ? 58 : title.length > 46 ? 70 : 82}px}
.foot{display:flex;align-items:center;justify-content:space-between;position:relative;z-index:2;
  border-top:1px solid rgba(239,237,226,.16);padding-top:26px}
.foot span{font-family:M;font-size:15px;letter-spacing:.12em;text-transform:uppercase;color:#B7B3A9}
.dot{width:10px;height:10px;border-radius:50%;background:#1F9D76;display:inline-block;margin-right:12px;
  vertical-align:middle}
</style></head><body>
<div class="glow"></div>
<div class="top"><div class="mark">BEN VELAZQUEZ<i>.</i></div><div class="strap">${esc(STRAP[locale])}</div></div>
<div class="mid"><div class="kicker">${esc(kicker)}</div><h1>${esc(title)}</h1></div>
<div class="foot"><span><i class="dot"></i>${esc(FOOT[locale])}</span><span>benvelazquez.com</span></div>
<div class="ticks"></div>
</body></html>`;
}

function iconHtml(size, maskable) {
  const svg = readFileSync(join(OUT_ICON, 'icon.svg'), 'utf8');
  const pad = maskable ? size * 0.14 : 0;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0}
body{width:${size}px;height:${size}px;background:#14161A;display:flex;align-items:center;justify-content:center}
svg{width:${size - pad * 2}px;height:${size - pad * 2}px}
${maskable ? 'body{border-radius:0}svg rect:first-of-type{rx:0}' : ''}
</style></head><body>${svg}</body></html>`;
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
    });
  }
}

// The fallback image, used anywhere a page-specific one is missing.
targets.unshift({
  file: 'og-default.jpg',
  kicker: 'NYC · Performance Rehabilitation',
  title: 'The coach the world’s best athletes fly in to see.',
  locale: 'en',
});

mkdirSync(OUT_IMG, { recursive: true });
mkdirSync(OUT_ICON, { recursive: true });

const browser = await chromium.launch({
  executablePath: existsSync('/opt/pw-browsers/chromium') ? undefined : undefined,
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });

console.log(`→ Rendering ${targets.length} Open Graph images`);
for (const target of targets) {
  await page.setContent(cardHtml(target), { waitUntil: 'load' });
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
