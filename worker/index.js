/**
 * Cloudflare Worker for benvelazquez.com.
 *
 * Static assets are served by the platform's assets binding. This Worker
 * only runs for requests the assets layer does not handle, which is:
 *
 *   1. /api/apply       — the application form endpoint
 *   2. apex → www       — canonical host redirect (one host, one index)
 *
 * Everything else falls through to `env.ASSETS`.
 */

const CANONICAL_HOST = 'www.benvelazquez.com';

/** Where applications are delivered. Set as Worker secrets/vars. */
async function deliverApplication(payload, env) {
  // Preferred: forward to whatever endpoint is configured (Formspree, a CRM
  // webhook, Zapier, an email API…). Set APPLY_WEBHOOK as a Worker secret:
  //   npx wrangler secret put APPLY_WEBHOOK
  if (env.APPLY_WEBHOOK) {
    const res = await fetch(env.APPLY_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    return;
  }

  // Fallback: persist to KV so nothing is lost before the webhook is wired up.
  if (env.APPLICATIONS) {
    const key = `apply:${Date.now()}:${crypto.randomUUID()}`;
    await env.APPLICATIONS.put(key, JSON.stringify(payload), {
      expirationTtl: 60 * 60 * 24 * 90, // 90 days
    });
    return;
  }

  throw new Error('no delivery target configured (set APPLY_WEBHOOK or bind APPLICATIONS KV)');
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

/** Field limits, so a bot cannot post a novel into the queue. */
const LIMITS = { name: 120, email: 200, goal: 120, message: 4000, page: 300, lang: 10 };

function sanitise(raw) {
  const out = {};
  for (const [key, max] of Object.entries(LIMITS)) {
    const value = raw[key];
    if (typeof value === 'string' && value.trim()) out[key] = value.trim().slice(0, max);
  }
  return out;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

    /* ---- Application endpoint ---- */
    if (url.pathname === '/api/apply') {
      if (request.method !== 'POST') {
        return json({ ok: false, error: 'method_not_allowed' }, 405);
      }

      // Same-origin only — this endpoint exists for the site's own form.
      const origin = request.headers.get('Origin');
      if (origin && new URL(origin).hostname !== url.hostname) {
        return json({ ok: false, error: 'forbidden' }, 403);
      }

      let body;
      try {
        body = await request.json();
      } catch {
        return json({ ok: false, error: 'invalid_json' }, 400);
      }

      // Honeypot: the form ships a hidden "company" field no human fills in.
      if (typeof body.company === 'string' && body.company.trim()) {
        return json({ ok: true });
      }

      const data = sanitise(body);
      if (!data.name || !data.email) {
        return json({ ok: false, error: 'missing_fields' }, 400);
      }
      if (!EMAIL_RE.test(data.email)) {
        return json({ ok: false, error: 'invalid_email' }, 400);
      }

      const payload = {
        ...data,
        submittedAt: new Date().toISOString(),
        country: request.cf?.country ?? null,
        userAgent: request.headers.get('User-Agent')?.slice(0, 300) ?? null,
      };

      try {
        await deliverApplication(payload, env);
      } catch (err) {
        console.error('application delivery failed', err.message, payload);
        return json({ ok: false, error: 'delivery_failed' }, 502);
      }

      return json({ ok: true });
    }

    /* ---- Everything else: static assets ---- */
    return env.ASSETS.fetch(request);
  },
};
