# The weekly insight — standing playbook

One new bilingual article on benvelazquez.com every week, drawn from the 100
concepts in `Ben_Velazquez_100_Knowledge_Blogs.pdf` and written in Ben's voice.

A scheduled Claude session runs this file end to end. It starts with no memory
of previous weeks, so everything it needs is either here or in the repo.

---

## Before you write

```bash
node scripts/next-insight.mjs        # the topic + the date it should carry
node scripts/next-insight.mjs --status
```

Then read, in this order:

1. `content/editorial/VOICE.md` — how Ben writes. Non-negotiable.
2. The most recent entry in `src/data/insights.js` — the shape to match.
3. The topic's own entry in `blog-queue.json`, including any `caution` or `note`.

If `next-insight.mjs` warns that an insight already carries this week's date,
this week is done. Stop and say so; do not publish a second post.

## Choosing and shaping the topic

Take the topic the script hands you. The PDF entry is a **brief, not a
specification** — it was written as a traffic play, and some of it does not
belong on this site as written. Reshape it:

- **Strip the unverifiable numbers.** "4x greater disability improvements",
  "39% faster recovery", "67% of young athletes" — if you cannot attribute it
  to a real, checkable source, make the point without the figure. These posts
  feed `Article` and `FAQPage` structured data; a fabricated statistic is a
  factual claim published under Ben's name.
- **Strip the borrowed names.** Do not describe a named athlete's surgery,
  routine or recovery, or claim a client, partnership or corporate program that
  is not already on the site. `VOICE.md` lists who may be named and how.
- **Keep the reader, not the funnel.** The Insights section is read by
  executives, athletes and parents. Topics written for practitioners (the
  business and practice-building pillar, queue positions 77+) are parked at the
  end of the queue for that reason — if one surfaces, skip it and take the next.

If a topic cannot be made honest and useful within those limits, skip it and
move on:

```bash
node scripts/next-insight.mjs --skip 24 --reason "premise not supportable"
```

Skipping is a normal outcome. Publishing a weaker post to avoid skipping is not.

## Writing it

Add one object to the **top** of the array in `src/data/insights.js`. Every
field is bilingual (`en` / `es`) and every one is required:

| Field | What it is |
| --- | --- |
| `slug` | URL segment per locale. The Spanish slug is Spanish, not the English one. |
| `date` / `updated` | The Tuesday the script printed, `YYYY-MM-DD`. Identical on a new post. |
| `tag` | One or two words. Reuse an existing tag where one fits — Longevity, Travel, Recovery, Posture. |
| `title` | ≤ 60 characters. It becomes the `<h1>` and the OG card. |
| `summary` | The index-card excerpt, 2 sentences. |
| `meta` | The meta description, **70–158 characters**. Shorter and different from `summary`. |
| `answer` | Two paragraphs, plain strings, answering the headline outright. |
| `body` | 700–1,100 words of HTML: `<p>`, `<h2>`, `<h3>`, `<em>` and internal `<a>`. No `<h1>`. |
| `faqs` | Exactly three `{ q, a }`, the answer wrapped in `<p>`. |

Then link one or two existing insights or service pages inline near the end —
the internal link cluster is part of why these rank. Use locale-correct paths
(`/eldoa/` in English, `/es/eldoa/` in Spanish); the audit fails the build on a
link that does not resolve.

## Shipping it

This post goes live automatically. Pushing to `main` triggers the Cloudflare
deploy, and nobody reads it in between — so the checks below are the only thing
standing between a bad draft and benvelazquez.com. Run them, and mean it.

```bash
npm run check          # build + audit; must pass clean
npm run og             # regenerate OG cards, including the two new ones
```

`npm run check` fails on broken links, oversized SEO fields, missing alt text
and invalid JSON-LD. Fix what it reports rather than working around it. If
Playwright is unavailable, skip `npm run og` — the missing card falls back to
`og-default.jpg` and the build still passes.

Before committing, reread the draft once against `VOICE.md` as if Ben were
about to see it on his own site, because he will. Anything you are not certain
of — a number, a name, a claim about a person or an organisation — comes out
now, not later.

Record the topic. This validates the slug and date against the post you just
added, so the queue cannot drift from the site:

```bash
node scripts/next-insight.mjs --mark 1 --slug the-l5-s1-eldoa --date 2026-09-08
```

Then commit `src/data/insights.js`, `content/editorial/blog-queue.json` and any
new `public/img/og-insight-*.jpg` on `main`, and push:

```bash
git checkout main && git pull origin main
git commit -am "Weekly insight: <title>"
git push -u origin main
```

Say what shipped: the title, the URL it will live at, the topic number, and
anything you trimmed from the brief and why.

### If it will not go green

Never push a red build to `main` — that publishes a broken site with no one
watching. If `npm run check` fails and you cannot fix it cleanly, or the topic
turns out to be one you should not publish under Ben's name, stop and do this
instead:

```bash
git checkout -b insight/<english-slug>
git push -u origin insight/<english-slug>
```

Open a pull request titled `Weekly insight (needs review): <title>`, say plainly
what is wrong in the body, and leave it for Ben. A week with no post is a far
smaller problem than a week with a broken or dishonest one.
