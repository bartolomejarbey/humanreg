# Refresh Studio Kadaň

Statický web pro Refresh Studio v Kadani (Human Regenerator, EMS Kegel Chair, masáže).

## Stack

- Čisté HTML5 / CSS3 / vanilla JS — bez frameworku, bez build stepu
- Multi-page (ne SPA) — 6 samostatných HTML souborů
- i18n: runtime přepínání jazyků (CS / EN / DE / PL) přes `js/i18n.js`
- Hosting: **Vercel** (free tier, auto-deploy z tohoto repa)

## Struktura

```
/
├── index.html                    # O nás / úvodní stránka
├── human-regenerator.html
├── ems-kegel-chair.html
├── masaze.html
├── cenik.html
├── kontakt.html
├── css/
│   ├── style.css                 # Global tokens, navbar, footer, buttons, utility
│   ├── index.css                 # Homepage-specific (hero, stats, services, HR spotlight)
│   └── pages.css                 # Subpage shared (page-hero, FAQ, pricing, contact form)
├── js/
│   ├── main.js                   # Mobile menu, scroll state, reveal, floating CTA
│   ├── index.js                  # Homepage — hero fade timing, video cinema overlay
│   ├── accordion.js              # FAQ expand/collapse
│   └── i18n.js                   # Translations (CS master + EN/DE/PL dict)
├── images/
│   ├── hr/                       # Human Regenerator photos (DSC*.jpg)
│   ├── masaze/                   # Masáže photos
│   ├── icons/                    # Icon SVGs + numbered PNGs (from Šárka)
│   └── recenze/
├── vercel.json                   # Vercel config (clean URLs, cache headers)
└── CLAUDE.md                     # Project rules (brand palette, tone, forbidden patterns)
```

## Lokální vývoj

```bash
# Jakýkoliv static HTTP server v root adresáři. Např:
npx http-server -p 3003
# nebo VS Code Live Server plugin
# nebo Python: python -m http.server 3003
```

Otevři `http://localhost:3003/`.

## Deploy na Vercel (jednorázové nastavení)

1. Na [vercel.com](https://vercel.com) sign-in přes GitHub
2. **Add New → Project** → vyber tento repo
3. Vercel auto-detekuje statickou stránku — žádná konfigurace, klikni **Deploy**
4. Za ~30 sekund dostaneš URL `refresh-studio-kadan-<hash>.vercel.app`
5. **Settings → Domains** → přidej vlastní doménu (`refreshstudio.cz`) pokud máš — Vercel ti ukáže 2 DNS záznamy k nastavení u registrátora (A/CNAME)

Od té chvíle:
```bash
git push                    # → Vercel deploy za ~30s, live
```

Každý `git push` do `main` branch automaticky deploynou novou verzi.
Každý push do jiné branch dostane **preview URL** — super pro testy před merge.

## Live updates přes chat

Pracovní flow:
1. Ty řekneš co chceš změnit
2. Já upravím soubory lokálně
3. Ukážu screenshot z local serveru nebo preview deploy
4. Ty „OK"
5. `git commit && git push` → live za 30s

## Překlady (i18n)

Slovník je v `js/i18n.js`, 4 jazyky (CS master + EN/DE/PL překlady).
Přidat jazyk: do `i18nData` přidat klíč, přidat `<a>` do všech 6 `.lang-switch` v HTML, restartovat.

## Brand / obsah

- Brand paleta, typografie, zakázané vzory: **`CLAUDE.md`**
- Zdroj pravdy pro obsah: **`HUMANREG.odt`** (lokálně, není v repu)
- Sdílená paměť pro AI asistenta: `~/.claude/projects/C--Users-HP-human-reg/memory/`

## Kontakt

- Šárka Becková — +420 777 938 915 — sarka@refreshstudio.cz
- 1. máje 1536 (1. patro), 432 01 Kadaň
- IČO: 67844910
