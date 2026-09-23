/**
 * Reusable section renderers. Pages compose these rather than writing raw
 * markup, which keeps heading order, ARIA and the AEO conventions
 * (answer block + FAQ) consistent across the whole site.
 */

import { esc, each, cx } from './html.js';
import { ui } from '../data/ui.js';
import { site, pathFor } from '../data/site.js';

/** Section heading group: kicker + h2 + optional lede. */
export function sectionHead({ kicker, heading, lede, center = false, level = 2, id }) {
  const Tag = `h${level}`;
  return `<div class="${cx('sec-head', center && 'center', 'reveal')}">
${kicker ? `<span class="mono">${esc(kicker)}</span>` : ''}
<${Tag} class="h2"${id ? ` id="${esc(id)}"` : ''}>${heading}</${Tag}>
${lede ? `<p>${lede}</p>` : ''}
</div>`;
}

/**
 * Full-bleed hero background photo (see .hero-photo in main.css). Files live
 * in public/img as `${slug}-${width}.{avif,webp,jpg}`. It is the LCP image,
 * so it loads eagerly at high priority.
 */
export function heroPhoto({ slug, widths, width, height, alt, position, narrow = false }) {
  // `narrow` gives a portrait a slimmer desktop panel, so the crop is not all face.
  const sizes = narrow ? '(min-width: 901px) 44vw, 100vw' : '(min-width: 901px) 60vw, 100vw';
  const set = (ext) => widths.map((w) => `/img/${slug}-${w}.${ext} ${w}w`).join(', ');
  const style = position ? ` style="--photo-pos:${esc(position)}"` : '';
  return `<picture class="${narrow ? 'hero-photo is-narrow' : 'hero-photo'}"${style}>
<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">
<source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
<img src="/img/${slug}-${widths[0]}.jpg" srcset="${set('jpg')}" sizes="${sizes}" width="${width}" height="${height}" alt="${esc(
    alt,
  )}" fetchpriority="high" decoding="async">
</picture>`;
}

/**
 * Muted, looping background video over a poster photo. Expects a VP9 .webm
 * next to the .mp4 (H.264) at `src`; browsers fetch only the first they can play. Purely decorative,
 * so it is hidden from assistive tech. There is no `autoplay` attribute:
 * site.js starts it only when it is on screen and the visitor has not asked
 * for reduced motion or data saving; everyone else keeps the poster.
 */
export function heroVideo({ src, poster }) {
  const style = poster.position ? ` style="--photo-pos:${esc(poster.position)}"` : '';
  return `<div class="hero-photo hero-video"${style} aria-hidden="true">
${heroPhoto({ ...poster, position: null, alt: '' }).replace('<picture class="hero-photo"', '<picture')}
<video muted loop playsinline preload="none" disablepictureinpicture data-hero-video><source src="${esc(
    src.replace(/\.mp4$/, '.webm'),
  )}" type="video/webm"><source src="${esc(src)}" type="video/mp4"></video>
</div>`;
}

/**
 * A photo or diagram set beside a block of prose (see .split-media). Never
 * upscaled: files are `${slug}-${w}.{avif,webp,jpg}` for each of `widths`
 * (default: just `width`). `display` caps the column (default: native
 * width); `zoom` links to the largest JPEG so a diagram can be read full
 * size; `caption` adds a figcaption (e.g. a credit).
 */
export function sidePhoto({ slug, width, height, alt, widths = [width], display = width, zoom = false, caption }) {
  const set = (ext) => widths.map((w) => `/img/${slug}-${w}.${ext} ${w}w`).join(', ');
  const sizes = `(min-width: 861px) ${display}px, 100vw`;
  const img = `<picture>
<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">
<source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
<img src="/img/${slug}-${widths[0]}.jpg" srcset="${set('jpg')}" sizes="${sizes}" width="${width}" height="${height}" alt="${esc(
    alt,
  )}" loading="lazy" decoding="async">
</picture>`;
  const max = widths[widths.length - 1];
  return `<figure class="side-photo reveal">
${zoom ? `<a class="side-zoom" href="/img/${slug}-${max}.jpg">${img}</a>` : img}
${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}
</figure>`;
}

/** Prose, with an optional side photo (`photo` as for sidePhoto). */
export function proseWithPhoto(body, photo) {
  if (!photo) return `<div class="prose reveal">${body}</div>`;
  return `<div class="split-media" style="--media-w:${photo.display || photo.width}px">
<div class="prose reveal">${body}</div>
${sidePhoto(photo)}
</div>`;
}

/** Interior page hero, optionally over a background photo or video. */
export function pageHero({ kicker, heading, lede, ctas = [], photo, video, locale = 'en' }) {
  const media = video ? heroVideo(video) : photo ? heroPhoto(photo) : '';
  return `<section class="${media ? 'page-hero has-photo' : 'page-hero'}">
${media}
<div class="wrap">
<span class="mono eyebrow">${esc(kicker)}</span>
<h1 class="h1">${heading}</h1>
${lede ? `<p class="lede">${lede}</p>` : ''}
${ctas.length ? `<div class="hero-cta">${each(ctas, (c) => ctaLink(c, locale))}</div>` : ''}
</div>
</section>`;
}

