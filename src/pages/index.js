/**
 * Page builders. One function per page type; each returns the body HTML plus
 * the JSON-LD entities specific to that page. The generic entities (Person,
 * business, WebSite, WebPage, BreadcrumbList, FAQPage) are attached centrally
 * in build.mjs so no page can accidentally ship without them.
 */

import { site, pathFor, urlFor } from '../data/site.js';
import { quotes, proofNames } from '../data/quotes.js';
import { insights } from '../data/insights.js';
import { ui } from '../data/ui.js';
import { esc, each, formatDate, plain } from '../lib/html.js';
import {
  sectionHead,
  pageHero,
  answerBlock,
  factList,
  faqSection,
  quoteGrid,
  videoGrid,
  cardGrid,
  tierGrid,
  ctaBand,
  relatedLinks,
  proofStrip,
  credentialsBlock,
} from '../lib/components.js';
import {
  serviceEntity,
  articleEntity,
  videoEntity,
  bookEntity,
  reviewEntity,
} from '../lib/schema.js';

/* ------------------------------------------------------------------ */
/* Shared fragments                                                     */
/* ------------------------------------------------------------------ */

/** Wrap the answer block + optional fact list in a section. */
function answerSection(page, locale, { onBone = false } = {}) {
  if (!page.answer) return '';
  return `<section class="block-tight ${onBone ? 'on-bone' : ''}">
<div class="wrap">
${answerBlock({ paragraphs: page.answer, locale })}
${page.facts ? factList(page.facts, locale) : ''}
</div>
</section>`;
}

/** Standard tail: FAQ accordion, related links, CTA band. */
function pageTail(page, locale, { faqOnBone = false } = {}) {
  const t = ui[locale];
  return `${page.faqs ? faqSection({ faqs: page.faqs, locale, onBone: faqOnBone }) : ''}
${page.related ? relatedLinks({ links: page.related, locale, heading: t.relatedHeading, onBone: !faqOnBone }) : ''}
${page.cta ? ctaBand({ ...page.cta, locale }) : ''}`;
}

function crumb(locale, keys, currentName) {
  const t = ui[locale];
  const trail = [{ name: t.nav.home, url: urlFor('home', locale) }];
  keys.forEach((k) => trail.push({ name: t.nav[k], url: urlFor(k, locale) }));
  if (currentName) trail[trail.length - 1].name = currentName;
  return trail;
}

/* ------------------------------------------------------------------ */
/* Home                                                                 */
/* ------------------------------------------------------------------ */

