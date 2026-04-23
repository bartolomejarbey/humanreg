const CDP = require('chrome-remote-interface');
const { spawn } = require('child_process');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function startChrome() {
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--remote-debugging-port=9223',
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
  const chrome = startChrome();
  await sleep(2000);
  try {
    const client = await CDP({ port: 9223 });
    const { Page, Runtime, Emulation } = client;
    await Page.enable();
    await Runtime.enable();
    await Emulation.setDeviceMetricsOverride({
      width: 1440, height: 900, deviceScaleFactor: 1, mobile: false,
    });
    await Page.navigate({ url: 'http://localhost:3003/index.html' });
    await Page.loadEventFired();
    await sleep(4000);

    const { result } = await Runtime.evaluate({
      expression: `(() => {
        const grid = document.querySelector('.video-reviews__grid--duo');
        if (!grid) return JSON.stringify({error: 'no grid'});
        const cs = getComputedStyle(grid);
        const rect = grid.getBoundingClientRect();
        const items = [...grid.children].map(it => {
          const r = it.getBoundingClientRect();
          const c = getComputedStyle(it);
          return {
            class: it.className,
            rect: {x: r.x, y: r.y, w: r.width, h: r.height},
            paddingBottom: c.paddingBottom,
            height: c.height,
            display: c.display,
          };
        });
        return JSON.stringify({
          grid: {
            display: cs.display,
            'grid-template-columns': cs.gridTemplateColumns,
            'max-width': cs.maxWidth,
            width: cs.width,
            rect: {x: rect.x, y: rect.y, w: rect.width, h: rect.height},
            count: grid.children.length,
          },
          items
        }, null, 2);
      })()`,
      returnByValue: true,
    });
    console.log(result.value);
    await client.close();
  } finally {
    try { process.kill(-chrome.pid); } catch (_) {}
  }
})();