function ctaLink(cta, locale) {
  const href = cta.route ? pathFor(cta.route, locale) : cta.href;
  const external = href && /^https?:/.test(href);
  return `<a href="${esc(href)}" class="btn ${cta.ghost ? 'btn-ghost' : 'btn-primary'}"${
    external ? ' target="_blank" rel="noopener"' : ''
  }>${esc(cta.label)}</a>`;
}

/**
 * The answer block — the core AEO device.
 *
 * A self-contained, quotable answer to the page's primary question, placed
 * above the fold and marked `speakable` in schema. Written so an answer
 * engine can lift it verbatim and still be accurate and attributed.
 */
export function answerBlock({ paragraphs, locale = 'en', label }) {
  const t = ui[locale];
  return `<div class="answer-block reveal">
<span class="mono">${esc(label || t.answerLabel)}</span>
${each(paragraphs, (p) => `<p>${p}</p>`)}
</div>`;
}

/**
 * Compact, scannable fact table. Rendered as a definition list wrapped in
 * divs so the dt/dd pairing stays valid while CSS grid handles the layout.
 * Skim-friendly for readers, trivially parseable for answer engines.
 */
export function factList(facts, locale = 'en') {
  return `<dl class="key-facts reveal" aria-label="${esc(ui[locale].keyFacts)}">
${each(facts, (f) => `<div><dt>${esc(f.k)}</dt><dd>${f.v}</dd></div>`)}
</dl>`;
}

/**
 * FAQ section — visible accordion. Always paired with FAQPage JSON-LD by
 * the page builder, so the human-visible content and the structured data
 * can never drift apart.
 */
export function faqSection({ faqs, locale = 'en', heading, kicker, onBone = false, id = 'faq' }) {
  const t = ui[locale];
  return `<section class="block ${onBone ? 'on-bone' : ''}" id="${esc(id)}" aria-labelledby="${esc(id)}-h">
<div class="wrap">
${sectionHead({ kicker: kicker || t.faqKicker, heading: esc(heading || t.faqHeading), id: `${id}-h` })}
<div class="faq-list reveal">
${each(
  faqs,
  (faq) => `<details class="faq-item">
<summary><span>${faq.q}</span><span class="sign" aria-hidden="true"></span></summary>
<div class="faq-answer">${faq.a}</div>
</details>`,
)}
</div>
</div>
</section>`;
}

/** Testimonial grid. `featured` quotes span the full width. */
export function quoteGrid(quotes, locale = 'en', { photos = false } = {}) {
  return `<div class="quotes reveal">
${each(quotes, (q) => {
  const photo = photos && q.photo;
  const body = `<blockquote><p>${q.text[locale]}</p></blockquote>
<figcaption>${esc(q.name)}<span>${q.role[locale]}</span></figcaption>`;
  return `<figure class="${cx('quote', q.featured && 'featured', photo && 'has-photo')}">
${photo ? `${quotePhoto(photo, locale)}<div class="quote-body">${body}</div>` : body}
</figure>`;
})}
</div>`;
}

/** Portrait (4:5) testimonial photo, served as AVIF/WebP/JPEG from public/img. */
function quotePhoto({ slug, widths, alt }, locale) {
  const set = (ext) => widths.map((w) => `/img/results-${slug}-${w}.${ext} ${w}w`).join(', ');
  const sizes = '(min-width: 701px) 360px, 100vw';
  const max = widths[widths.length - 1];
  return `<picture class="quote-photo">
<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">
<source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
<img src="/img/results-${slug}-${widths[0]}.jpg" srcset="${set('jpg')}" sizes="${sizes}" width="${max}" height="${Math.round(
    (max * 5) / 4,
  )}" alt="${esc(alt[locale])}" loading="lazy" decoding="async">
</picture>`;
}

/** Click-to-load video grid — no third-party JS until the visitor asks. */
export function videoGrid(videos, locale = 'en') {
  const t = ui[locale];
  return `<div class="videos reveal">
${each(
  videos,
  (v) => `<div class="video">
<button type="button" class="video-facade" data-video="${esc(v.id)}" data-title="${esc(
    `${v.tag} — ${v.name[locale]}`,
  )}" aria-label="${esc(`${t.playVideo}: ${v.name[locale]}`)}">
<img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy" decoding="async">
<span class="play"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></span>
</button>
<div class="cap"><span class="mono">${esc(v.tag)}</span><span class="t">${esc(v.name[locale])}</span></div>
</div>`,
)}
</div>`;
}