export function buildHome({ locale, content, credentialsCopy }) {
  const c = content.home;
  const t = ui[locale];
  const url = urlFor('home', locale);

  const html = `<section class="hero">
<div class="wrap hero-grid">
<div class="reveal">
<span class="mono eyebrow">${esc(c.hero.kicker)}</span>
<h1 class="display">${c.hero.h1}</h1>
<p class="lede">${esc(c.hero.lede)}</p>
<div class="hero-cta">
<a href="${esc(pathFor('apply', locale))}" class="btn btn-primary">${esc(c.hero.ctas[0].label)}</a>
<a href="${esc(pathFor('programs', locale))}" class="btn btn-ghost">${esc(c.hero.ctas[1].label)}</a>
</div>
</div>
<div class="hero-side reveal">
${each(
  c.stats,
  (s) => `<div class="stat"><div class="num">${esc(s.num)}</div><div class="lbl">${esc(s.lbl)}</div></div>`,
)}
</div>
</div>
</section>
<div class="ticks"></div>
${proofStrip(c.proofLabel, proofNames)}

<section class="block-tight">
<div class="wrap">
${answerBlock({ paragraphs: c.answer, locale })}
</div>
</section>

<section class="block on-bone" id="philosophy">
<div class="wrap">
<div class="sec-head reveal" style="margin-bottom:0">
<span class="mono">${esc(c.philosophy.kicker)}</span>
<h2 class="h2">${esc(c.philosophy.heading)}</h2>
<div class="manifesto-rule"></div>
</div>
<div class="manifesto reveal">${c.philosophy.body}</div>
</div>
</section>

<section class="block" id="results">
<div class="wrap">
${sectionHead({ kicker: c.results.kicker, heading: esc(c.results.heading) })}
${quoteGrid(quotes, locale)}
<p class="reveal" style="margin-top:26px">
<a class="arrow-link" href="${esc(pathFor('results', locale))}">${esc(t.nav.results)} →</a>
</p>
</div>
</section>

<section class="block" id="in-action" style="padding-top:0">
<div class="wrap">
${sectionHead({ kicker: c.inAction.kicker, heading: esc(c.inAction.heading), lede: esc(c.inAction.lede) })}
${videoGrid(site.videos, locale)}
</div>
</section>

<section class="block on-bone" id="who">
<div class="wrap">
${sectionHead({ kicker: c.who.kicker, heading: esc(c.who.heading), lede: esc(c.who.lede) })}
${cardGrid(c.who.cards, locale)}
</div>
</section>

<section class="block" id="programs">
<div class="wrap">
${sectionHead({ kicker: c.programs.kicker, heading: esc(c.programs.heading), lede: esc(c.programs.lede) })}
${tierGrid(content.programs.tiers, locale)}
<p class="reveal" style="text-align:center;margin-top:26px">
<span class="signal">${esc(c.programs.note)}</span>
</p>
</div>
</section>

<section class="block on-bone" id="method">
<div class="wrap method-grid">
<div class="reveal">
<div class="sec-head" style="margin-bottom:30px">
<span class="mono">${esc(c.method.kicker)}</span>
<h2 class="h2">${esc(c.method.heading)}</h2>
</div>
<ul class="method-list">
${each(
  c.method.steps,
  (s) => `<li><span class="n">${esc(s.n)}</span><div><h3 class="h3">${s.h}</h3><p>${esc(s.p)}</p></div></li>`,
)}
</ul>
<p style="margin-top:26px"><a class="arrow-link" href="${esc(pathFor('method', locale))}">${esc(
    t.nav.method,
  )} →</a></p>
</div>
<div class="method-visual reveal">
<div class="scan"></div><div class="ring"></div>
<div class="vlabel">
<span class="mono">${esc(c.method.vlabel)}</span>
<strong>${esc(c.method.vbig)}</strong>
</div>
</div>
</div>
</section>

<section class="block" id="credentials">
<div class="wrap">
${sectionHead({
    kicker: c.credentials.kicker,
    heading: esc(c.credentials.heading),
    lede: esc(c.credentials.lede),
  })}
${credentialsBlock({ locale, copy: credentialsCopy })}
</div>
</section>

<section class="block" id="analysis" style="padding-top:0">
<div class="wrap">
<div class="lead reveal">
<div>
<span class="mono eyebrow">${esc(c.analysis.kicker)}</span>
<h2 class="h2" style="margin:14px 0">${esc(c.analysis.heading)}</h2>
<p style="font-size:1.05rem">${esc(c.analysis.lede)}</p>
</div>
<div class="an-panel">
${each(
  c.analysis.rows,
  (r) => `<div class="an-row"><span class="an-n">${esc(r.n)}</span><div><b>${esc(r.b)}</b><span class="an-txt">${esc(
    r.t,
  )}</span></div></div>`,
)}
<div class="an-scarcity"><span class="mono">${esc(c.analysis.spots)}</span></div>
<a href="${esc(pathFor('apply', locale))}" class="btn btn-primary btn-block">${esc(c.analysis.cta)}</a>
</div>
</div>
</div>
</section>

<section class="block on-bone" id="insights">
<div class="wrap">
${sectionHead({ kicker: c.insights.kicker, heading: esc(c.insights.heading), lede: esc(c.insights.lede) })}
${insightCards(insights.slice(0, 4), locale)}
<p class="reveal" style="margin-top:26px">
<a class="arrow-link" href="${esc(pathFor('insights', locale))}">${esc(c.insights.all)}</a>
</p>
</div>
</section>

${pageTail(c, locale)}`;

  return {
    html,
    breadcrumb: [],
    schema: [
      bookEntity(),
      ...site.videos.map((v) => videoEntity(v, locale)),
      ...quotes.map((q) => reviewEntity(q, locale)),
      serviceEntity({
        url,
        name:
          locale === 'en'
            ? 'Performance rehabilitation and executive performance coaching'
            : 'Rehabilitación de alto rendimiento y coaching de rendimiento ejecutivo',
        description: plain(c.answer[1]),
        serviceType: locale === 'en' ? 'Performance rehabilitation' : 'Rehabilitación de alto rendimiento',
        locale,
        offers: offersFor(content, locale),
      }),
    ],
  };
}

