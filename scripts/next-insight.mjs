#!/usr/bin/env node
/**
 * Editorial queue helper for the weekly insight.
 *
 * The 100 blog concepts in content/editorial/blog-queue.json come from Ben's
 * research PDF (content/editorial/Ben_Velazquez_100_Knowledge_Blogs.pdf). This
 * script picks the next one to write and records it once it is published, so
 * the weekly run never repeats a topic or loses its place.
 *
 *   node scripts/next-insight.mjs              # show the next topic + target date
 *   node scripts/next-insight.mjs --list 10    # show the next 10
 *   node scripts/next-insight.mjs --status     # queue counts and what shipped
 *   node scripts/next-insight.mjs --skip 24 --reason "too speculative"
 *   node scripts/next-insight.mjs --mark 1 --slug the-l5-s1-eldoa --date 2026-09-08
 *
 * The full writing process lives in content/editorial/WEEKLY-BLOG.md.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { insights } from '../src/data/insights.js';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const QUEUE = join(ROOT, 'content', 'editorial', 'blog-queue.json');

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? undefined : (argv[i + 1] ?? true);
};
const has = (name) => argv.includes(`--${name}`);

const queue = JSON.parse(readFileSync(QUEUE, 'utf8'));
const save = () => writeFileSync(QUEUE, `${JSON.stringify(queue, null, 2)}\n`);
const topics = queue.topics;
const byNumber = (n) => topics.find((t) => t.n === Number(n));

/**
 * Posts are dated the Tuesday of the publishing week — the cadence the four
 * existing insights already established. Run it on a Monday and you get
 * tomorrow; run it on a Wednesday and you get the Tuesday just gone, so a late
 * run still lands in the right week rather than skipping one.
 */
function targetDate(today = new Date()) {
  const d = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  const offset = (2 - d.getUTCDay() + 7) % 7; // 2 = Tuesday
  d.setUTCDate(d.getUTCDate() + (offset > 3 ? offset - 7 : offset));
  return d.toISOString().slice(0, 10);
}

function nextTopics(count = 1) {
  return topics
    .filter((t) => t.status === 'queued' && t.queuePosition != null)
    .sort((a, b) => a.queuePosition - b.queuePosition)
    .slice(0, count);
}

function describe(t) {
  const lines = [
    `#${t.n} · queue position ${t.queuePosition} · ${t.pillar}`,
    `  Source title : ${t.sourceTitle}`,
    `  Angle        : ${t.description}`,
    `  Audience     : ${t.targetMarket}`,
  ];
  if (t.note) lines.push(`  Note         : ${t.note}`);
  for (const c of t.caution) lines.push(`  ⚠ Caution    : ${c}`);
  return lines.join('\n');
}

/* ---------------------------------------------------------------- commands */

if (has('status')) {
  const counts = topics.reduce((acc, t) => ({ ...acc, [t.status]: (acc[t.status] ?? 0) + 1 }), {});
  console.log(`Queue: ${topics.length} topics —`, counts);
  console.log(`Insights currently on the site: ${insights.length}`);
  const done = topics.filter((t) => t.status === 'published').sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
  for (const t of done) console.log(`  ${t.publishedDate}  #${t.n}  /${t.publishedSlug}/`);
  process.exit(0);
}

if (has('skip')) {
  const t = byNumber(flag('skip'));
  if (!t) throw new Error(`No topic #${flag('skip')}`);
  t.status = 'skipped';
  t.skipReason = flag('reason') === true || flag('reason') === undefined ? 'unspecified' : String(flag('reason'));
  save();
  console.log(`Skipped #${t.n} — ${t.sourceTitle}\n  Reason: ${t.skipReason}`);
  process.exit(0);
}

if (has('mark')) {
  const t = byNumber(flag('mark'));
  if (!t) throw new Error(`No topic #${flag('mark')}`);
  const slug = flag('slug');
  const date = flag('date') ?? targetDate();
  if (typeof slug !== 'string') throw new Error('--mark needs --slug <english-slug>');

  const post = insights.find((p) => p.slug.en === slug);
  if (!post) throw new Error(`No insight in src/data/insights.js with slug.en "${slug}" — add the post first.`);
  if (post.date !== date) throw new Error(`Post "${slug}" is dated ${post.date}, not ${date}.`);

  t.status = 'published';
  t.publishedSlug = slug;
  t.publishedDate = date;
  save();
  console.log(`Marked #${t.n} published as /${slug}/ on ${date}.`);
  const [upcoming] = nextTopics(1);
  if (upcoming) console.log(`\nNext week:\n${describe(upcoming)}`);
  process.exit(0);
}

const count = has('list') ? Number(flag('list')) || 10 : 1;
const picks = nextTopics(count);
if (!picks.length) {
  console.log('The queue is empty. Every topic is published or skipped — time to refill blog-queue.json.');
  process.exit(0);
}

if (count === 1) {
  const date = targetDate();
  const clash = insights.find((p) => p.date === date);
  console.log(`Target publish date: ${date}`);
  if (clash) console.log(`⚠ An insight is already dated ${date}: "${clash.title.en}". This week may already be done.`);
  console.log('');
}
for (const t of picks) console.log(`${describe(t)}\n`);
