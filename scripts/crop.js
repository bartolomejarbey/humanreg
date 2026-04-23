const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const FULL_DIR = 'C:/Users/HP/human-reg/shots/full';
const OUT_DIR = 'C:/Users/HP/human-reg/shots/crops';

async function crop(file) {
  const src = path.join(FULL_DIR, file);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const base = file.replace('.png', '');
  const meta = await sharp(src).metadata();
  const { width, height } = meta;
  const chunkH = 1200;
  const overlap = 80;
  let y = 0,
    i = 0;
  while (y < height) {
    const h = Math.min(chunkH, height - y);
    const out = path.join(OUT_DIR, `${base}-${String(i).padStart(2, '0')}.png`);
    await sharp(src)
      .extract({ left: 0, top: y, width, height: h })
      .resize({ width: 720 })
      .toFile(out);
    console.log(`${base} part ${i}: y=${y}, h=${h}`);
    y += chunkH - overlap;
    i++;
  }
}

(async () => {
  for (const f of [
    'index.png',
    'human-regenerator.png',
    'ems-kegel-chair.png',
    'masaze.png',
    'cenik.png',
    'kontakt.png',
  ]) {
    await crop(f);
  }
})();
