/** Small HTML helpers. No dependencies, no template engine. */

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape text destined for an HTML text node or attribute value. */
export function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

/**
 * Strip tags and collapse whitespace — used to derive meta descriptions and
 * plain-text summaries (llms.txt, RSS) from rich copy.
 */
export function plain(value) {
  return String(value ?? '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Truncate on a word boundary, for meta descriptions that must stay <=160. */
export function clamp(value, max = 158) {
  const text = plain(value);
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

/** Join class names, dropping falsy entries. */
export function cx(...names) {
  return names.filter(Boolean).join(' ');
}

/** Render an attribute map, skipping null/undefined/false values. */
export function attrs(map = {}) {
  return Object.entries(map)
    .filter(([, v]) => v !== null && v !== undefined && v !== false)
    .map(([k, v]) => (v === true ? ` ${k}` : ` ${k}="${esc(v)}"`))
    .join('');
}

/** Map + join, the shape used constantly when rendering lists. */
export function each(items, fn) {
  return (items || []).map(fn).join('');
}

/** Serialise a JSON-LD payload safely for inline <script>. */
export function jsonLd(data) {
  return JSON.stringify(data, null, 0).replace(/</g, '\\u003c').replace(/-->/g, '--\\u003e');
}

/** URL-safe slug, used for insight post paths and heading anchors. */
export function slugify(value) {
  return plain(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Collapse insignificant whitespace between tags to trim payload size. */
export function minify(html) {
  return html
    .replace(/\n\s*/g, '\n')
    .replace(/>\n+</g, '><')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

/** Format an ISO date for display in a given locale. */
export function formatDate(iso, locale = 'en') {
  const date = new Date(`${iso}T12:00:00Z`);
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
