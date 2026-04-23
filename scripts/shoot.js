// Full-page screenshots via Chrome DevTools Protocol (CDP).
// Needs chrome-remote-interface.
const CDP = require('chrome-remote-interface');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:3003';
const OUT_DIR = 'C:/Users/HP/human-reg/shots/fullpage';
const PAGES = [
  { name: 'index', url: '/' },
  { name: 'human-regenerator', url: '/human-regenerator.html' },
  { name: 'ems-kegel-chair', url: '/ems-kegel-chair.html' },
  { name: 'masaze', url: '/masaze.html' },
  { name: 'cenik', url: '/cenik.html' },
  { name: 'kontakt', url: '/kontakt.html' },
];

function startChrome() {
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1440,900',
    'about:blank',
  ];
  const proc = spawn(CHROME, args, { stdio: 'ignore', detached: true });
  proc.unref();
  return proc;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function shoot(page, url, name) {
  // Fixed desktop viewport — do NOT override height (would break 100vh hero)
  await page.Emulation.setDeviceMetricsOverride({
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await page.Page.navigate({ url });
  await page.Page.loadEventFired();
  // Wait for hero timers (3800ms) + reveal observers
  await sleep(5000);
  // Force .reveal -> visible for bottom-of-page sections the observer missed
  await page.Runtime.evaluate({
    expression: "document.querySelectorAll('.reveal, .fade-in').forEach(e=>{e.classList.add('is-visible');e.classList.add('visible');})",
  });
  await sleep(500);

  const { result } = await page.Runtime.evaluate({
    expression: 'JSON.stringify({w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight})',
  });
  const { w, h } = JSON.parse(result.value);
  console.log(`${name}: page ${w}x${h}`);

  const data = await page.Page.captureScreenshot({
    captureBeyondViewport: true,
    format: 'png',
    clip: { x: 0, y: 0, width: 1440, height: h, scale: 1 },
  });
  const outPath = path.join(OUT_DIR, `${name}.png`);
  fs.writeFileSync(outPath, Buffer.from(data.data, 'base64'));
  console.log(`wrote ${outPath}`);
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const chrome = startChrome();
  await sleep(2000);
  try {
    const client = await CDP({ port: 9222 });
    const { Page, Runtime, Emulation } = client;
    await Page.enable();
    await Runtime.enable();
    for (const p of PAGES) {
      await shoot(client, BASE + p.url, p.name);
    }
    await client.close();
  } finally {
    try { process.kill(-chrome.pid); } catch (_) {}
  }
})();
