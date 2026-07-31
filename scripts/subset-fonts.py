#!/usr/bin/env python3
"""
Re-subset the self-hosted webfonts.

The display font is the largest asset on the critical path, and the Google
Fonts originals carry far more than this site renders: an optical-size axis
nothing uses, weights nothing references, and thousands of glyphs outside
Latin. This script instances the variable axes down to the weights actually
used, then subsets the glyph set to the characters that actually appear in
the built site (plus a generous floor so ordinary copy edits never break).

Run after `npm run build`, then commit the smaller files:

    npm run build
    python3 scripts/subset-fonts.py

Requires: pip install fonttools brotli
Originals live in fonts-src/ and are never modified.
"""

from __future__ import annotations

import html
import re
import sys
from io import BytesIO
from pathlib import Path

try:
    from fontTools.ttLib import TTFont
    from fontTools.varLib import instancer
    from fontTools.subset import Subsetter, Options
except ImportError:
    sys.exit("fonttools is required:  pip install fonttools brotli")

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "fonts-src"
OUT = ROOT / "public" / "fonts"
DIST = ROOT / "dist"

# Always keep these, regardless of what today's copy happens to contain, so
# routine content edits never silently drop a glyph.
FLOOR = set(
    # Printable ASCII
    [chr(c) for c in range(0x20, 0x7F)]
    # Latin-1 supplement: Spanish accents, ¿ ¡ ñ ü ×, degree, etc.
    + [chr(c) for c in range(0xA0, 0x100)]
    # Punctuation and symbols the design leans on
    + list("‘’‚“”„†‡•…‰‹›⁄€™←↑→↓−∕✓·–—")
)

# `wght` ranges the stylesheet actually references.
INSTANCE = {
    "bricolage-grotesque": {"opsz": 40, "wght": (600, 800)},
    "hanken-grotesk": {"wght": (400, 700)},
    "space-mono-400": None,  # static font, nothing to instance
}

LAYOUT_FEATURES = ["kern", "liga", "clig", "calt", "ccmp", "locl", "mark", "mkmk"]


def site_characters() -> set[str]:
    """Every character rendered anywhere in the built site."""
    if not DIST.exists():
        sys.exit("dist/ not found — run `npm run build` first.")

    chars: set[str] = set()
    for path in DIST.rglob("*.html"):
        text = path.read_text(encoding="utf-8")
        text = re.sub(r"<script[\s\S]*?</script>", " ", text)
        text = re.sub(r"<style[\s\S]*?</style>", " ", text)
        # Attribute values are rendered too (alt, aria-label, placeholder…).
        text = re.sub(r"<[^>]+>", lambda m: " " + " ".join(re.findall(r'="([^"]*)"', m.group(0))), text)
        chars.update(html.unescape(text))

    # Plain-text deliverables are not rendered in the browser, so they are
    # deliberately excluded — no need to carry glyphs for them.
    return chars


def subset(name: str, unicodes: set[int]) -> None:
    source = SRC / f"{name}.woff2"
    if not source.exists():
        print(f"  skip {name}: no source in fonts-src/")
        return

    font = TTFont(source)
    axes = INSTANCE.get(name)
    if axes and "fvar" in font:
        font = instancer.instantiateVariableFont(font, axes, inplace=False, updateFontNames=False)
        # Round-trip through bytes before subsetting. The instancer leaves
        # some tables lazily loaded and inconsistent with each other, which
        # makes the subsetter fail on glyphs absent from `gvar`.
        buffer = BytesIO()
        font.save(buffer)
        buffer.seek(0)
        font = TTFont(buffer)

    options = Options()
    options.flavor = "woff2"
    options.layout_features = LAYOUT_FEATURES
    options.hinting = False
    options.desubroutinize = True
    options.drop_tables += ["DSIG"]
    options.notdef_outline = False
    options.recalc_bounds = True

    subsetter = Subsetter(options=options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)

    target = OUT / f"{name.replace('space-mono-400', 'space-mono-400')}-latin.woff2"
    if name == "space-mono-400":
        target = OUT / "space-mono-400-latin.woff2"
    elif name == "bricolage-grotesque":
        target = OUT / "bricolage-grotesque-latin.woff2"
    elif name == "hanken-grotesk":
        target = OUT / "hanken-grotesk-latin.woff2"

    before = source.stat().st_size
    font.flavor = "woff2"
    font.save(target)
    after = target.stat().st_size
    print(f"  {name:24s} {before // 1024:>4} KB → {after // 1024:>4} KB  ({100 - after * 100 // before}% smaller)")


def main() -> None:
    used = site_characters() | FLOOR
    unicodes = {ord(c) for c in used if ord(c) > 0x1F}
    print(f"→ {len(unicodes)} codepoints in use (including safety floor)")

    OUT.mkdir(parents=True, exist_ok=True)
    for name in INSTANCE:
        subset(name, unicodes)
    print("✓ Fonts re-subset. Rebuild to pick them up.")


if __name__ == "__main__":
    main()
