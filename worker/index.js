/**
 * Cloudflare Worker for benvelazquez.com.
 *
 * Static assets are served by the platform's assets binding. This Worker
 * only runs for requests the assets layer does not handle, which is:
 *
 *   apex → www — canonical host redirect (one host, one index)
 *
 * Everything else falls through to `env.ASSETS`. The application form posts
 * straight to Formspree from the browser, so there is no form endpoint here.
 */

const CANONICAL_HOST = 'www.benvelazquez.com';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    /* ---- Canonical host: apex and any preview alias → www ---- */
    if (
      url.hostname === 'benvelazquez.com' ||
      (url.hostname.endsWith('benvelazquez.com') && url.hostname !== CANONICAL_HOST)
    ) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    /* ---- Everything else: static assets ---- */
    return env.ASSETS.fetch(request);
  },
};