/** Offers shared by the home and programs pages. */
function offersFor(content, locale) {
  return [
    {
      name: content.programs.tiers[0].name,
      description: plain(content.programs.tiers[0].desc),
      price: site.pricing.resetDisplay,
      url: urlFor('programs', locale),
    },
    {
      name: content.programs.tiers[1].name,
      description: plain(content.programs.tiers[1].desc),
      price: site.pricing.core,
      recurring: true,
      url: urlFor('programs', locale),
    },
    {
      name: content.programs.tiers[2].name,
      description: plain(content.programs.tiers[2].desc),
      price: site.pricing.concierge,
      recurring: true,
      url: urlFor('programs', locale),
    },
  ];
}

/* ------------------------------------------------------------------ */
/* Insight cards (shared by home + insights index)                      */
/* ------------------------------------------------------------------ */

/**
 * `level` keeps the heading outline valid: h2 where the cards are the first
 * headings under the page h1, h3 where they sit beneath a section heading.
 */
function insightCards(items, locale, level = 3) {
  const t = ui[locale];
  return `<div class="insight-list reveal">
${each(items, (post) => {
    const href = `${pathFor('insights', locale)}${post.slug[locale]}/`;
    return `<article class="insight">
<div class="insight-meta">
<time class="mono" datetime="${esc(post.date)}">${esc(formatDate(post.date, locale))}</time>
<span class="insight-tag">${esc(post.tag[locale])}</span>
</div>
<h${level}><a href="${esc(href)}">${esc(post.title[locale])}</a></h${level}>
<p>${esc(post.summary[locale])}</p>
<a class="more" href="${esc(href)}">${esc(t.readMore)} →</a>
</article>`;
  })}
</div>`;
}

/* ------------------------------------------------------------------ */
/* Generic marketing page (executive, athletes, concussion, eldoa…)      */
/* ------------------------------------------------------------------ */

