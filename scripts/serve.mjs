#!/usr/bin/env node
/**
 * Minimal static server for previewing dist/ locally, with the same
 * directory-index and 404 behaviour Cloudflare's static assets use.
 *
 *   npm run dev     # build + serve on http://localhost:8788
 */

import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync, brotliCompressSync, constants as zlibConstants } from 'node:zlib';

const DIST = join(dirname(dirname(fileURLToPath(import.meta.url))), 'dist');
const PORT = Number(process.env.PORT) || 8788;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

/** Types Cloudflare compresses on the wire; mirror that locally. */
const COMPRESSIBLE = /^(text\/|application\/(json|xml|manifest|javascript))/;

/** Same cache policy as dist/_headers, so local numbers match production. */
function cacheControl(path) {
  if (/^\/(fonts|icons|img)\//.test(path)) return 'public, max-age=31536000, immutable';
  if (/\.(xml|txt)$/.test(path)) return 'public, max-age=3600';
  return 'public, max-age=0, must-revalidate';
}

function send(req, res, status, body, type, urlPath) {
  const headers = {
    'Content-Type': type,
    'Cache-Control': cacheControl(urlPath),
    'X-Content-Type-Options': 'nosniff',
    Vary: 'Accept-Encoding',
  };

  const accept = req.headers['accept-encoding'] || '';
  let payload = body;
  if (COMPRESSIBLE.test(type) && body.length > 512) {
    if (/\bbr\b/.test(accept)) {
      payload = brotliCompressSync(body, {
        params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 5 },
      });
      headers['Content-Encoding'] = 'br';
    } else if (/\bgzip\b/.test(accept)) {
      payload = gzipSync(body, { level: 6 });
      headers['Content-Encoding'] = 'gzip';
    }
  }

  headers['Content-Length'] = payload.length;
  res.writeHead(status, headers);
  res.end(req.method === 'HEAD' ? undefined : payload);
}

createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let file = join(DIST, urlPath);

  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file) && existsSync(`${file}/index.html`)) file = `${file}/index.html`;

  if (!existsSync(file) || statSync(file).isDirectory()) {
    const notFound = join(DIST, '404.html');
    const body = existsSync(notFound) ? readFileSync(notFound) : Buffer.from('Not found');
    send(req, res, 404, body, TYPES['.html'], urlPath);
    return;
  }

  send(req, res, 200, readFileSync(file), TYPES[extname(file)] || 'application/octet-stream', urlPath);
}).listen(PORT, () => console.log(`Serving dist/ → http://localhost:${PORT}`));
