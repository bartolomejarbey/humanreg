# Human Regenerator - Refresh Studio Kadaň

## Tech stack
- Čisté HTML5, CSS3, vanilla JavaScript
- Multi-page (ne SPA), každá sekce = vlastní .html soubor
- Mobile-first responsive design
- Cíl: snadná migrace do WordPressu přes konverzní script později

## Co NEDĚLAT
- Žádný framework (Next.js, React, Vue)
- Žádný Tailwind (custom CSS, ať je pak jednoduchá migrace do WP)
- Žádný build step (ne webpack, ne vite)
- Žádné externí fonty kromě Google Fonts přes <link>
- Žádná červená barva v designu
- Žádné blikající animace
- Nenahrazovat slovo "terapie" za "ležení" nebo "sezení"

## Barevná paleta
Potvrzeno userem 2026-04-23 — přechod na "dark editorial lime" dle referenčního
prototypu (viz memory/reference_design_v0.md).

**Accent — jediná brand barva:**
- Lime: `#A0C814`
- Lime dark (hover / lime text na světlém): `#8AB210`
- Lime light: `#C5E24A`
- Lime glow (box-shadow): `rgba(160, 200, 20, 0.2)`

**Neutrály:**
- Black: `#0E0E0E` (hero, footer, dark sections)
- Charcoal: `#1A1A1A` (kontrastní dark sekce, contact form)
- White: `#FAFAF8` (hlavní světlé pozadí)
- Pure white: `#FFFFFF` (cards na světlém podkladu)
- Cream: `#F5F3EE` (alternativní světlé sekce, reviews, story)
- Text na světlém: `#1A1A1A` (primární), `#444444` (body), `#999999` (secondary)
- Text na tmavém: `rgba(255,255,255,0.8)` (body), `rgba(255,255,255,0.55)` (secondary)

**Pravidla použití:**
- Sekce se střídají dark (black/charcoal) ↔ light (white/cream) — editorial rytmus
- Lime používat RESTRIKTIVNĚ: CTA, hover, kurzívní `<em>` zvýraznění v nadpisech,
  badge/tag, ikony v kruzích, underline hover v navbar
- Plošně lime jen u CTA banneru a benefits marquee
- Žádná jiná brand barva (ne sage, ne brown akcent, ne béžová primárně)

## Typografie
- Display: **Cormorant Garamond** (600 pro nadpisy, italic 400–500 pro `<em>`)
- Body: **DM Sans** (300 / 400 / 500 / 600 / 700)
- Idiom: v H1/H2 zvýrazňovat jedno–dvě klíčová slova přes `<em>` kurzívu
  v lime barvě — např. "pro vaše *tělo i mysl*"
- Google Fonts link:
  ```
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
  ```

## Struktura navigace (v každém .html)
1. O nás → index.html
2. Human Regenerator → human-regenerator.html
3. EMS Kegel Chair → ems-kegel-chair.html
4. Masáže → masaze.html
5. Ceník / Dárkové poukazy → cenik.html
6. Kontakt → kontakt.html

V liště napravo: telefon +420 777 938 915 jako <a href="tel:+420777938915">
a ikony FB, IG, TikTok, Google Recenze.

## Kontaktní údaje (nikdy neměň)
- Šárka Becková, Refresh Studio
- Adresa: 1. máje 1536 (1. patro), 432 01 Kadaň
- Telefon: +420 777 938 915
- Email: sarka@refreshstudio.cz
- IČO: 67844910

## Hlavní claim
"Komplexní péče a regenerace pro vaše tělo i mysl"

## FAQ
Na stránkách HR a Kegel Chair je FAQ sekce s accordion rozbalováním
(vanilla JS, ne knihovna). Otázky jsou v HUMANREG.odt.

## Obrázky
- Složka images/ zatím prázdná, Šárka fotky dodá
- V HTML používej <img src="images/placeholder-xxx.jpg" alt="...">
  s popisným alt textem
- Žádné AI generované obrázky, žádná fotobanka

## Vícejazyčnost
- Čeština (výchozí), angličtina, němčina
- Každý jazyk má vlastní sadu .html souborů (en/, de/ podadresáře)

## Forma oslovení
Vykání. Vždy.

## Zdroj zadání
Kompletní brief je v souboru HUMANREG.odt ve working directory.
Při jakékoliv nejasnosti ohledně obsahu, struktury nebo textů
stránky se vrať k tomuto dokumentu. Neimprovizuj obsah.

## Známé nejasnosti v zadání (potřebují ověření se Šárkou)
- Lymfodrenáž: v textu "vymazat z webu", ale v ceníku uvedena.
  Zatím NEZOBRAZUJ na webu, ponech v ceníku jako poznámku "ověřit".
- Masážní křeslo: zadání říká "budeme/Nebudeme prezentovat".
  Zatím NEZOBRAZUJ.

## Pracovní postup
- Před jakoukoliv větší změnou přepni do plan mode (Shift+Tab 2×)
- Plán napiš v markdown, nech ho schválit, teprve pak implementuj
- Jedna sekce = jeden HTML soubor, nepokoušej se o SPA routing
- Po každém dokončeném souboru ukázat, nepokračovat automaticky na další

## Design skill
Při tvorbě UI používej frontend-design skill (je nainstalovaný).
Nedělej typický "AI generic" design (kulaté rohy, neon gradient,
stock barvy). Drž se brand palety definované výše.

## Při každé změně
- Nedělej git commit sám, to udělám já
- Vždy validuj HTML (ať prochází validátorem)
- Před změnou více souborů mi napiš plán a počkej na potvrzení
