# benvelazquez.com

Static bilingual site for **Ben Velazquez** — Performance Rehabilitation, NYC.

100% HTML/CSS/JS. No framework, no runtime dependencies, no client-side
rendering. A small Node script turns content files into a fully static
`dist/`, which Cloudflare Workers serves directly.

**Lighthouse: 100 / 100 / 100 / 100** (performance, accessibility, best
practices, SEO) — verified on the home page, ELDOA, programs, an article,
the application form, and a Spanish page. CLS is 0 on every page tested.

---

## Quick start

```bash
npm run dev              # build + serve at http://localhost:8788
npm run build            # write dist/ for production
npm run check            # build, then audit dist/ (this is what CI runs)
npm run deploy           # build + wrangler deploy

npm run build:staging    # build for the workers.dev sandbox
npm run check:staging    # …and audit it
npm run deploy:staging   # …and ship it
```

Node 20+. Nothing to `npm install` to build the site — `devDependencies` is
empty on purpose. (Wrangler is only needed to deploy, and CI installs it
itself.)

## Staging vs production

The site is currently being reviewed on a sandbox Worker before the real
domain is cut over:

| | URL |
|---|---|
| Sandbox (current) | `https://benvelazquez.blue-recipe-dcdd.workers.dev` |
| Production (later) | `https://www.benvelazquez.com` |

`SITE_ORIGIN` controls which one a build targets. **Any origin other than
production is automatically treated as staging**, which means:

- `noindex, nofollow` on every page, plus a `googlebot` directive
- `robots.txt` becomes `Disallow: /`
- Canonicals self-reference the sandbox instead of pointing at the
  production domain — critical, because `www.benvelazquez.com` currently
  serves the old Squarespace site, and canonicalising there would hand the
  sandbox's signals to unrelated pages
- Open Graph images resolve on the sandbox origin, so link previews work
- `llms.txt` carries a "do not cite this" banner
- `<link rel="alternate" hreflang>` is dropped (the visible EN/ES switcher
  keeps its `hreflang` attributes — those are UI hints, not index signals)

The audit inverts its checks to match, so `npm run check:staging` verifies
the sandbox *is* un-indexable rather than complaining that it isn't.

**To go live:** unset `SITE_ORIGIN` (or set it to the production URL), point
DNS at Cloudflare, and uncomment the `routes` block in `wrangler.jsonc`.
Everything flips to indexable on the next build with no other edits.

---

## What's in here

```
build.mjs              The whole build. Reads src/data, writes dist/.
src/
  data/
    site.js            Domain, business identity, route table, prices, videos.
    ui.js              Navigation and chrome strings (EN + ES).
    content.en.js      All English page copy.
    content.es.js      All Spanish page copy — same shape as the English file.
    insights.js        Blog posts (bilingual, with per-post FAQs).
    quotes.js          Testimonials.
  lib/
    layout.js          The HTML shell: <head>, header, footer, breadcrumbs.
    schema.js          JSON-LD graph builders.
    components.js      Reusable sections (answer block, FAQ, cards, tiers…).
    html.js            Escaping and small string helpers.
  pages/index.js       One builder function per page type.
  styles/main.css      The entire design system (inlined at build time).
  assets/js/site.js    ~4 KB of progressive enhancement (inlined).
public/                Copied verbatim into dist/ (fonts, icons, OG images).
worker/index.js        Cloudflare Worker: apex→www canonical redirect.
scripts/
  audit.mjs            Pre-flight checks on dist/. CI fails on any error.
  serve.mjs            Local preview with production-like headers + brotli.
  make-og.mjs          Renders branded OG images and PNG icons (Playwright).
  subset-fonts.py      Re-subsets the webfonts (fontTools).
fonts-src/             Unmodified font originals, kept so subsetting is repeatable.
```

---

## Everyday tasks

### Publish a new weekly insight

Add an object to the **top** of the array in `src/data/insights.js` and run
`npm run build`. That single edit produces: an English article page, a
Spanish article page, entries on both index pages and the home page, both
RSS feeds, sitemap entries with hreflang, `llms-full.txt` sections, and an
`Article` + `FAQPage` schema graph.

Each post needs `slug`, `date`, `updated`, `tag`, `title`, `summary`
(card excerpt), `meta` (≤158 chars, the meta description), `answer`
(the answer-first block), `body`, and `faqs` — all bilingual.

Then optionally regenerate its OG card: `npm run og`.

### Edit page copy

`src/data/content.en.js` / `content.es.js`, keyed by route. Keep titles
≤60 characters and descriptions ≤158 — `npm run check` fails the build
otherwise.

### Change prices or roster numbers

`src/data/site.js` → `pricing` and `roster`. They flow into the pricing
tiers, the FAQ answers, the scarcity badges, `llms.txt` and the `Offer`
schema at once.

### Add a page

1. Add a route to `routes` in `src/data/site.js` (with both slugs).
2. Add a content entry under that key in both content files.
3. Add a `case` in `build.mjs` if it needs a custom builder — otherwise
   `buildStandardPage` handles hero / answer / facts / cards / FAQ / CTA.

### Update fonts or branding

```bash
npm run build && python3 scripts/subset-fonts.py   # needs: pip install fonttools brotli
npm run og                                          # needs Playwright
npm run build
```

---

## How the SEO / GEO / AEO layer works

Everything below is applied centrally, so a page cannot ship without it.

**Per page, automatically:**

