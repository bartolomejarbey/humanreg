// One-time optimization: downsize camera-size photos to web-appropriate dimensions.
// Runs in-place — overwrites originals. Originals should be kept in Šárka's source archive.
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = 'C:/Users/HP/human-reg/images';
const DIRS = [
  path.join(ROOT),            // root — DSC01346.jpg, DSC02122.jpg
  path.join(ROOT, 'hr'),      // HR gallery photos
  path.join(ROOT, 'masaze'),  // Massage photos
  path.join(ROOT, 'recenze'), // Review screenshots
];
const SKIP_DIRS = ['icons', 'nuskin']; // keep Šárka's icons + SVGs untouched

const MAX_WIDTH = 2400;
const JPG_QUALITY = 85;
const PNG_QUALITY = 90;

let saved = 0, processed = 0, skipped = 0;

async function optimizeFile(full) {
  const stat = fs.statSync(full);
  if (!stat.isFile()) return;
  const ext = path.extname(full).toLowerCase();
  if (!/^\.(jpe?g|png)$/.test(ext)) return;

  let meta;
  try { meta = await sharp(full).metadata(); }
  catch (e) { console.log(`  ! cannot read ${path.basename(full)}: ${e.message}`); return; }

  if (!meta.width || meta.width <= MAX_WIDTH) {
    if (stat.size < 500 * 1024) { skipped++; return; } // small enough, leave
  }

  const tmp = full + '.tmp';
  let pipeline = sharp(full);
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  if (ext === '.png') {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: false });
  } else {
    pipeline = pipeline.jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true });
  }
  await pipeline.toFile(tmp);
  const newStat = fs.statSync(tmp);
  if (newStat.size < stat.size) {
    fs.renameSync(tmp, full);
    saved += stat.size - newStat.size;
    processed++;
    console.log(`  ${path.basename(full)}: ${(stat.size/1024).toFixed(0)}KB → ${(newStat.size/1024).toFixed(0)}KB (${meta.width}→${Math.min(meta.width, MAX_WIDTH)}px)`);
  } else {
    fs.unlinkSync(tmp);
    skipped++;
  }
}

(async () => {
  for (const dir of DIRS) {
    if (!fs.existsSync(dir)) continue;
    console.log(`\n→ ${dir}`);
    const entries = fs.readdirSync(dir);
    for (const name of entries) {
      if (SKIP_DIRS.includes(name)) continue;
      const full = path.join(dir, name);
      const s = fs.statSync(full);
      if (s.isDirectory()) continue; // don't recurse (we explicit-listed dirs)
      await optimizeFile(full);
    }
  }
  console.log(`\n=== Done: ${processed} optimized, ${skipped} skipped, ${(saved/1024/1024).toFixed(1)} MB saved ===`);
})();
