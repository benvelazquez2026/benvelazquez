/**
 * The BEN / V logo, as a single vector path.
 *
 * Traced from the master artwork and cleaned up: the letters are the
 * traced outlines, the two slash shapes are exact polygons. One path, so
 * it can be inlined anywhere and coloured with `fill` (or currentColor).
 *
 * Used by the header and footer (layout.js), the app icons and favicon
 * (public/icons/icon.svg, rendered to PNG by scripts/make-og.mjs) and the
 * Open Graph cards.
 */

export const LOGO_WIDTH = 561;
export const LOGO_HEIGHT = 387;
export const LOGO_VIEWBOX = `0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}`;

export const LOGO_PATH =
  'M0 347.9L0 308.9 1.6 301.7C4.6 288.3 11.9 278.3 21.9 273.6L26.5 271.5 38.5 271.5L50.5 271.5 54.8 273.8C61.5 277.3 66.7 282.6 69.9 289.1L72.8 295 75.8 288.5C82.8 273.7 97.7 265.6 114.4 267.5C131.9 269.4 144.1 280.8 148.5 299.1L150 305.5 150 346.2L150 387 75 387.0L0 387 0 347.9ZM61 335.2L61 319.5 59.2 316.1C56.6 310.9 52.9 308.7 46.3 308.3C39 307.8 34.4 310.1 31.6 315.6L29.5 319.5 29.2 335.2L28.8 351 44.9 351.0L61 351 61 335.2ZM120.5 334.0L120.5 317.5 118.3 313.0C115.4 307 111.8 305 104.2 305.0C97.3 305 92.8 307.4 89.6 313.0L87.5 316.5 87.2 333.8L86.8 351 103.7 350.8L120.5 350.5 120.5 334.0ZM0 201.0L0 153.9 14.2 154.2L28.5 154.5 28.8 183.2L29 212 44.5 212.0L60 212 60.2 186.3L60.5 160.7 73.5 160.8C80.6 160.8 86.8 160.9 87.2 160.9C87.7 161 88 172.5 88 186.5L88 212 104.2 211.8L120.5 211.5 120.8 182.8L121 154 135.5 154.0L150 154 150 201.0L150 248 75 248.0L0 248 0 201.0ZM0 115.6L0 97.3 25.8 80.5C39.9 71.2 60.5 57.8 71.5 50.6L91.4 37.5 45.7 37.2L0 37 0 18.5L0 0 75 0.0L150 0 150 18.5L150 37 127.8 51.6C115.5 59.7 95.2 73.1 82.5 81.4L59.6 96.5 70 96.8C75.8 96.9 96 97.1 115 97.3L149.5 97.5 149.8 115.8L150 134 75 134.0L0 134 0 115.6Z' +
  'M187 0H360L187 311ZM402 0H561L345.5 387H186.5Z';

/** Inline <svg> markup. Decorative by default — pair it with visible text. */
export function logoSvg({ className = 'logo', fill = 'currentColor', label } = {}) {
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="${className}" viewBox="${LOGO_VIEWBOX}" ${a11y}><path fill="${fill}" fill-rule="evenodd" d="${LOGO_PATH}"/></svg>`;
}