- Unique `<title>` and meta description, both length-enforced by the audit
- Canonical URL, and `hreflang` for `en`, `es` and `x-default`
- Open Graph + Twitter card with a **page-specific 1200×630 image**
- A JSON-LD `@graph`: `Person`, `ProfessionalService`, `WebSite`,
  `WebPage`, `BreadcrumbList`, plus `FAQPage`, `Service`, `BlogPosting`,
  `VideoObject`, `Review`, `Book` or `PodcastSeries` where relevant
- Visible breadcrumbs that match the `BreadcrumbList` markup
- A deliberate internal-link cluster at the foot of the page

**The answer-engine layer:**

- **Answer block** — every page opens with a self-contained, quotable
  answer to its primary question, marked `speakable` in schema. This is
  what a model lifts when it cites the site.
- **FAQ on every page** — a visible `<details>` accordion whose questions
  and answers are mirrored exactly into `FAQPage` JSON-LD. The audit fails
  if the visible count and the schema count ever diverge.
- **`llms.txt`** — a compact, structured brief: who Ben is, credentials,
  athletes, pricing, and a linked index of every page.
- **`llms-full.txt`** — the full text of every page and article, so a
  model can answer from the site without crawling it.
- **`robots.txt`** explicitly allows 23 named AI crawlers (GPTBot,
  ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot…).
- **At-a-glance fact lists** on key pages — trivially parseable key/value
  pairs.

**Bilingual done properly:** Spanish is a real set of pages at real URLs
(`/es/rendimiento-ejecutivo/`, not `?lang=es`), with translated slugs and
reciprocal hreflang. The prototype's JavaScript language toggle was
replaced because a JS toggle gives you one indexable page, not two.

**No fabricated trust signals.** Testimonials are emitted as individually
attributed `Review` objects. There is no `aggregateRating` anywhere, and
the audit fails the build if one ever appears.

---

## How the performance is achieved

| Decision | Effect |
|---|---|
| All CSS inlined in `<head>` | Zero render-blocking network requests |
| Fonts self-hosted, subset + instanced | 125 KB → **57 KB** for all three faces |
| Fonts preloaded, `font-display: swap` | LCP text paints immediately; **CLS 0** |
| YouTube behind a click-to-load facade | The ~1.5 MB player never loads unasked |
| No analytics, no tag manager, no CDN | **7 requests**, all first-party |
| ~4 KB of inlined JS, all enhancement | TBT 0–40 ms; site works fully without JS |
| `width`/`height` on every image | No layout shift |

A typical page is ~60 KB uncompressed, **~18 KB over the wire** with brotli.

---

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`: build → audit →
`wrangler deploy`. Pull requests build and audit but do not deploy.

If `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` are not set, the deploy
step is **skipped with a notice rather than failing** — deploying from
Cloudflare's own Git integration is a valid setup, and a working deploy
elsewhere shouldn't leave `main` permanently red. Set both secrets if you
want GitHub Actions to do the deploying instead.

**Repository secrets (only needed to deploy from Actions):**

| Secret | Where to get it |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare dashboard → My Profile → API Tokens → *Edit Cloudflare Workers* |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard → Workers & Pages (right sidebar) |

`wrangler.jsonc` serves `./dist` through the assets binding and routes
To attach the domain, uncomment the `routes` block once the zone is on the
account.

### The application form

The form posts directly to **Formspree** — no server-side handler, nothing
to configure, and it works on any deploy including the sandbox.

The endpoint is declared once, in `src/data/site.js`:

```js
formEndpoint: 'https://formspree.io/f/xzebvjgz',
formHost: 'https://formspree.io',
```

It submits two ways, both to that same URL:

- **With JavaScript** — `fetch` with `Accept: application/json`, so the
  visitor stays on the page and gets the inline success message.
- **Without JavaScript** — a native form POST via the `action` attribute,
  landing on Formspree's own confirmation page.

If the request fails, the inline error tells the visitor to email instead,
so a lead is never silently dropped.

Submissions carry `_subject` (localised), `language`, and the `page` they
came from. Spam is filtered by a hidden `_gotcha` field, which is
Formspree's own honeypot convention.

> [!IMPORTANT]
> `formHost` must also appear in **`connect-src`** and **`form-action`** in
> the Content-Security-Policy in `build.mjs`. The CSP defaults to `'self'`,
> which blocks both submission paths silently — no error, no network
> request. Changing the form host means changing the CSP.

---

## Before this goes live

A short list of things that need a human decision or a real value. None of
them block the build.

**Placeholder links** in `src/data/site.js` → `links` (currently `#`):
`executiveReset`, `podcast`, `gtg`, `p2717`, `superpatch`.

**Worth verifying before publishing**, since these are now stated as fact
in structured data that search and answer engines will read:

- The award and "nationally recognised" claims — schema states them as
  fact, so they should be attributable to something specific.
- The two McDavid video IDs, and whether commercial clearance has come
  through (the draft flagged this as pending).
- The Super Patch partnership, which the draft listed as "likely but not
  yet confirmed". If it is not signed, remove that card — the affiliate
  disclosure names it as a current relationship.
- The `foundingDate` (2004) and the map coordinates in `site.js`, which
  currently point at central Manhattan rather than a specific address.

**Pricing** is carried over from the working draft ($297 / $2,300 / $6,500
/ $3,000). The site presents it as final, so confirm it before launch.

**Analytics** — none is installed, which is part of how the site scores
100. If you want it, Cloudflare Web Analytics is the only option that
won't cost points; it is server-side and adds no JavaScript.

---

© 2026 Ben Velazquez. All rights reserved.