export function buildStandardPage({ locale, key, page, content, extraSections = '' }) {
  const url = urlFor(key, locale);

  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
${
  page.problem
    ? `<section class="block on-bone">
<div class="wrap">
${sectionHead({ kicker: page.problem.kicker, heading: esc(page.problem.heading) })}
<div class="prose reveal">${page.problem.body}</div>
</div>
</section>`
    : ''
}
${
  page.medical
    ? `<section class="block-tight on-bone">
<div class="wrap">
<div class="answer-block reveal" role="note">
<span class="mono">${esc(page.medical.heading)}</span>
${page.medical.body}
</div>
</div>
</section>`
    : ''
}
${
  page.approach
    ? `<section class="block">
<div class="wrap">
${sectionHead({ kicker: page.approach.kicker, heading: esc(page.approach.heading) })}
<div class="prose reveal">${page.approach.body}</div>
</div>
</section>`
    : ''
}
${
  page.explainer
    ? `<section class="block">
<div class="wrap">
${sectionHead({ kicker: page.explainer.kicker, heading: esc(page.explainer.heading) })}
<div class="prose reveal">${page.explainer.body}</div>
</div>
</section>`
    : ''
}
${
  page.outcomes
    ? `<section class="block on-bone">
<div class="wrap">
${sectionHead({ kicker: page.outcomes.kicker, heading: esc(page.outcomes.heading) })}
${cardGrid(page.outcomes.cards, locale)}
</div>
</section>`
    : ''
}
${
  page.who
    ? `<section class="block on-bone">
<div class="wrap">
${sectionHead({ kicker: page.who.kicker, heading: esc(page.who.heading) })}
${cardGrid(page.who.cards, locale)}
</div>
</section>`
    : ''
}
${
  page.how
    ? `<section class="block">
<div class="wrap">
${sectionHead({ kicker: page.how.kicker, heading: esc(page.how.heading) })}
<ul class="method-list reveal" style="max-width:70ch">
${each(
  page.how.steps,
  (s) => `<li><span class="n" style="color:var(--signal)">${esc(s.n)}</span><div><h3 class="h3">${esc(
    s.h,
  )}</h3><p style="color:var(--stone-light)">${esc(s.p)}</p></div></li>`,
)}
</ul>
</div>
</section>`
    : ''
}
${extraSections}
${pageTail(page, locale)}`;

  return {
    html,
    breadcrumb: crumb(locale, [key]),
    schema: [
      serviceEntity({
        url,
        name: plain(page.hero.h1),
        description: plain(page.answer ? page.answer[0] : page.hero.lede),
        serviceType: plain(page.hero.kicker),
        locale,
        offers: [],
      }),
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Method                                                               */
/* ------------------------------------------------------------------ */

export function buildMethod({ locale, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
<section class="block on-bone">
<div class="wrap method-grid">
<div class="reveal">
<div class="sec-head" style="margin-bottom:30px">
<span class="mono">${esc(page.steps.kicker)}</span>
<h2 class="h2">${esc(page.steps.heading)}</h2>
</div>
<ul class="method-list">
${each(
  page.steps.list,
  (s) => `<li><span class="n">${esc(s.n)}</span><div><h3 class="h3">${s.h}</h3><p>${esc(s.p)}</p></div></li>`,
)}
</ul>
</div>
<div class="method-visual reveal">
<div class="scan"></div><div class="ring"></div>
<div class="vlabel">
<span class="mono">${locale === 'es' ? 'Rendimiento · medido' : 'Performance · measured'}</span>
<strong>${locale === 'es' ? 'Precisión sobre intensidad.' : 'Precision over intensity.'}</strong>
</div>
</div>
</div>
</section>
<section class="block">
<div class="wrap">
${sectionHead({ kicker: page.principles.kicker, heading: esc(page.principles.heading) })}
${cardGrid(page.principles.cards, locale)}
</div>
</section>
${pageTail(page, locale, { faqOnBone: true })}`;

  return { html, breadcrumb: crumb(locale, ['method']), schema: [] };
}

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */

