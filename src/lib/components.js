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

/** Interior page hero. */
export function pageHero({ kicker, heading, lede, ctas = [], locale = 'en' }) {
  return `<section class="page-hero">
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
export function quoteGrid(quotes, locale = 'en') {
  return `<div class="quotes reveal">
${each(
  quotes,
  (q) => `<figure class="${cx('quote', q.featured && 'featured')}">
<blockquote><p>${q.text[locale]}</p></blockquote>
<figcaption>${esc(q.name)}<span>${q.role[locale]}</span></figcaption>
</figure>`,
)}
</div>`;
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
