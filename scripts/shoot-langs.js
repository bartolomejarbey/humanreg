// Screenshot homepage in CS / EN / DE / PL.
const CDP = require('chrome-remote-interface');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = 'C:/Users/HP/human-reg/shots/langs';

function startChrome() {
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9224',
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

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const chrome = startChrome();
  await sleep(2000);
  try {
    const client = await CDP({ port: 9224 });
    const { Page, Runtime, Emulation } = client;
    await Page.enable();
    await Runtime.enable();
    await Emulation.setDeviceMetricsOverride({
      width: 1440, height: 900, deviceScaleFactor: 1, mobile: false,
    });

    for (const lang of ['cs', 'en', 'de', 'pl']) {
      await Page.navigate({ url: 'http://localhost:3003/index.html' });
      await Page.loadEventFired();
      await sleep(5000);
      // Force lang
      if (lang !== 'cs') {
        await Runtime.evaluate({ expression: `window.i18n && window.i18n.translate('${lang}')` });
        await sleep(500);
      }
      await Runtime.evaluate({ expression: "document.querySelectorAll('.reveal, .fade-in').forEach(e=>{e.classList.add('is-visible');e.classList.add('visible');})" });
      await sleep(300);

      const data = await Page.captureScreenshot({
        captureBeyondViewport: true,
        format: 'png',
        clip: { x: 0, y: 0, width: 1440, height: 5938, scale: 1 },
      });
      const outPath = path.join(OUT_DIR, `index-${lang}.png`);
      fs.writeFileSync(outPath, Buffer.from(data.data, 'base64'));
      console.log(`wrote ${outPath}`);
    }
    await client.close();
  } finally {
    try { process.kill(-chrome.pid); } catch (_) {}
  }
})();