/** Card grid — used for audiences, services, method steps. */
export function cardGrid(cards, locale = 'en') {
  return `<div class="card-grid reveal">
${each(
  cards,
  (card) => `<article class="${cx('card', card.feature && 'feature')}"${
    card.tag ? ` data-tag="${esc(card.tag)}"` : ''
  }>
${card.idx ? `<span class="idx">${esc(card.idx)}</span>` : ''}
<h3 class="h3">${card.heading}</h3>
<p>${card.body}</p>
${
  card.route || card.href
    ? `<a class="arrow-link" href="${esc(card.route ? pathFor(card.route, locale) : card.href)}">${esc(
        card.link,
      )}</a>`
    : ''
}
</article>`,
)}
</div>`;
}

/**
 * Pricing ladder. `level` keeps the heading outline valid — h2 on the
 * programs page where the tiers follow the h1 directly, h3 on the home page
 * where they sit under a section heading.
 */
export function tierGrid(tiers, locale = 'en', level = 3) {
  return `<div class="ladder reveal">
${each(
  tiers,
  (tier) => `<article class="${cx('tier', tier.featured && 'spot')}">
${tier.badge ? `<span class="badge-best">${esc(tier.badge)}</span>` : ''}
<span class="step">${esc(tier.step)}</span>
<h${level} class="h3">${esc(tier.name)}</h${level}>
<p class="price">${tier.price}</p>
<p class="desc">${tier.desc}</p>
${tier.features ? `<ul>${each(tier.features, (f) => `<li>${f}</li>`)}</ul>` : ''}
<a class="cta ${tier.ghost ? 'line' : 'fill'}" href="${esc(
    tier.route ? pathFor(tier.route, locale) : tier.href,
  )}">${esc(tier.cta)}</a>
${tier.fine ? `<p class="fine">${tier.fine}</p>` : ''}
</article>`,
)}
</div>`;
}

/** Closing conversion band, appended to nearly every page. */
export function ctaBand({ kicker, heading, body, ctas, locale = 'en' }) {
  return `<section class="block cta-band">
<div class="wrap reveal">
<span class="mono eyebrow" style="justify-content:center">${esc(kicker)}</span>
<h2 class="h2">${heading}</h2>
<p>${body}</p>
<div class="hero-cta">${each(ctas, (c) => ctaLink(c, locale))}</div>
</div>
</section>`;
}

/**
 * Internal link cluster. Deliberate internal linking is one of the highest
 * leverage on-page SEO signals; every page ends with a relevant set.
 */
export function relatedLinks({ links, locale = 'en', heading, onBone = false }) {
  const t = ui[locale];
  return `<section class="block-tight ${onBone ? 'on-bone' : ''}">
<div class="wrap reveal">
<h2 class="mono" style="margin-bottom:18px;color:var(--stone)">${esc(heading || t.relatedHeading)}</h2>
<ul class="related">
${each(
  links,
  (l) => `<li><a href="${esc(l.route ? pathFor(l.route, locale) : l.href)}">
<span class="rl">${esc(l.label)}</span><span class="rt">${esc(l.title)}</span>
</a></li>`,
)}
</ul>
</div>
</section>`;
}

/** Proof strip of recognisable names. */
export function proofStrip(label, names) {
  return `<div class="proof">
<div class="wrap proof-inner">
<span class="mono">${esc(label)}</span>
<ul>${each(names, (n) => `<li>${esc(n.name)}<small>${esc(n.league)}</small></li>`)}</ul>
</div>
</div>`;
}

/** Credentials block — the E-E-A-T anchor, reused on home and about. */
export function credentialsBlock({ locale, copy }) {
  return `<div class="cr-grid reveal">
<div class="cr-book">
<span class="mono">${esc(copy.bookTag)}</span>
<p class="cr-book-title">“Fascia: Clinical Applications for Health and Human Performance”</p>
<p>${copy.bookBody}</p>
<a href="${esc(site.links.book)}" class="btn btn-primary" style="align-self:flex-start" target="_blank" rel="noopener">${esc(
    copy.bookCta,
  )}</a>
</div>
<div class="cr-creds">
<span class="mono">${esc(copy.credsTag)}</span>
<ul>${each(copy.creds, (c) => `<li>${esc(c)}</li>`)}</ul>
</div>
</div>
<div class="cr-recog reveal">
<span class="mono">${esc(copy.recogTag)}</span>
<div class="cr-recog-items">
<a href="${esc(site.links.stack)}" class="cr-recog-item" target="_blank" rel="noopener">STACK</a>
<a href="${esc(site.links.beingMariano)}" class="cr-recog-item" target="_blank" rel="noopener">${esc(
    copy.recogDoc,
  )}</a>
<a href="${esc(site.links.concussionFoundation)}" class="cr-recog-item" target="_blank" rel="noopener">Concussion Legacy Foundation</a>
</div>
</div>`;
}

/** Long-form prose wrapper. */
export function prose(html, { onBone = false, kicker, heading } = {}) {
  return `<section class="block ${onBone ? 'on-bone' : ''}">
<div class="wrap">
${heading ? sectionHead({ kicker, heading }) : ''}
<div class="prose reveal">${html}</div>
</div>
</section>`;
}
