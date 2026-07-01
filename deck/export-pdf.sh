#!/usr/bin/env bash
# 把 deck/slides 下全部幻灯片合并导出为一份 PDF
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DECK="$ROOT/deck"
SLIDES="$DECK/slides"
OUT="$ROOT/reports/丁冯德-实习总结-deck-2026.03-06.pdf"
CHROME="${CHROME:-google-chrome}"
TMP="$(mktemp -d)"

cleanup() { rm -rf "$TMP"; }
trap cleanup EXIT

if ! command -v "$CHROME" >/dev/null 2>&1; then
  CHROME=chromium-browser
fi

mapfile -t FILES < <(ls "$SLIDES"/*.html | sort)
PARTS=()

echo "Exporting ${#FILES[@]} slides → $OUT"
for f in "${FILES[@]}"; do
  base="$(basename "$f" .html)"
  part="$TMP/$base.pdf"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=4000 \
    --print-to-pdf="$part" \
    "file://$f" >/dev/null 2>&1
  PARTS+=("$part")
  echo "  ✓ $base"
done

mkdir -p "$(dirname "$OUT")"
pdfunite "${PARTS[@]}" "$OUT"
echo "Done: $OUT"
