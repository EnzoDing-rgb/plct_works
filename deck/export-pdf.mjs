#!/usr/bin/env node
/**
 * 多文件 slide deck → 矢量 PDF（Playwright + pdf-lib）
 * 用法：node export-pdf.mjs [--slides slides] [--out 丁冯德-实习总结-deck-2026.03-06.pdf]
 */
import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseArgs() {
  const args = { width: 1920, height: 1080, slides: 'slides', out: '丁冯德-实习总结-deck-2026.03-06.pdf' };
  const a = process.argv.slice(2);
  for (let i = 0; i < a.length; i += 2) {
    const k = a[i].replace(/^--/, '');
    if (a[i + 1] != null) args[k] = a[i + 1];
  }
  args.width = parseInt(args.width, 10);
  args.height = parseInt(args.height, 10);
  return args;
}

async function main() {
  const { slides, out, width, height } = parseArgs();
  const slidesDir = path.resolve(__dirname, slides);
  const outFile = path.resolve(__dirname, out);

  const files = (await fs.readdir(slidesDir))
    .filter((f) => f.endsWith('.html'))
    .sort();
  if (!files.length) {
    console.error(`No .html in ${slidesDir}`);
    process.exit(1);
  }
  console.log(`Export ${files.length} slides → ${outFile}`);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width, height } });
  const pageBuffers = [];

  for (const f of files) {
    const page = await ctx.newPage();
    const url = 'file://' + path.join(slidesDir, f);
    await page.goto(url, { waitUntil: 'networkidle' }).catch(() => page.goto(url));
    await page.waitForTimeout(1200);
    await page.emulateMedia({ media: 'screen' });
    const buf = await page.pdf({
      width: `${width}px`,
      height: `${height}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: false,
    });
    pageBuffers.push(buf);
    await page.close();
    console.log(`  [${pageBuffers.length}/${files.length}] ${f}`);
  }

  await browser.close();

  const merged = await PDFDocument.create();
  for (const buf of pageBuffers) {
    const src = await PDFDocument.load(buf);
    const copied = await merged.copyPages(src, src.getPageIndices());
    copied.forEach((p) => merged.addPage(p));
  }
  const bytes = await merged.save();
  await fs.writeFile(outFile, bytes);
  console.log(`\n✓ ${outFile} (${(bytes.byteLength / 1024).toFixed(0)} KB, ${files.length} pages)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