export function buildAbout({ locale, page, credentialsCopy }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
${proofStrip(locale === 'es' ? 'La confianza de la élite' : 'Trusted by elite performers', proofNames)}
<section class="block on-bone">
<div class="wrap">
${sectionHead({ kicker: page.bio.kicker, heading: esc(page.bio.heading) })}
<div class="prose reveal">${page.bio.body}</div>
</div>
</section>
<section class="block">
<div class="wrap">
${sectionHead({
    kicker: page.credentials.kicker,
    heading: esc(page.credentials.heading),
    lede: esc(page.credentials.lede),
  })}
${credentialsBlock({ locale, copy: credentialsCopy })}
</div>
</section>
${pageTail(page, locale)}`;

  return {
    html,
    breadcrumb: crumb(locale, ['about']),
    schema: [bookEntity()],
  };
}

/* ------------------------------------------------------------------ */
/* Programs                                                             */
/* ------------------------------------------------------------------ */

export function buildPrograms({ locale, page, content }) {
  const url = urlFor('programs', locale);

  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
<section class="block" style="padding-top:0">
<div class="wrap">
${tierGrid(page.tiers, locale, 2)}
<p class="reveal" style="text-align:center;margin-top:26px"><span class="signal">${esc(page.note)}</span></p>
</div>
</section>
<section class="block on-bone">
<div class="wrap">
${sectionHead({ kicker: page.prereq.kicker, heading: esc(page.prereq.heading) })}
<div class="prose reveal">${page.prereq.body}</div>
</div>
</section>
${pageTail(page, locale)}`;

  return {
    html,
    breadcrumb: crumb(locale, ['programs']),
    schema: [
      serviceEntity({
        url,
        name: locale === 'en' ? 'Executive Team membership' : 'Membresía del Executive Team',
        description: plain(page.answer[0]),
        serviceType: locale === 'en' ? 'Performance coaching' : 'Coaching de rendimiento',
        locale,
        offers: offersFor(content, locale),
      }),
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Results                                                              */
/* ------------------------------------------------------------------ */

export function buildResults({ locale, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${proofStrip(locale === 'es' ? 'La confianza de la élite' : 'Trusted by elite performers', proofNames)}
${answerSection(page, locale)}
<section class="block" style="padding-top:0">
<div class="wrap">
${quoteGrid(quotes, locale)}
</div>
</section>
<section class="block on-bone">
<div class="wrap">
${sectionHead({ kicker: page.inAction.kicker, heading: esc(page.inAction.heading), lede: esc(page.inAction.lede) })}
${videoGrid(site.videos, locale)}
</div>
</section>
${pageTail(page, locale)}`;

  return {
    html,
    breadcrumb: crumb(locale, ['results']),
    schema: [...quotes.map((q) => reviewEntity(q, locale)), ...site.videos.map((v) => videoEntity(v, locale))],
  };
}

/* ------------------------------------------------------------------ */
/* Insights index                                                       */
/* ------------------------------------------------------------------ */

export function buildInsightsIndex({ locale, page }) {
  const url = urlFor('insights', locale);

  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
<section class="block on-bone" style="padding-top:clamp(44px,6vw,76px)">
<div class="wrap">
${insightCards(insights, locale, 2)}
</div>
</section>
${pageTail(page, locale)}`;

  return {
    html,
    breadcrumb: crumb(locale, ['insights']),
    schema: [
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        name: locale === 'es' ? 'Insights semanales' : 'Weekly Insights',
        description: plain(page.hero.lede),
        url,
        inLanguage: locale === 'es' ? 'es' : 'en-US',
        author: { '@id': `${site.origin}/#person` },
        publisher: { '@id': `${site.origin}/#business` },
        blogPost: insights.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${url}${post.slug[locale]}/#article`,
          headline: post.title[locale],
          url: `${url}${post.slug[locale]}/`,
          datePublished: post.date,
          author: { '@id': `${site.origin}/#person` },
        })),
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Insight article                                                      */
/* ------------------------------------------------------------------ */

export function buildInsightPost({ locale, post, page }) {
  const t = ui[locale];
  const url = `${urlFor('insights', locale)}${post.slug[locale]}/`;

  const others = insights.filter((p) => p.slug[locale] !== post.slug[locale]).slice(0, 3);

  const html = `<article>
<section class="page-hero">
<div class="wrap">
<span class="mono eyebrow">${esc(post.tag[locale])}</span>
<h1 class="h1">${esc(post.title[locale])}</h1>
<div class="article-meta">
<time datetime="${esc(post.date)}">${esc(t.published)} ${esc(formatDate(post.date, locale))}</time>
<span>·</span>
<span>${esc(site.name)}</span>
</div>
<p class="lede">${esc(post.summary[locale])}</p>
</div>
</section>
<div class="ticks"></div>
<section class="block-tight">
<div class="wrap">
${answerBlock({ paragraphs: post.answer[locale], locale })}
</div>
</section>
<section class="block on-bone" style="padding-top:clamp(44px,6vw,76px)">
<div class="wrap">
<div class="prose reveal">${post.body[locale]}</div>
</div>
</section>
</article>
${faqSection({ faqs: post.faqs[locale], locale })}
<section class="block-tight on-bone">
<div class="wrap reveal">
<h2 class="mono" style="margin-bottom:18px;color:var(--slate-soft)">${esc(t.relatedHeading)}</h2>
${insightCards(others, locale)}
<p style="margin-top:26px"><a class="arrow-link" href="${esc(pathFor('insights', locale))}">${esc(
    t.backToInsights,
  )}</a></p>
</div>
</section>
${ctaBand({ ...page.cta, locale })}`;

  const trail = crumb(locale, ['insights']);
  trail.push({ name: post.title[locale], url });

  return {
    html,
    breadcrumb: trail,
    schema: [
      articleEntity({
        url,
        headline: post.title[locale],
        description: post.summary[locale],
        datePublished: post.date,
        dateModified: post.updated,
        locale,
        section: post.tag[locale],
        body: plain(post.body[locale]),
      }),
    ],
  };
}

/* ------------------------------------------------------------------ */
/* FAQ page (grouped)                                                   */
/* ------------------------------------------------------------------ */

export function buildFaq({ locale, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
${each(
  page.groups,
  (group, i) => `<section class="block ${i % 2 === 0 ? 'on-bone' : ''}" ${
    i === 0 ? 'style="padding-top:clamp(44px,6vw,76px)"' : ''
  }>
<div class="wrap">
${sectionHead({ kicker: `0${i + 1}`, heading: esc(group.heading) })}
<div class="faq-list reveal">
${each(
    group.faqs,
    (faq) => `<details class="faq-item">
<summary><span>${faq.q}</span><span class="sign" aria-hidden="true"></span></summary>
<div class="faq-answer">${faq.a}</div>
</details>`,
  )}
</div>
</div>
</section>`,
)}
${page.related ? relatedLinks({ links: page.related, locale }) : ''}
${page.cta ? ctaBand({ ...page.cta, locale }) : ''}`;

  return { html, breadcrumb: crumb(locale, ['faq']), schema: [] };
}

/* ------------------------------------------------------------------ */
/* Apply (form)                                                         */
/* ------------------------------------------------------------------ */

export function buildApply({ locale, page }) {
  const f = page.form;

  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
<section class="block on-bone" style="padding-top:clamp(44px,6vw,76px)">
<div class="wrap apply-grid">
<div class="reveal">
<ul class="apply-list">
${each(page.list, (l) => `<li><span class="check">→</span><span><b>${esc(l.b)}</b> ${esc(l.t)}</span></li>`)}
</ul>
<div class="an-panel" style="margin-top:30px">
${each(
    page.steps,
    (r) => `<div class="an-row"><span class="an-n">${esc(r.n)}</span><div><b>${esc(r.b)}</b><span class="an-txt">${esc(
      r.t,
    )}</span></div></div>`,
  )}
<div class="an-scarcity" style="margin-bottom:0"><span class="mono">${
    locale === 'es'
      ? `Lugares disponibles este mes: ${site.roster.openSpots}`
      : `Roster spots open this month: ${site.roster.openSpots}`
  }</span></div>
</div>
</div>
<div class="reveal">
<h2 class="h3" style="margin-bottom:20px">${esc(f.heading)}</h2>
<form class="apply-form" id="applyForm" method="post" action="${esc(site.formEndpoint)}" novalidate>
<input type="hidden" name="_subject" value="${esc(f.subject)}">
<input type="hidden" name="language" value="${esc(locale)}">
<div class="field">
<label for="f-name">${esc(f.name)}</label>
<input type="text" id="f-name" name="name" required autocomplete="name" placeholder="${esc(f.namePh)}">
</div>
<div class="field">
<label for="f-email">${esc(f.email)}</label>
<input type="email" id="f-email" name="email" required autocomplete="email" placeholder="${esc(f.emailPh)}">
</div>
<div class="field">
<label for="f-goal">${esc(f.goal)}</label>
<select id="f-goal" name="goal">
${each(f.options, (o) => `<option value="${esc(o)}">${esc(o)}</option>`)}
</select>
</div>
<div class="field">
<label for="f-msg">${esc(f.message)}</label>
<textarea id="f-msg" name="message" rows="4" placeholder="${esc(f.messagePh)}"></textarea>
</div>
<div class="hp" aria-hidden="true">
<label for="f-gotcha">Company</label>
<input type="text" id="f-gotcha" name="_gotcha" tabindex="-1" autocomplete="off">
</div>
<button type="submit" class="btn btn-primary" data-sending="${esc(f.sending)}">${esc(f.submit)}</button>
<p class="form-msg ok" id="formOk" role="status">${esc(f.ok)}</p>
<p class="form-msg err" id="formErr" role="alert">${esc(f.err)}</p>
<p class="form-note">${esc(f.note)}</p>
</form>
</div>
</div>
</section>
${page.faqs ? faqSection({ faqs: page.faqs, locale }) : ''}
${page.related ? relatedLinks({ links: page.related, locale, onBone: true }) : ''}`;

  return { html, breadcrumb: crumb(locale, ['apply']), schema: [] };
}

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

export function buildContact({ locale, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
${pageTail(page, locale)}`;

  return {
    html,
    breadcrumb: crumb(locale, ['contact']),
    schema: [
      {
        '@type': 'ContactPage',
        '@id': `${urlFor('contact', locale)}#contactpage`,
        url: urlFor('contact', locale),
        mainEntity: { '@id': `${site.origin}/#business` },
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Podcast                                                              */
/* ------------------------------------------------------------------ */

export function buildPodcast({ locale, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
<section class="block" style="padding-top:0">
<div class="wrap">
<div class="pod reveal">
<div class="pod-l">
<div class="disc" aria-hidden="true"></div>
<div>
<h2 class="h3">${esc(page.hero.h1)}</h2>
<p>${esc(page.hero.lede)}</p>
</div>
</div>
<a href="${esc(site.links.podcast)}" class="btn btn-ghost">${esc(page.hero.ctas[0].label)}</a>
</div>
<p class="reveal" style="text-align:center;margin-top:26px"><span class="signal">${esc(page.note)}</span></p>
</div>
</section>
${pageTail(page, locale)}`;

  return {
    html,
    breadcrumb: crumb(locale, ['podcast']),
    schema: [
      {
        '@type': 'PodcastSeries',
        '@id': `${urlFor('podcast', locale)}#podcast`,
        name: 'The Ben Velazquez Podcast',
        description: plain(page.answer[0]),
        url: urlFor('podcast', locale),
        author: { '@id': `${site.origin}/#person` },
        inLanguage: locale === 'es' ? 'es' : 'en-US',
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/* What I use (partners)                                                */
/* ------------------------------------------------------------------ */

export function buildWhatIUse({ locale, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${answerSection(page, locale)}
<section class="block" style="padding-top:0">
<div class="wrap">
<div class="partners reveal">
${each(
  page.partners,
  (p) => `<article class="partner">
<div class="partner-top">
<div class="partner-head-l">
<div class="partner-logo ${esc(p.logo)}" aria-hidden="true">${esc(p.mark)}</div>
<h2 class="partner-name">${esc(p.name)}</h2>
</div>
<span class="partner-tag ${p.soldOut ? 'soldout' : ''}">${esc(p.tag)}</span>
</div>
<p class="partner-cat">${esc(p.cat)}</p>
<figure class="partner-quote">
<blockquote><p>${esc(p.quote)}</p></blockquote>
<figcaption>— ${esc(site.name)}</figcaption>
</figure>
<a href="${esc(p.href)}" class="partner-cta ${p.ghost ? 'line' : 'fill'}" target="_blank" rel="noopener sponsored nofollow">${esc(
    p.cta,
  )}</a>
</article>`,
)}
</div>
<p class="disclosure reveal">${esc(page.disclosure)}</p>
</div>
</section>
${pageTail(page, locale, { faqOnBone: true })}`;

  return { html, breadcrumb: crumb(locale, ['whatIUse']), schema: [] };
}

/* ------------------------------------------------------------------ */
/* Legal / prose pages                                                  */
/* ------------------------------------------------------------------ */

export function buildLegal({ locale, key, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
<section class="block">
<div class="wrap">
<div class="prose reveal">${page.body}</div>
</div>
</section>`;

  return { html, breadcrumb: crumb(locale, [key]), schema: [] };
}

/* ------------------------------------------------------------------ */
/* 404                                                                  */
/* ------------------------------------------------------------------ */

export function buildNotFound({ locale, page }) {
  const html = `${pageHero({ ...page.hero, heading: page.hero.h1, lede: esc(page.hero.lede), locale })}
<div class="ticks"></div>
${relatedLinks({ links: page.related, locale })}`;

  return { html, breadcrumb: [], schema: [] };
}
