/* ==========================================================================
   Refresh Studio Kadaň — i18n (Czech default + EN / DE / PL)
   Pattern: data-i18n="key" attributes + this dict + runtime swap.
   data-i18n          — text content
   data-i18n-html="1" — innerHTML (preserves spans, <em>, <br>, <strong>)
   data-i18n-ph       — placeholder
   data-i18n-alt      — img alt
   data-i18n-title    — title attribute
   ========================================================================== */
(function () {
  'use strict';

  /* --- Translation dictionary ----------------------------------------------
     CS = master (in HTML). Add EN/DE/PL keys below. Use html:true for entries
     containing HTML markup that must be preserved (em, strong, br, span). */
  var i18nData = {
    /* ===== NAVBAR (shared on all pages) ===== */
    'nav.about':           { en: 'About us',         de: 'Über uns',           pl: 'O nas' },
    'nav.hr':              { en: 'Human Regenerator',de: 'Human Regenerator',  pl: 'Human Regenerator' },
    'nav.kegel':           { en: 'EMS Kegel Chair',  de: 'EMS Kegel Chair',    pl: 'EMS Kegel Chair' },
    'nav.masaze':          { en: 'Massages',         de: 'Massagen',           pl: 'Masaże' },
    'nav.cenik':           { en: 'Pricing / Vouchers',de: 'Preise / Gutscheine',pl: 'Cennik / Vouchery' },
    'nav.kontakt':         { en: 'Contact',          de: 'Kontakt',            pl: 'Kontakt' },
    'nav.phone_label':     { en: 'For booking call', de: 'Buchung unter',      pl: 'Rezerwacja' },
    'nav.skip_link':       { en: 'Skip to content',  de: 'Zum Inhalt springen',pl: 'Przejdź do treści' },

    /* ===== FOOTER (shared) ===== */
    'footer.about':        { en: 'Refresh Studio in Kadaň offers comprehensive regeneration for body and mind. Modern technology and traditional methods in a pleasant environment.',
                             de: 'Refresh Studio in Kadaň bietet umfassende Regeneration für Körper und Geist. Moderne Technologie und traditionelle Methoden in angenehmer Umgebung.',
                             pl: 'Refresh Studio w Kadaniu oferuje kompleksową regenerację dla ciała i umysłu. Nowoczesne technologie i tradycyjne metody w przyjemnym otoczeniu.' },
    'footer.heading_nav':  { en: 'Navigation', de: 'Navigation', pl: 'Nawigacja' },
    'footer.heading_kontakt':{ en: 'Contact',  de: 'Kontakt',   pl: 'Kontakt' },
    'footer.copyright':    { en: '© 2026 Refresh Studio Kadaň. All rights reserved.',
                             de: '© 2026 Refresh Studio Kadaň. Alle Rechte vorbehalten.',
                             pl: '© 2026 Refresh Studio Kadaň. Wszelkie prawa zastrzeżone.' },

    /* ===== FLOATING CTA + page hero tags (shared) ===== */
    'cta_pill.objednat':   { en: 'Book now',     de: 'Jetzt buchen', pl: 'Zarezerwuj' },
    'cta_pill.zavolat':    { en: 'Call us',      de: 'Anrufen',      pl: 'Zadzwoń' },
    'a11y.back_to_top':    { en: 'Back to top',  de: 'Nach oben',    pl: 'Do góry' },
    'a11y.menu':           { en: 'Open menu',    de: 'Menü öffnen',  pl: 'Otwórz menu' },

    /* ===== HOMEPAGE (index.html) ===== */
    'idx.title':           { en: 'Refresh Studio Kadaň — Comprehensive care and regeneration for body and mind',
                             de: 'Refresh Studio Kadaň — Umfassende Pflege und Regeneration für Körper und Geist',
                             pl: 'Refresh Studio Kadaň — Kompleksowa opieka i regeneracja dla ciała i umysłu' },
    'idx.hero.tag':        { en: 'Exclusively in Kadaň',     de: 'Exklusiv in Kadaň',         pl: 'Wyłącznie w Kadaniu' },
    'idx.hero.claim':      { html: true,
                             en: 'Comprehensive care and regeneration<br>for your <em>body and mind</em>',
                             de: 'Umfassende Pflege und Regeneration<br>für <em>Körper und Geist</em>',
                             pl: 'Kompleksowa opieka i regeneracja<br>dla Twojego <em>ciała i umysłu</em>' },
    'idx.hero.text':       { en: 'Back pain, fatigue or low energy? With us you find space for true renewal. The combination of cutting-edge technology and traditional methods supports cellular regeneration and overall well-being.',
                             de: 'Rückenschmerzen, Müdigkeit oder Energiemangel? Bei uns finden Sie Raum für echte Erneuerung. Die Kombination aus Spitzentechnologie und traditionellen Verfahren unterstützt die Zellregeneration und das allgemeine Wohlbefinden.',
                             pl: 'Bóle pleców, zmęczenie lub brak energii? U nas znajdziesz przestrzeń na prawdziwą odnowę. Połączenie nowoczesnych technologii i tradycyjnych metod wspiera regenerację komórkową i ogólne samopoczucie.' },
    'idx.hero.cta':        { en: 'Book a session', de: 'Termin buchen', pl: 'Zarezerwuj' },
    'idx.hero.or_call':    { html: true,
                             en: 'or call <a href="tel:+420777938915">+420&nbsp;777&nbsp;938&nbsp;915</a>',
                             de: 'oder rufen Sie <a href="tel:+420777938915">+420&nbsp;777&nbsp;938&nbsp;915</a>',
                             pl: 'lub zadzwoń <a href="tel:+420777938915">+420&nbsp;777&nbsp;938&nbsp;915</a>' },
    'idx.hero.play':       { en: 'Play video', de: 'Video abspielen', pl: 'Odtwórz wideo' },

    /* Stats bar */
    'idx.stats.l1':        { html: true, en: 'Only device<br>in the Ústí region', de: 'Einziges Gerät<br>in der Region Ústí', pl: 'Jedyne urządzenie<br>w regionie Ústí' },
    'idx.stats.l2':        { html: true, en: 'Years of Šárka\'s<br>massage experience', de: 'Jahre Massage-<br>erfahrung von Šárka', pl: 'Lat doświadczenia<br>masażystki Šárki' },
    'idx.stats.l3':        { html: true, en: 'Minutes per<br>single session', de: 'Minuten pro<br>Sitzung', pl: 'Minut na<br>jedną sesję' },
    'idx.stats.l4':        { html: true, en: 'Main therapies<br>at our studio', de: 'Hauptbehandlungen<br>in unserem Studio', pl: 'Główne terapie<br>w naszym studio' },

    /* Services section */
    'idx.svc.label':       { en: 'Our therapies', de: 'Unsere Behandlungen', pl: 'Nasze terapie' },
    'idx.svc.h2':          { html: true,
                             en: 'Choose the procedure that will<br>restore your <em>energy and vitality</em>',
                             de: 'Wählen Sie die Behandlung, die Ihnen<br><em>Energie und Vitalität</em> zurückgibt',
                             pl: 'Wybierz zabieg, który przywróci<br>Ci <em>energię i witalność</em>' },
    'idx.svc.intro':       { en: 'A combination of modern technologies and proven methods for your regeneration.',
                             de: 'Eine Kombination aus modernen Technologien und bewährten Methoden für Ihre Regeneration.',
                             pl: 'Połączenie nowoczesnych technologii i sprawdzonych metod dla Twojej regeneracji.' },
    'idx.svc.hr.text':     { en: 'A revolutionary technology using cold atmospheric plasma (CAP+), anions and an electrostatic field for cellular regeneration. The only device in the Ústí region.',
                             de: 'Eine revolutionäre Technologie mit kaltem atmosphärischem Plasma (CAP+), Anionen und einem elektrostatischen Feld für die Zellregeneration. Das einzige Gerät in der Region Ústí.',
                             pl: 'Rewolucyjna technologia wykorzystująca zimną plazmę atmosferyczną (CAP+), aniony i pole elektrostatyczne do regeneracji komórkowej. Jedyne urządzenie w regionie Ústí.' },
    'idx.svc.mas.text':    { en: 'Classic and special massage techniques for releasing tension, relieving pain and overall body regeneration. Care in the hands of Šárka Becková with nearly 20 years of experience.',
                             de: 'Klassische und spezielle Massagetechniken zur Lösung von Verspannungen, Schmerzlinderung und ganzheitlicher Körperregeneration. Behandlung durch Šárka Becková mit fast 20 Jahren Erfahrung.',
                             pl: 'Klasyczne i specjalne techniki masażu do rozluźnienia napięcia, łagodzenia bólu i kompleksowej regeneracji ciała. Pielęgnacja w rękach Šárki Beckovej z prawie 20-letnim doświadczeniem.' },
    'idx.svc.kegel.text':  { en: 'Try intensive pelvic floor strengthening with EMS Kegel Chair – much more effective than classic Kegel exercises. Experience up to 11,000 contractions in a single session and relieve incontinence or weakened pelvic floor.',
                             de: 'Erleben Sie intensive Beckenbodentraining mit dem EMS Kegel Chair – viel wirksamer als klassische Kegel-Übungen. Bis zu 11.000 Kontraktionen während einer einzigen Behandlung – bei Inkontinenz oder geschwächtem Beckenboden.',
                             pl: 'Wypróbuj intensywne wzmacnianie mięśni dna miednicy z EMS Kegel Chair – znacznie skuteczniejsze niż klasyczne ćwiczenia Kegla. Aż do 11 000 skurczów podczas jednej sesji – ulga przy nietrzymaniu moczu lub osłabionym dnie miednicy.' },
    'idx.svc.more':        { en: 'More information',     de: 'Mehr Informationen',  pl: 'Więcej informacji' },
    'idx.svc.cta':         { en: 'Book a session',       de: 'Termin buchen',       pl: 'Zarezerwuj' },

    /* HR Spotlight on homepage */
    'idx.hr.badge':        { en: 'Only in Ústí region', de: 'Einziges in der Region Ústí', pl: 'Jedyny w regionie Ústí' },
    'idx.hr.h2':           { html: true,
                             en: 'Recharge your body<br>with the <em>Human Regenerator</em>',
                             de: 'Laden Sie Ihren Körper auf<br>mit dem <em>Human Regenerator</em>',
                             pl: 'Naładuj swoje ciało energią<br>z <em>Human Regeneratorem</em>' },
    'idx.hr.p1':           { en: 'Discover a revolutionary technology that supports body regeneration at the cellular level. Human Regenerator uses cold atmospheric plasma (CAP+), anions and a gentle electrostatic field.',
                             de: 'Entdecken Sie eine revolutionäre Technologie, die die Körperregeneration auf zellulärer Ebene unterstützt. Human Regenerator nutzt kaltes atmosphärisches Plasma (CAP+), Anionen und ein sanftes elektrostatisches Feld.',
                             pl: 'Odkryj rewolucyjną technologię wspierającą regenerację ciała na poziomie komórkowym. Human Regenerator wykorzystuje zimną plazmę atmosferyczną (CAP+), aniony i delikatne pole elektrostatyczne.' },
    'idx.hr.p2':           { en: 'It helps with fatigue, inflammation, pain, stress and chronic problems. Experience more energy, deeper sleep, faster healing and a feeling of lightness right after the first sessions.',
                             de: 'Es hilft bei Müdigkeit, Entzündungen, Schmerzen, Stress und chronischen Beschwerden. Erleben Sie mehr Energie, tieferen Schlaf, schnellere Heilung und ein Gefühl der Leichtigkeit bereits nach den ersten Anwendungen.',
                             pl: 'Pomaga przy zmęczeniu, stanach zapalnych, bólach, stresie i przewlekłych problemach. Poczuj więcej energii, głębszy sen, szybsze gojenie i poczucie lekkości już po pierwszych sesjach.' },
    'idx.hr.li1':          { en: 'More energy',         de: 'Mehr Energie',         pl: 'Więcej energii' },
    'idx.hr.li2':          { en: 'Deeper sleep',        de: 'Tieferer Schlaf',      pl: 'Głębszy sen' },
    'idx.hr.li3':          { en: 'Faster healing',      de: 'Schnellere Heilung',   pl: 'Szybsze gojenie' },
    'idx.hr.li4':          { en: 'Pain relief',         de: 'Schmerzlinderung',     pl: 'Łagodzenie bólu' },
    'idx.hr.li5':          { en: 'Stress reduction',    de: 'Stressreduktion',      pl: 'Redukcja stresu' },
    'idx.hr.li6':          { en: 'Feeling of lightness',de: 'Gefühl der Leichtigkeit',pl: 'Poczucie lekkości' },
    'idx.hr.highlight':    { en: 'Step into a new level of vitality — your body deserves it.',
                             de: 'Treten Sie in eine neue Ebene der Vitalität ein — Ihr Körper hat es verdient.',
                             pl: 'Wejdź na nowy poziom witalności — Twoje ciało na to zasługuje.' },
    'idx.hr.cta':          { en: 'Learn more about HR therapy', de: 'Mehr zur HR-Therapie', pl: 'Więcej o terapii HR' },

    /* Marquee items (shared with HR page) */
    'mq.bunecna':          { en: 'Cellular regeneration', de: 'Zellregeneration',     pl: 'Regeneracja komórkowa' },
    'mq.energie':          { en: 'More energy',           de: 'Mehr Energie',         pl: 'Więcej energii' },
    'mq.spanek':           { en: 'Deeper sleep',          de: 'Tieferer Schlaf',      pl: 'Głębszy sen' },
    'mq.bolest':           { en: 'Pain relief',           de: 'Schmerzlinderung',     pl: 'Łagodzenie bólu' },
    'mq.stres':            { en: 'Stress reduction',      de: 'Stressreduktion',      pl: 'Redukcja stresu' },
    'mq.lehkost':          { en: 'Feeling of lightness',  de: 'Gefühl der Leichtigkeit',pl: 'Poczucie lekkości' },
    'mq.omlazeni':         { en: 'Rejuvenation',          de: 'Verjüngung',           pl: 'Odmłodzenie' },
    'mq.hojeni':           { en: 'Faster healing',        de: 'Schnellere Heilung',   pl: 'Szybsze gojenie' },

    /* HR explainer videos section */
    'idx.vid.label':       { en: 'Take a look',                de: 'Sehen Sie selbst',         pl: 'Zobacz' },
    'idx.vid.h2':          { html: true,
                             en: 'How Human Regenerator <em>works</em>',
                             de: 'So <em>funktioniert</em> der Human Regenerator',
                             pl: 'Jak <em>działa</em> Human Regenerator' },
    'idx.vid.subtitle':    { en: 'Short videos directly from the manufacturer — what Human Regenerator is and how it supports regeneration at the cellular level.',
                             de: 'Kurzvideos direkt vom Hersteller — was Human Regenerator ist und wie er die Regeneration auf zellulärer Ebene unterstützt.',
                             pl: 'Krótkie filmy bezpośrednio od producenta — czym jest Human Regenerator i jak wspiera regenerację na poziomie komórkowym.' },

    /* Story (Šárka medailonek) */
    'idx.story.label':     { en: 'Our story', de: 'Unsere Geschichte', pl: 'Nasza historia' },
    'idx.story.h2':        { en: 'Šárka Becková', de: 'Šárka Becková', pl: 'Šárka Becková' },
    'idx.story.p1':        { en: 'My name is Šárka Becková and I am the owner of Refresh Studio in Kadaň. I came across the Human Regenerator at a time when I had been suffering from severe leg pain for two years and doctors didn\'t know what to do.',
                             de: 'Mein Name ist Šárka Becková und ich bin Inhaberin des Refresh Studios in Kadaň. Auf den Human Regenerator stieß ich, als ich seit zwei Jahren unter starken Beinschmerzen litt und die Ärzte nicht weiterhalfen.',
                             pl: 'Nazywam się Šárka Becková i jestem właścicielką Refresh Studio w Kadaniu. Z Human Regeneratorem zetknęłam się w momencie, gdy od dwóch lat dręczył mnie silny ból nogi, a lekarze nie potrafili sobie z nim poradzić.' },
    'idx.story.p2':        { en: 'At first I was very skeptical, but after several sessions an unexpected breakthrough came — the pain subsided and for the first time I felt really good.',
                             de: 'Zunächst war ich sehr skeptisch, doch nach mehreren Sitzungen kam ein unerwarteter Durchbruch — die Schmerzen verschwanden und ich fühlte mich zum ersten Mal richtig gut.',
                             pl: 'Z początku byłam bardzo sceptyczna, ale po kilku terapiach nastąpił nieoczekiwany przełom — ból ustąpił, a ja poczułam się naprawdę dobrze po raz pierwszy.' },
    'idx.story.p3':        { en: 'Today I go to the therapy once a week, I have more energy, I am calmer mentally and the pain is gone. This experience led me to the decision to acquire Human Regenerator for the studio and offer the same help to others.',
                             de: 'Heute gehe ich einmal wöchentlich zur Therapie, ich habe mehr Energie, bin psychisch ruhiger und die Schmerzen sind weg. Diese Erfahrung führte mich zu der Entscheidung, den Human Regenerator ins Studio zu holen und anderen die gleiche Hilfe anzubieten.',
                             pl: 'Dziś chodzę na terapię raz w tygodniu, mam więcej energii, jestem psychicznie spokojniejsza, a ból jest niczym. To doświadczenie skłoniło mnie do zakupu Human Regeneratora do studio i oferowania tej samej pomocy innym.' },
    'idx.story.p4':        { en: 'As a masseuse with nearly 20 years of practice, I see people every day who are tormented by physical and psychological pain. I am convinced that Human Regenerator can significantly relieve many of them — it is not a cure for everything, but it can be a great support on the path to recovery.',
                             de: 'Als Masseurin mit fast 20 Jahren Erfahrung sehe ich täglich Menschen, die unter körperlichen und seelischen Schmerzen leiden. Ich bin überzeugt, dass Human Regenerator vielen von ihnen deutlich helfen kann — er ist kein Allheilmittel, aber eine große Stütze auf dem Weg zur Heilung.',
                             pl: 'Jako masażystka z niemal 20-letnim stażem codziennie widzę osoby zmagające się z bólem fizycznym i psychicznym. Jestem przekonana, że Human Regenerator może wielu z nich znacząco pomóc — nie jest lekiem na wszystko, ale może być wielkim wsparciem na drodze do uzdrowienia.' },
    'idx.story.signature': { en: 'Šárka Becková — owner of Refresh Studio',
                             de: 'Šárka Becková — Inhaberin des Refresh Studios',
                             pl: 'Šárka Becková — właścicielka Refresh Studio' },

    /* Reviews section */
    'idx.rev.label':       { en: 'Reviews',     de: 'Bewertungen', pl: 'Opinie' },
    'idx.rev.h2':          { html: true,
                             en: 'What our <em>clients</em> say',
                             de: 'Was unsere <em>Kundinnen</em> sagen',
                             pl: 'Co mówią nasi <em>klienci</em>' },
    'idx.rev.intro':       { en: 'Real reviews from clients who have completed therapy with us.',
                             de: 'Echte Bewertungen von Kunden, die bei uns eine Therapie absolviert haben.',
                             pl: 'Prawdziwe opinie od klientów, którzy odbyli u nas terapię.' },
    'idx.rev.r1':          { en: 'After the first session I immediately felt a huge shift, so I started coming regularly.',
                             de: 'Nach der ersten Sitzung spürte ich sofort eine enorme Veränderung und begann regelmäßig zu kommen.',
                             pl: 'Po pierwszej sesji od razu poczułam ogromną poprawę i zaczęłam przychodzić regularnie.' },
    'idx.rev.r2':          { en: 'My wife noticed that my anxieties began to recede and my overall health improved.',
                             de: 'Meine Frau bemerkte, dass meine Ängste nachließen und sich mein allgemeiner Gesundheitszustand verbesserte.',
                             pl: 'Żona zauważyła, że moje lęki zaczęły ustępować, a ogólny stan zdrowia poprawił się.' },
    'idx.rev.r3':          { en: 'After about the fifth session I found that my back pain began to subside… I was able to sit without problems.',
                             de: 'Nach etwa der fünften Sitzung stellte ich fest, dass meine Rückenschmerzen nachließen… ich konnte problemlos sitzen.',
                             pl: 'Po około piątej sesji zauważyłam, że bóle pleców zaczęły ustępować… siedziałam bez problemów.' },
    'idx.rev.r1_age':      { en: 'Amálie Kratochvílová, 18',  de: 'Amálie Kratochvílová, 18',  pl: 'Amálie Kratochvílová, 18' },
    'idx.rev.r2_age':      { en: 'Lukáš Hubínek, 42',         de: 'Lukáš Hubínek, 42',          pl: 'Lukáš Hubínek, 42' },
    'idx.rev.r3_age':      { en: 'Kateřina Sýkorová, 33',     de: 'Kateřina Sýkorová, 33',      pl: 'Kateřina Sýkorová, 33' },

    /* Green CTA banner */
    'idx.cta.h2':          { en: 'Ready for regeneration?', de: 'Bereit für Regeneration?', pl: 'Gotowy na regenerację?' },
    'idx.cta.p':           { en: 'Book today and feel the difference for yourself.',
                             de: 'Buchen Sie heute und spüren Sie selbst den Unterschied.',
                             pl: 'Zarezerwuj już dziś i poczuj różnicę na własnej skórze.' },
    'idx.cta.btn':         { en: 'Book now',     de: 'Jetzt buchen', pl: 'Zarezerwuj teraz' },

    /* ===== HR PAGE (human-regenerator.html) ===== */
    'hr.title':            { en: 'Human Regenerator — Refresh Studio Kadaň',
                             de: 'Human Regenerator — Refresh Studio Kadaň',
                             pl: 'Human Regenerator — Refresh Studio Kadaň' },
    'hr.hero.tag':         { en: 'Our flagship therapy', de: 'Unsere Haupttherapie', pl: 'Nasza główna terapia' },
    'hr.hero.h1':          { html: true,
                             en: 'Human <em>Regenerator</em>',
                             de: 'Human <em>Regenerator</em>',
                             pl: 'Human <em>Regenerator</em>' },
    'hr.hero.sub':         { en: 'The only device in the entire Ústí region — exclusively in Kadaň.',
                             de: 'Das einzige Gerät in der gesamten Region Ústí — exklusiv in Kadaň.',
                             pl: 'Jedyne urządzenie w całym regionie Ústí — wyłącznie w Kadaniu.' },

    'hr.intro.badge':      { en: 'Exclusively in Kadaň', de: 'Exklusiv in Kadaň',  pl: 'Wyłącznie w Kadaniu' },
    'hr.intro.h2':         { html: true,
                             en: 'Recharge your body with the <em>Human Regenerator</em>',
                             de: 'Laden Sie Ihren Körper auf mit dem <em>Human Regenerator</em>',
                             pl: 'Naładuj swoje ciało energią z <em>Human Regeneratorem</em>' },
    'hr.intro.p1':         { en: 'Human Regenerator represents a revolution in wellness technologies. It uses modern scientific principles, cold atmospheric plasma technology (CAP+), anions and a gentle electrostatic field that supports the regeneration of the organism at the deepest possible level — at the cellular level.',
                             de: 'Der Human Regenerator stellt eine Revolution in den Wellness-Technologien dar. Er nutzt moderne wissenschaftliche Prinzipien, die Technologie des kalten atmosphärischen Plasmas (CAP+), Anionen und ein sanftes elektrostatisches Feld, die die Regeneration des Organismus auf der tiefstmöglichen Ebene — auf zellulärer Ebene — unterstützen.',
                             pl: 'Human Regenerator stanowi rewolucję w technologiach wellness. Wykorzystuje nowoczesne zasady naukowe, technologię zimnej plazmy atmosferycznej (CAP+), aniony i delikatne pole elektrostatyczne, wspierające regenerację organizmu na najgłębszym możliwym poziomie — na poziomie komórkowym.' },
    'hr.intro.p2':         { en: 'This technology was developed based on years of research in cellular revitalization and neuro-regeneration. The result is a unique method that helps where conventional procedures often fall short.',
                             de: 'Diese Technologie entstand auf Grundlage jahrelanger Forschung im Bereich der Zellrevitalisierung und Neuroregeneration. Das Ergebnis ist eine einzigartige Methode, die hilft, wo herkömmliche Verfahren oft nicht ausreichen.',
                             pl: 'Ta technologia powstała na bazie wieloletnich badań w dziedzinie rewitalizacji komórkowej i neuroregeneracji. Rezultatem jest unikalna metoda, która pomaga tam, gdzie konwencjonalne procedury często zawodzą.' },

    /* HR Benefits grid */
    'hr.ben.label':        { en: 'Benefits',       de: 'Vorteile',         pl: 'Korzyści' },
    'hr.ben.h2':           { html: true,
                             en: 'What Human Regenerator <em>can do</em>?',
                             de: 'Was <em>kann</em> der Human Regenerator?',
                             pl: 'Co <em>potrafi</em> Human Regenerator?' },
    'hr.ben.b1.h':         { en: 'Relieves inflammation and pain', de: 'Lindert Entzündungen und Schmerzen', pl: 'Łagodzi stany zapalne i bóle' },
    'hr.ben.b1.p':         { en: 'A specific type of cold atmospheric plasma supports the healing of inflammation, tissues, ligaments and minor injuries. Ideal for athletes, chronic back, joint and muscle pain.',
                             de: 'Eine bestimmte Art von kaltem atmosphärischem Plasma unterstützt die Heilung von Entzündungen, Geweben, Bändern und kleineren Verletzungen. Ideal für Sportler, chronische Rücken-, Gelenk- und Muskelschmerzen.',
                             pl: 'Określony rodzaj zimnej plazmy atmosferycznej wspiera gojenie stanów zapalnych, tkanek, więzadeł i drobnych urazów. Idealne dla sportowców, przewlekłych bólów pleców, stawów, mięśni.' },
    'hr.ben.b2.h':         { en: 'Boosts energy and vitality', de: 'Steigert Energie und Vitalität', pl: 'Zwiększa energię i witalność' },
    'hr.ben.b2.p':         { en: 'The body literally "recharges" like a battery — the influx of electrons neutralizes free radicals, reduces oxidative stress and improves cell function.',
                             de: 'Der Körper "lädt sich auf" wie eine Batterie — der Elektronenfluss neutralisiert freie Radikale, reduziert oxidativen Stress und verbessert die Zellfunktion.',
                             pl: 'Ciało dosłownie „ładuje się" jak bateria — napływ elektronów neutralizuje wolne rodniki, zmniejsza stres oksydacyjny i poprawia funkcjonowanie komórek.' },
    'hr.ben.b3.h':         { en: 'Improves sleep quality and reduces stress', de: 'Verbessert die Schlafqualität und reduziert Stress', pl: 'Poprawia jakość snu i obniża stres' },
    'hr.ben.b3.p':         { en: 'Clients describe a calmer mind, easier falling asleep, deeper sleep and overall calming of the nervous system.',
                             de: 'Kunden beschreiben einen ruhigeren Geist, leichteres Einschlafen, tieferen Schlaf und eine allgemeine Beruhigung des Nervensystems.',
                             pl: 'Klienci opisują spokojniejszy umysł, łatwiejsze zasypianie, głębszy sen i ogólne uspokojenie układu nerwowego.' },
    'hr.ben.b4.h':         { en: 'Supports the brain and cognitive functions', de: 'Unterstützt Gehirn und kognitive Funktionen', pl: 'Wspiera mózg i funkcje poznawcze' },
    'hr.ben.b4.p':         { en: 'CAP+ technology supports neuro-regeneration, better concentration, cognitive functions and helps even with neurodegenerative conditions including Alzheimer\'s disease (supplementary support).',
                             de: 'Die CAP+-Technologie unterstützt Neuroregeneration, bessere Konzentration, kognitive Funktionen und hilft auch bei neurodegenerativen Erkrankungen einschließlich Alzheimer (ergänzende Unterstützung).',
                             pl: 'Technologia CAP+ wspiera neuroregenerację, lepszą koncentrację, funkcje poznawcze i pomaga także w stanach neurodegeneracyjnych, w tym chorobie Alzheimera (wsparcie uzupełniające).' },
    'hr.ben.b5.h':         { en: 'Strengthens the immune system', de: 'Stärkt das Immunsystem', pl: 'Wzmacnia układ odpornościowy' },
    'hr.ben.b5.p':         { en: 'Helps the body fight viruses and bacteria, supports faster recovery after illness or stress.',
                             de: 'Hilft dem Körper, Viren und Bakterien zu bekämpfen, unterstützt eine schnellere Erholung nach Krankheit oder Belastung.',
                             pl: 'Pomaga organizmowi zwalczać wirusy i bakterie, wspiera szybszy powrót do formy po chorobie lub przeciążeniu.' },
    'hr.ben.b6.h':         { en: 'Slows aging', de: 'Verlangsamt die Alterung', pl: 'Spowalnia starzenie' },
    'hr.ben.b6.p':         { en: 'By neutralizing free radicals, oxidative stress — the main cause of cell aging — is significantly reduced. When the body doesn\'t oxidize, it doesn\'t age.',
                             de: 'Durch die Neutralisierung freier Radikale wird der oxidative Stress — die Hauptursache der Zellalterung — deutlich reduziert. Wenn der Körper nicht oxidiert, altert er nicht.',
                             pl: 'Neutralizacja wolnych rodników skutkuje znacznym obniżeniem stresu oksydacyjnego — głównej przyczyny starzenia się komórek. Gdy organizm nie utlenia się, nie starzeje się.' },
    'hr.ben.b7.h':         { en: 'Speeds up post-sport recovery', de: 'Beschleunigt die Erholung nach dem Sport', pl: 'Przyspiesza regenerację po sporcie' },
    'hr.ben.b7.p':         { en: 'Athletes report faster convalescence, pain reduction and better performance.',
                             de: 'Sportler berichten von schnellerer Erholung, Schmerzlinderung und besserer Leistung.',
                             pl: 'Sportowcy odnotowują szybszą rekonwalescencję, ustępowanie bólów i lepszą wydolność.' },

    /* HR How it works */
    'hr.how.label':        { en: 'How it works',       de: 'So funktioniert es',  pl: 'Jak to działa' },
    'hr.how.h2':           { html: true,
                             en: 'How Human Regenerator <em>works</em>?',
                             de: 'Wie <em>funktioniert</em> der Human Regenerator?',
                             pl: 'Jak <em>działa</em> Human Regenerator?' },
    'hr.how.intro':        { en: 'The whole process begins with a gentle electrostatic field that surrounds the client and starts transferring energy into the body.',
                             de: 'Der ganze Prozess beginnt mit einem sanften elektrostatischen Feld, das den Klienten umgibt und Energie in den Körper überträgt.',
                             pl: 'Cały proces zaczyna się od delikatnego pola elektrostatycznego, które otacza klienta i zaczyna przekazywać energię do ciała.' },
    'hr.how.s1':           { en: 'The device generates anions and electrons that activate regenerative processes',
                             de: 'Das Gerät erzeugt Anionen und Elektronen, die regenerative Prozesse aktivieren',
                             pl: 'Urządzenie generuje aniony i elektrony, które aktywują procesy regeneracyjne' },
    'hr.how.s2':           { en: 'Energy penetrates the entire body even through clothing',
                             de: 'Die Energie dringt durch die Kleidung in den ganzen Körper ein',
                             pl: 'Energia przenika przez całe ciało, nawet przez ubranie' },
    'hr.how.s3':           { en: 'CAP+ technology ensures even and deep distribution of energy',
                             de: 'Die CAP+-Technologie sorgt für eine gleichmäßige und tiefe Energieverteilung',
                             pl: 'Technologia CAP+ zapewnia równomierną i głęboką dystrybucję energii' },
    'hr.how.s4':           { en: 'The body "takes" exactly what it needs',
                             de: 'Der Körper "nimmt sich" genau das, was er braucht',
                             pl: 'Ciało „bierze" dokładnie to, czego potrzebuje' },
    'hr.how.feels':        { html: true,
                             en: '<strong>The client feels during the session:</strong>',
                             de: '<strong>Während der Sitzung spürt der Klient:</strong>',
                             pl: '<strong>Klient podczas terapii czuje:</strong>' },
    'hr.how.f1':           { en: 'Gentle tingling',         de: 'Sanftes Kribbeln',         pl: 'Delikatne mrowienie' },
    'hr.how.f2':           { en: 'Light tingling',          de: 'Leichtes Prickeln',         pl: 'Lekkie mrowienie' },
    'hr.how.f3':           { en: 'A pleasant "ozone breeze"',de: 'Eine angenehme "Ozon-Brise"',pl: 'Przyjemny „ozonowy powiew"' },
    'hr.how.f4':           { en: 'Most people enter a meditative or sleeping state',
                             de: 'Die meisten Menschen geraten in einen meditativen oder Schlafzustand',
                             pl: 'Większość osób wchodzi w stan medytacyjny lub senny' },

    /* HR Results */
    'hr.res.label':        { en: 'Results',           de: 'Ergebnisse',         pl: 'Rezultaty' },
    'hr.res.h2':           { html: true,
                             en: 'What results do clients <em>most often</em> describe?',
                             de: 'Welche Ergebnisse beschreiben Klienten <em>am häufigsten</em>?',
                             pl: 'Jakie rezultaty klienci <em>najczęściej</em> opisują?' },
    'hr.res.col1.h':       { en: 'Right after the first sessions:', de: 'Direkt nach den ersten Anwendungen:', pl: 'Już po pierwszych sesjach:' },
    'hr.res.col1.l1':      { en: 'More energy',                    de: 'Mehr Energie',                       pl: 'Więcej energii' },
    'hr.res.col1.l2':      { en: 'Tangible reduction of pain and inflammation',
                             de: 'Spürbare Reduktion von Schmerzen und Entzündungen',
                             pl: 'Wyczuwalne zmniejszenie bólu i stanów zapalnych' },
    'hr.res.col1.l3':      { en: 'Calmer mind, better mood',       de: 'Ruhigerer Geist, bessere Stimmung',  pl: 'Spokojniejszy umysł, lepszy nastrój' },
    'hr.res.col1.l4':      { en: 'Much better quality sleep',      de: 'Deutlich bessere Schlafqualität',    pl: 'Znacznie lepsza jakość snu' },
    'hr.res.col1.l5':      { en: 'Faster healing and regeneration',de: 'Schnellere Heilung und Regeneration',pl: 'Szybsze gojenie i regeneracja' },
    'hr.res.col2.h':       { en: 'After just a few visits:',       de: 'Schon nach wenigen Besuchen:',       pl: 'Już po kilku wizytach:' },
    'hr.res.col2.l1':      { en: 'Better physical performance',    de: 'Bessere körperliche Leistung',       pl: 'Lepsza wydolność fizyczna' },
    'hr.res.col2.l2':      { en: 'Faster convalescence',           de: 'Schnellere Rekonvaleszenz',          pl: 'Szybsza rekonwalescencja' },
    'hr.res.col2.l3':      { en: 'Reduction of fatigue',           de: 'Rückgang der Müdigkeit',             pl: 'Ustąpienie zmęczenia' },
    'hr.res.col2.l4':      { en: 'Overall lightness and a feeling of "restart"',
                             de: 'Gesamte Leichtigkeit und ein Gefühl des "Neustarts"',
                             pl: 'Ogólna lekkość i poczucie „restartu"' },
    'hr.res.col2.l5':      { en: 'Significant improvement in vitality, immunity and mental state',
                             de: 'Deutliche Verbesserung von Vitalität, Immunität und psychischem Zustand',
                             pl: 'Znacząca poprawa witalności, odporności i stanu psychicznego' },
    'hr.res.cta':          { en: 'Book a session', de: 'Termin buchen', pl: 'Zarezerwuj' },

    /* HR Photo gallery */
    'hr.gal.label':        { en: 'Our studio',                de: 'Unser Studio',                pl: 'Nasze studio' },
    'hr.gal.h2':           { html: true,
                             en: 'A look inside <em>Refresh Studio</em>',
                             de: 'Ein Blick ins <em>Refresh Studio</em>',
                             pl: 'Spojrzenie do <em>Refresh Studio</em>' },

    /* HR Video reviews */
    'hr.vid.label':        { en: 'Video reviews',         de: 'Video-Bewertungen',         pl: 'Recenzje wideo' },
    'hr.vid.h2':           { html: true,
                             en: 'What our <em>clients</em> say',
                             de: 'Was unsere <em>Kunden</em> sagen',
                             pl: 'Co mówią nasi <em>klienci</em>' },

    /* HR FAQ */
    'hr.faq.label':        { en: 'FAQ',                de: 'Häufige Fragen',     pl: 'Najczęstsze pytania' },
    'hr.faq.h2':           { html: true,
                             en: 'What clients ask <em>most often</em>',
                             de: 'Was Kunden <em>am häufigsten</em> fragen',
                             pl: 'O co klienci <em>najczęściej</em> pytają' },
    'hr.faq.q1':           { en: 'Who is Human Regenerator suitable for?', de: 'Für wen ist der Human Regenerator geeignet?', pl: 'Dla kogo jest Human Regenerator?' },
    'hr.faq.q1.a1':        { en: 'Human Regenerator is suitable for women, men and children of all ages. The therapy is non-invasive and completely passive — you just need to lie down quietly for 30 minutes. It is intended for the overall regeneration of the organism on a physical and mental level, for improving physical condition, vitality and sleep quality. It is also suitable as supportive therapy for clients with burnout syndrome, long-term stress, anxiety or psychological exhaustion. It also helps with chronic pain, after injuries and operations, to alleviate inflammation, reduce oxidative stress and support immunity.',
                             de: 'Der Human Regenerator eignet sich für Frauen, Männer und Kinder aller Altersgruppen. Die Therapie ist nicht-invasiv und völlig passiv — Sie müssen sich nur 30 Minuten ruhig hinlegen. Sie ist für die ganzheitliche Regeneration des Organismus auf körperlicher und geistiger Ebene konzipiert, zur Verbesserung der körperlichen Verfassung, Vitalität und Schlafqualität. Geeignet auch als unterstützende Therapie bei Burnout, langfristigem Stress, Angstzuständen oder psychischer Erschöpfung. Hilft auch bei chronischen Schmerzen, nach Verletzungen und Operationen, zur Linderung von Entzündungen, zur Reduktion oxidativen Stresses und zur Unterstützung der Immunität.',
                             pl: 'Human Regenerator jest odpowiedni dla kobiet, mężczyzn i dzieci w każdym wieku. Terapia jest nieinwazyjna i całkowicie pasywna — wystarczy spokojnie poleżeć przez 30 minut. Przeznaczony jest do kompleksowej regeneracji organizmu na poziomie fizycznym i psychicznym, do poprawy kondycji fizycznej, witalności i jakości snu. Również jako terapia wspomagająca dla osób z syndromem wypalenia, przewlekłym stresem, lękami lub wyczerpaniem psychicznym. Pomaga także przy chronicznych bólach, po urazach i operacjach, w łagodzeniu stanów zapalnych, obniżaniu stresu oksydacyjnego i wspieraniu odporności.' },
    'hr.faq.q1.a2':        { en: 'It also helps people with long-term consequences of COVID. It can also be used as an accompanying and supportive method for seniors, in Alzheimer\'s disease, Parkinson\'s disease and senile dementia — always as a complement to medical care, which it does not replace.',
                             de: 'Hilft auch Menschen mit Langzeitfolgen nach COVID. Kann auch als begleitende und unterstützende Methode bei Senioren, bei Alzheimer-, Parkinson-Krankheit und seniler Demenz eingesetzt werden — immer als Ergänzung zur ärztlichen Behandlung, die er nicht ersetzt.',
                             pl: 'Pomaga również osobom z długoterminowymi skutkami COVID. Może być używany jako metoda towarzysząca i wspierająca u seniorów, przy chorobie Alzheimera, Parkinsona i otępieniu starczym — zawsze jako uzupełnienie opieki lekarskiej, której nie zastępuje.' },
    'hr.faq.q2':           { en: 'How does Human Regenerator work?', de: 'Wie funktioniert der Human Regenerator?', pl: 'Jak działa Human Regenerator?' },
    'hr.faq.q2.a':         { en: 'The device creates an electrostatic field that surrounds the user and transfers anions and electrons directly into the cells. This process stimulates cell regeneration, accelerates the healing of wounds and inflammation, supports detoxification and helps neutralize free radicals. This leads to improved overall health and vitality.',
                             de: 'Das Gerät erzeugt ein elektrostatisches Feld, das den Benutzer umgibt und Anionen und Elektronen direkt in die Zellen überträgt. Dieser Prozess stimuliert die Zellregeneration, beschleunigt die Wundheilung und Entzündungsheilung, unterstützt die Entgiftung und hilft bei der Neutralisierung freier Radikale. Dies führt zu einer Verbesserung der allgemeinen Gesundheit und Vitalität.',
                             pl: 'Urządzenie tworzy pole elektrostatyczne, które otacza użytkownika i przekazuje aniony i elektrony bezpośrednio do komórek. Proces ten stymuluje regenerację komórek, przyspiesza gojenie ran i stanów zapalnych, wspiera detoksykację i pomaga neutralizować wolne rodniki. Prowadzi to do poprawy ogólnego stanu zdrowia i witalności.' },
    'hr.faq.q3':           { en: 'Does it really work? Are there studies?', de: 'Funktioniert es wirklich? Gibt es Studien?', pl: 'Czy to naprawdę działa? Czy istnieją badania?' },
    'hr.faq.q3.a':         { en: 'Yes, it really works. The German company System 4 Technologies GmbH introduced the world\'s first Human Regenerators more than ten years ago in Abu Dhabi, causing a revolution in the fight against aging and degeneration. There are a number of clinical studies that clearly confirm the functionality and benefits of Human Regenerator therapy.',
                             de: 'Ja, es funktioniert wirklich. Die deutsche Firma System 4 Technologies GmbH stellte den weltweit ersten Human Regenerator vor mehr als zehn Jahren in Abu Dhabi vor und sorgte damit für eine Revolution im Kampf gegen Alterung und Degeneration. Es gibt eine Reihe klinischer Studien, die die Funktionsweise und den Nutzen der Human Regenerator-Therapie eindeutig belegen.',
                             pl: 'Tak, naprawdę działa. Niemiecka firma System 4 Technologies GmbH ponad dziesięć lat temu w Abu Zabi przedstawiła światu pierwsze Human Regeneratory, co wywołało rewolucję w walce ze starzeniem i degeneracją. Istnieje cały szereg badań klinicznych, które jednoznacznie potwierdzają funkcjonalność i korzyści terapii Human Regenerator.' },
    'hr.faq.q4':           { en: 'Is using Human Regenerator safe?', de: 'Ist die Anwendung des Human Regenerators sicher?', pl: 'Czy użytkowanie Human Regeneratora jest bezpieczne?' },
    'hr.faq.q4.a':         { en: 'Yes, using Human Regenerator is completely safe. CAP technology has been successfully used in medicine for decades. The device has also been thoroughly tested and is certified for safe use. The therapy is completely non-invasive and cannot in any way worsen your health condition.',
                             de: 'Ja, die Anwendung des Human Regenerators ist absolut sicher. Die CAP-Technologie wird seit Jahrzehnten erfolgreich in der Medizin eingesetzt. Das Gerät wurde gründlich getestet und ist für die sichere Anwendung zertifiziert. Die Therapie ist vollkommen nicht-invasiv und kann Ihren Gesundheitszustand in keiner Weise verschlechtern.',
                             pl: 'Tak, użytkowanie Human Regeneratora jest całkowicie bezpieczne. Technologia CAP jest z powodzeniem stosowana w medycynie od dziesięcioleci. Urządzenie zostało dokładnie przetestowane i posiada certyfikat bezpiecznego użytkowania. Terapia jest całkowicie nieinwazyjna i w żaden sposób nie może pogorszyć Twojego stanu zdrowia.' },
    'hr.faq.q5':           { en: 'Is there anyone Human Regenerator is not suitable for?', de: 'Gibt es jemanden, für den der Human Regenerator nicht geeignet ist?', pl: 'Czy są osoby, dla których Human Regenerator nie jest odpowiedni?' },
    'hr.faq.q5.a':         { en: 'For people with electronic medical implants such as pacemakers, implanted hearing aids or implanted insulin pumps. The electrostatic field may interfere with the function of these devices. We also do not recommend the therapy for pregnant women.',
                             de: 'Für Personen mit elektronischen medizinischen Implantaten wie Herzschrittmachern, implantierten Hörgeräten oder implantierten Insulinpumpen. Das elektrostatische Feld kann die Funktion dieser Geräte beeinträchtigen. Wir empfehlen die Therapie auch nicht für schwangere Frauen.',
                             pl: 'Dla osób z elektronicznymi implantami medycznymi, takimi jak rozruszniki serca, implantowane aparaty słuchowe lub implantowane pompy insulinowe. Pole elektrostatyczne może zakłócać działanie tych urządzeń. Nie zalecamy także terapii kobietom w ciąży.' },
    'hr.faq.q6':           { en: 'How many sessions are needed to achieve results?', de: 'Wie viele Sitzungen sind erforderlich, um Ergebnisse zu erzielen?', pl: 'Ile sesji potrzeba, aby osiągnąć efekt?' },
    'hr.faq.q6.a':         { en: 'Everything is very individual. To set the optimal number of sessions, we recommend a phone consultation. Some clients feel a significant effect already after the first session, but for most, the desired result occurs after 3–5 sessions. To maintain the ideal condition long-term, it is then advisable to attend therapy regularly, for example once a month.',
                             de: 'Alles ist sehr individuell. Für die optimale Anzahl an Sitzungen empfehlen wir eine telefonische Beratung. Manche Klienten spüren bereits nach der ersten Sitzung eine deutliche Wirkung, bei den meisten stellt sich das gewünschte Ergebnis jedoch nach 3–5 Sitzungen ein. Für den langfristigen Erhalt des idealen Zustands ist es ratsam, anschließend regelmäßig zur Therapie zu kommen, beispielsweise einmal monatlich.',
                             pl: 'Wszystko jest bardzo indywidualne. W celu ustalenia optymalnej liczby sesji zalecamy konsultację telefoniczną. Niektórzy klienci odczuwają wyraźny efekt już po pierwszej sesji, jednak u większości wymagany rezultat pojawia się po 3–5 sesjach. Dla długoterminowego utrzymania idealnego stanu wskazane jest regularne uczęszczanie na terapię, na przykład raz w miesiącu.' },
    'hr.faq.q7':           { en: 'How long does one session take?', de: 'Wie lange dauert eine Sitzung?', pl: 'Jak długo trwa jedna sesja?' },
    'hr.faq.q7.a':         { en: 'One session takes 30 minutes. The client just lies on the bed and relaxes. No physical activity or attention is required.',
                             de: 'Eine Sitzung dauert 30 Minuten. Der Klient liegt einfach auf der Liege und entspannt sich. Keine körperliche Aktivität oder Aufmerksamkeit erforderlich.',
                             pl: 'Jedna sesja trwa 30 minut. Klient po prostu leży na leżance i relaksuje się. Nie jest wymagana żadna aktywność fizyczna ani skupienie uwagi.' },
    'hr.faq.q8':           { en: 'Does insurance cover the therapy?', de: 'Übernimmt die Krankenversicherung die Therapie?', pl: 'Czy ubezpieczenie pokrywa terapię?' },
    'hr.faq.q8.a':         { en: 'Unfortunately, at present health insurance companies do not contribute to therapies on the Human Regenerator device, so the price of the therapy is paid in full by the client. We very much hope that this situation will change in the future.',
                             de: 'Leider übernehmen die Krankenkassen derzeit keine Kosten für Therapien mit dem Human Regenerator, sodass die Therapiekosten vollständig vom Klienten zu tragen sind. Wir hoffen sehr, dass sich diese Situation in Zukunft ändern wird.',
                             pl: 'Niestety obecnie ubezpieczyciele zdrowotni nie partycypują w kosztach terapii na urządzeniu Human Regenerator, dlatego cena terapii jest w pełni opłacana przez klienta. Bardzo liczymy na zmianę tej sytuacji w przyszłości.' },
    'hr.faq.q9':           { en: 'Where is your studio located?', de: 'Wo befindet sich Ihr Studio?', pl: 'Gdzie znajduje się Wasze studio?' },
    'hr.faq.q9.a':         { en: 'We are located in Kadaň (Chomutov district, Ústí region), 1. máje street 1536, 1st floor.',
                             de: 'Wir befinden uns in Kadaň (Bezirk Chomutov, Region Ústí), Straße 1. máje 1536, 1. Stock.',
                             pl: 'Znajdujemy się w Kadaniu (powiat Chomutov, region Ústí), ul. 1. máje 1536, 1. piętro.' },

    /* HR CTA banner */
    'hr.cta.h2':           { html: true, en: 'Ready for <em>change</em>?', de: 'Bereit für <em>Veränderung</em>?', pl: 'Gotowy na <em>zmianę</em>?' },
    'hr.cta.p':            { en: 'Book a session and feel the difference for yourself.',
                             de: 'Buchen Sie einen Termin und spüren Sie selbst den Unterschied.',
                             pl: 'Zarezerwuj terapię i poczuj różnicę na własnej skórze.' },
    'hr.cta.btn':          { en: 'Book now', de: 'Jetzt buchen', pl: 'Zarezerwuj' },

    /* ===== EMS KEGEL CHAIR PAGE ===== */
    'ems.title':           { en: 'EMS Kegel Chair — Refresh Studio Kadaň', de: 'EMS Kegel Chair — Refresh Studio Kadaň', pl: 'EMS Kegel Chair — Refresh Studio Kadaň' },
    'ems.hero.tag':        { en: 'Pelvic floor strengthening', de: 'Beckenbodentraining',          pl: 'Wzmacnianie dna miednicy' },
    'ems.hero.h1':         { html: true, en: 'EMS <em>Kegel Chair</em>', de: 'EMS <em>Kegel Chair</em>', pl: 'EMS <em>Kegel Chair</em>' },
    'ems.hero.sub':        { en: 'Intimate health without shame and without pain', de: 'Intime Gesundheit ohne Scham und ohne Schmerzen', pl: 'Intymne zdrowie bez wstydu i bez bólu' },

    'ems.intro.label':     { en: 'What it is',     de: 'Was ist das',     pl: 'Co to jest' },
    'ems.intro.h2':        { html: true,
                             en: 'A non-invasive, comfortable and <em>highly effective</em> method of strengthening the pelvic floor',
                             de: 'Eine nicht-invasive, komfortable und <em>hochwirksame</em> Methode zur Stärkung des Beckenbodens',
                             pl: 'Nieinwazyjna, wygodna i <em>bardzo skuteczna</em> metoda wzmacniania mięśni dna miednicy' },
    'ems.intro.p':         { en: 'Sit down, relax… and the chair does the work for you. Ideal for women and men who want to address pelvic floor problems quickly, efficiently and without exercise.',
                             de: 'Setzen Sie sich, entspannen Sie sich… und der Stuhl erledigt die Arbeit für Sie. Ideal für Frauen und Männer, die Beckenbodenprobleme schnell, effizient und ohne Übungen lösen möchten.',
                             pl: 'Usiądź, zrelaksuj się… a fotel wykona pracę za Ciebie. Idealne dla kobiet i mężczyzn, którzy chcą szybko, skutecznie i bez ćwiczeń rozwiązać problemy z dnem miednicy.' },

    'ems.how.label':       { en: 'Principle',          de: 'Prinzip',           pl: 'Zasada' },
    'ems.how.h2':          { html: true, en: 'How does EMS Kegel Chair <em>work</em>?', de: 'Wie <em>funktioniert</em> der EMS Kegel Chair?', pl: 'Jak <em>działa</em> EMS Kegel Chair?' },
    'ems.how.intro':       { en: 'EMS Kegel Chair uses focal magnetic stimulation (FMS), which intensively activates the pelvic floor muscles — much more strongly than is possible with regular Kegel exercises.',
                             de: 'Der EMS Kegel Chair nutzt fokale Magnetstimulation (FMS), die die Beckenbodenmuskulatur intensiv aktiviert — viel stärker als mit normalen Kegel-Übungen möglich.',
                             pl: 'EMS Kegel Chair wykorzystuje ogniskową stymulację magnetyczną (FMS), która intensywnie aktywuje mięśnie dna miednicy — znacznie silniej niż możliwe jest podczas zwykłych ćwiczeń Kegla.' },
    'ems.how.l1':          { en: 'Up to 11,000 contractions during one 30-minute session', de: 'Bis zu 11.000 Kontraktionen während einer 30-minütigen Sitzung', pl: 'Aż do 11 000 skurczów podczas jednej 30-minutowej sesji' },
    'ems.how.l2':          { en: 'Deep activation of muscles that cannot be consciously engaged', de: 'Tiefe Aktivierung von Muskeln, die normalerweise nicht bewusst angesteuert werden können', pl: 'Głęboka aktywacja mięśni, których normalnie nie można świadomie zaangażować' },
    'ems.how.l3':          { en: 'No pain, no sweating, no undressing — just sit down', de: 'Ohne Schmerzen, ohne Schwitzen, ohne Ausziehen — einfach hinsetzen', pl: 'Bez bólu, bez pocenia, bez rozbierania — wystarczy usiąść' },
    'ems.how.l4':          { en: 'Works through clothing and is completely safe', de: 'Wirkt durch die Kleidung und ist absolut sicher', pl: 'Działa przez ubranie i jest całkowicie bezpieczna' },

    'ems.who.label':       { en: 'For whom',     de: 'Für wen',     pl: 'Dla kogo' },
    'ems.who.h2':          { html: true, en: 'Who does EMS Kegel Chair <em>help</em>?', de: 'Wem <em>hilft</em> der EMS Kegel Chair?', pl: 'Komu <em>pomaga</em> EMS Kegel Chair?' },
    'ems.who.women.h':     { en: 'Women',         de: 'Frauen',           pl: 'Kobietom' },
    'ems.who.women.l1':    { en: 'Urinary incontinence (stress and urge)', de: 'Harninkontinenz (Stress- und Dranginkontinenz)', pl: 'Nietrzymanie moczu (wysiłkowe i naglące)' },
    'ems.who.women.l2':    { en: 'Weakened pelvic floor after childbirth', de: 'Geschwächter Beckenboden nach der Geburt', pl: 'Osłabione dno miednicy po porodzie' },
    'ems.who.women.l3':    { en: 'Improvement of sexuality and orgasm', de: 'Verbesserung von Sexualität und Orgasmus', pl: 'Poprawa seksualności i orgazmu' },
    'ems.who.women.l4':    { en: 'Strengthening muscles after surgery or pelvic organ prolapse', de: 'Muskelstärkung nach Operationen oder bei Beckenorganprolaps', pl: 'Wzmocnienie mięśni po operacjach lub przy obniżeniu narządów miednicy' },
    'ems.who.women.l5':    { en: 'Prevention of incontinence in later life', de: 'Vorbeugung von Inkontinenz im späteren Alter', pl: 'Profilaktyka nietrzymania moczu w późniejszym wieku' },
    'ems.who.men.h':       { en: 'Men',           de: 'Männer',           pl: 'Mężczyznom' },
    'ems.who.men.l1':      { en: 'Prostate problems',                  de: 'Prostataprobleme',                pl: 'Problemy z prostatą' },
    'ems.who.men.l2':      { en: 'Weakened perineal muscles',           de: 'Geschwächte Dammmuskulatur',     pl: 'Osłabione mięśnie krocza' },
    'ems.who.men.l3':      { en: 'Improvement of sexual function',     de: 'Verbesserung der Sexualfunktionen',pl: 'Poprawa funkcji seksualnych' },
    'ems.who.men.l4':      { en: 'Support for erectile dysfunction',   de: 'Unterstützung bei erektiler Dysfunktion', pl: 'Wsparcie przy zaburzeniach erekcji' },
    'ems.who.men.l5':      { en: 'Improvement of pelvic muscle control',de: 'Verbesserung der Beckenmuskelkontrolle', pl: 'Poprawa kontroli mięśni miednicy' },

    'ems.why.label':       { en: 'Effectiveness',          de: 'Wirksamkeit',          pl: 'Skuteczność' },
    'ems.why.h2':          { html: true, en: 'Why is EMS Kegel Chair <em>so effective</em>?', de: 'Warum ist der EMS Kegel Chair <em>so wirksam</em>?', pl: 'Dlaczego EMS Kegel Chair jest <em>tak skuteczna</em>?' },
    'ems.why.l1':          { en: 'Electromagnetic field penetrates deep into muscle tissue', de: 'Elektromagnetisches Feld dringt tief in das Muskelgewebe ein', pl: 'Pole elektromagnetyczne wnika głęboko w tkankę mięśniową' },
    'ems.why.l2':          { en: 'Activates 100% of pelvic floor muscles (regular Kegels only about 40%)', de: 'Aktiviert 100% der Beckenbodenmuskulatur (normale Kegel-Übungen nur ca. 40%)', pl: 'Aktywuje 100% mięśni dna miednicy (zwykłe ćwiczenia Kegla tylko ok. 40%)' },
    'ems.why.l3':          { en: 'Intensive but pleasant stimulation without pain', de: 'Intensive, aber angenehme Stimulation ohne Schmerzen', pl: 'Intensywna, ale przyjemna stymulacja bez bólu' },
    'ems.why.l4':          { en: 'Fast results — often after just 2–4 sessions', de: 'Schnelle Ergebnisse — oft schon nach 2–4 Sitzungen', pl: 'Szybkie efekty — często już po 2–4 sesjach' },
    'ems.why.l5':          { en: 'No need to undress or explain anything', de: 'Kein Ausziehen oder Erklären notwendig', pl: 'Nie ma potrzeby rozbierania się ani niczego wyjaśniać' },

    'ems.res.label':       { en: 'Results',                de: 'Ergebnisse',                pl: 'Rezultaty' },
    'ems.res.h2':          { html: true, en: 'What clients <em>most often</em> describe', de: 'Was Klienten <em>am häufigsten</em> beschreiben', pl: 'Co klienci <em>najczęściej</em> opisują' },
    'ems.res.l1':          { en: 'Significant reduction or complete disappearance of urine leakage', de: 'Deutliche Reduktion oder vollständiges Verschwinden des Urinverlusts', pl: 'Znaczące zmniejszenie lub całkowite ustąpienie wycieku moczu' },
    'ems.res.l2':          { en: 'Better control over the bladder', de: 'Bessere Kontrolle über die Blase', pl: 'Lepsza kontrola nad pęcherzem' },
    'ems.res.l3':          { en: 'Firmer and more active pelvic floor', de: 'Festerer und aktiverer Beckenboden', pl: 'Mocniejsze i bardziej aktywne dno miednicy' },
    'ems.res.l4':          { en: 'Increased sexual sensitivity', de: 'Erhöhte sexuelle Empfindsamkeit', pl: 'Zwiększona wrażliwość seksualna' },
    'ems.res.l5':          { en: 'Stronger orgasms (in both women and men)', de: 'Stärkere Orgasmen (bei Frauen und Männern)', pl: 'Silniejsze orgazmy (zarówno u kobiet, jak i mężczyzn)' },
    'ems.res.l6':          { en: 'Pain relief in the lower back and pelvic area', de: 'Schmerzlinderung im Lenden- und Beckenbereich', pl: 'Łagodzenie bólu w okolicy lędźwi i miednicy' },
    'ems.res.l7':          { en: 'Increased confidence and comfort in everyday life', de: 'Mehr Selbstbewusstsein und Komfort im Alltag', pl: 'Zwiększona pewność siebie i komfort w codziennym życiu' },

    'ems.proc.label':      { en: 'How it works',          de: 'Ablauf',              pl: 'Przebieg' },
    'ems.proc.h2':         { html: true, en: 'How does the therapy <em>work</em>?', de: 'Wie <em>läuft</em> die Therapie ab?', pl: 'Jak <em>przebiega</em> terapia?' },
    'ems.proc.s1':         { en: 'You arrive in normal clothing',          de: 'Sie kommen in normaler Kleidung',           pl: 'Przychodzisz w zwykłym ubraniu' },
    'ems.proc.s2':         { en: 'You sit on the chair',                  de: 'Sie setzen sich auf den Stuhl',             pl: 'Siadasz na fotelu' },
    'ems.proc.s3':         { en: 'You feel pleasant contractions and vibrations in the pelvic area', de: 'Sie spüren angenehme Kontraktionen und Vibrationen im Beckenbereich', pl: 'Czujesz przyjemne skurcze i wibracje w okolicy miednicy' },
    'ems.proc.s4':         { en: 'You relax for 30 minutes',              de: 'Sie entspannen sich 30 Minuten lang',       pl: 'Relaksujesz się przez 30 minut' },
    'ems.proc.s5':         { en: 'You leave without restrictions, you can immediately continue with your day', de: 'Sie gehen ohne Einschränkungen, Sie können Ihren Tag sofort fortsetzen', pl: 'Wychodzisz bez ograniczeń, możesz od razu kontynuować swój dzień' },
    'ems.proc.note':       { html: true, en: '<strong>A series of 6–10 treatments is recommended depending on the issues.</strong>',
                             de: '<strong>Empfohlen wird eine Serie von 6–10 Behandlungen je nach Beschwerden.</strong>',
                             pl: '<strong>Zaleca się serię 6–10 zabiegów w zależności od dolegliwości.</strong>' },

    'ems.us.label':        { en: 'Why us',         de: 'Warum wir',         pl: 'Dlaczego my' },
    'ems.us.h2':           { html: true, en: 'Why choose <em>our studio</em>?', de: 'Warum <em>unser Studio</em> wählen?', pl: 'Dlaczego wybrać <em>nasze studio</em>?' },
    'ems.us.l1':           { en: 'Modern next-generation device',                            de: 'Modernes Gerät der neuesten Generation',                              pl: 'Nowoczesne urządzenie nowej generacji' },
    'ems.us.l2':           { en: 'Discreet environment',                                    de: 'Diskrete Umgebung',                                                   pl: 'Dyskretne otoczenie' },
    'ems.us.l3':           { en: 'Experienced staff who explain everything',                de: 'Erfahrenes Personal, das alles erklärt',                              pl: 'Doświadczony personel, który wszystko wyjaśni' },
    'ems.us.l4':           { en: 'Suitable also as a combination with Human Regenerator for overall regeneration', de: 'Auch als Kombination mit dem Human Regenerator zur Gesamtregeneration geeignet', pl: 'Odpowiednie również jako połączenie z Human Regeneratorem dla kompleksowej regeneracji' },
    'ems.us.cta':          { en: 'Book a session', de: 'Termin buchen', pl: 'Zarezerwuj' },

    'ems.faq.label':       { en: 'FAQ',                de: 'Häufige Fragen',     pl: 'Najczęstsze pytania' },
    'ems.faq.h2':          { html: true, en: 'What clients ask <em>most often</em>', de: 'Was Kunden <em>am häufigsten</em> fragen', pl: 'O co klienci <em>najczęściej</em> pytają' },
    'ems.faq.q1':          { en: 'Is the therapy painful or unpleasant?', de: 'Ist die Therapie schmerzhaft oder unangenehm?', pl: 'Czy terapia jest bolesna lub nieprzyjemna?' },
    'ems.faq.q1.a':        { en: 'No, the therapy is completely non-invasive and painless. During the treatment you only feel pleasant contractions and pulsing of the pelvic floor muscles, similar to intensive exercise — just without effort. The intensity can be adjusted at any time according to your sensitivity.',
                             de: 'Nein, die Therapie ist absolut nicht-invasiv und schmerzfrei. Während der Behandlung spüren Sie nur angenehme Kontraktionen und Pulsationen der Beckenbodenmuskulatur, ähnlich einem intensiven Training — nur ohne Anstrengung. Die Intensität kann jederzeit an Ihre Empfindlichkeit angepasst werden.',
                             pl: 'Nie, terapia jest całkowicie nieinwazyjna i bezbolesna. Podczas zabiegu odczuwasz jedynie przyjemne skurcze i pulsowanie mięśni dna miednicy, podobnie jak przy intensywnym treningu — tylko bez wysiłku. Intensywność można w każdej chwili dostosować do Twojej wrażliwości.' },
    'ems.faq.q2':          { en: 'Do I have to undress for the treatment? Is it discreet?', de: 'Muss ich mich für die Behandlung ausziehen? Ist es diskret?', pl: 'Czy muszę się rozbierać do zabiegu? Czy jest to dyskretne?' },
    'ems.faq.q2.a':        { en: 'No. There\'s no need to undress — the therapy is performed in normal clothing. You sit comfortably on the chair in a discreet environment and the treatment takes place completely without physical contact. We treat intimate health without shame and with respect.',
                             de: 'Nein. Es ist nicht notwendig sich auszuziehen — die Therapie wird in normaler Kleidung durchgeführt. Sie sitzen bequem auf dem Stuhl in einer diskreten Umgebung und die Behandlung findet ohne körperlichen Kontakt statt. Intime Gesundheit behandeln wir bei uns ohne Scham und mit Respekt.',
                             pl: 'Nie. Nie ma konieczności rozbierania się — terapia odbywa się w zwykłym ubraniu. Siedzisz wygodnie na fotelu w dyskretnym otoczeniu, a zabieg odbywa się całkowicie bez kontaktu fizycznego. Intymne zdrowie traktujemy bez wstydu i z szacunkiem.' },
    'ems.faq.q3':          { en: 'For whom is EMS Kegel Chair suitable?', de: 'Für wen eignet sich der EMS Kegel Chair?', pl: 'Dla kogo jest EMS Kegel Chair?' },
    'ems.faq.q3.a':        { en: 'EMS Kegel Chair is suitable for women and men of all ages, especially for those who deal with: urine leakage (incontinence), weakened pelvic floor (e.g. after childbirth or surgery), prostate problems, reduced sexual sensitivity or erection problems, prevention of difficulties in later life.',
                             de: 'Der EMS Kegel Chair eignet sich für Frauen und Männer jeden Alters, besonders für jene, die folgende Probleme haben: Urinverlust (Inkontinenz), geschwächten Beckenboden (z.B. nach Geburt oder Operation), Prostataprobleme, reduzierte sexuelle Empfindsamkeit oder Erektionsprobleme, Vorbeugung von Beschwerden im späteren Alter.',
                             pl: 'EMS Kegel Chair jest odpowiednia dla kobiet i mężczyzn w każdym wieku, zwłaszcza dla osób zmagających się z: nietrzymaniem moczu (inkontynencja), osłabieniem mięśni dna miednicy (np. po porodzie lub operacji), problemami z prostatą, obniżoną wrażliwością seksualną lub problemami z erekcją, profilaktyką dolegliwości w późniejszym wieku.' },
    'ems.faq.q4':          { en: 'When can I expect results and how many treatments are needed?', de: 'Wann kann ich Ergebnisse erwarten und wie viele Behandlungen sind nötig?', pl: 'Kiedy mogę oczekiwać efektów i ile zabiegów potrzeba?' },
    'ems.faq.q4.a':        { en: 'Many clients feel the first changes already after 2–4 sessions. For long-term and stable effect, we recommend a series of 6–10 treatments depending on the specific issues. The results also improve further after the cure ends, as the muscles gradually strengthen.',
                             de: 'Viele Klienten spüren erste Veränderungen bereits nach 2–4 Sitzungen. Für einen langfristigen und stabilen Effekt empfehlen wir eine Serie von 6–10 Behandlungen, abhängig von den spezifischen Beschwerden. Die Ergebnisse verbessern sich auch nach Abschluss der Kur weiter, da die Muskeln allmählich stärker werden.',
                             pl: 'Wielu klientów odczuwa pierwsze zmiany już po 2–4 sesjach. Dla długoterminowego i stabilnego efektu zalecamy serię 6–10 zabiegów, w zależności od konkretnych dolegliwości. Rezultaty poprawiają się także po zakończeniu kuracji, ponieważ mięśnie stopniowo się wzmacniają.' },
    'ems.faq.q5':          { en: 'Can I function normally after the therapy?', de: 'Kann ich nach der Therapie normal funktionieren?', pl: 'Czy mogę normalnie funkcjonować po terapii?' },
    'ems.faq.q5.a':        { en: 'Yes. After the treatment there are no restrictions — you can immediately return to work, drive, do sports or continue with your day. No convalescence, no pain, no time off from normal life.',
                             de: 'Ja. Nach der Behandlung gibt es keine Einschränkungen — Sie können sofort zur Arbeit zurückkehren, Auto fahren, Sport treiben oder Ihren Tag fortsetzen. Keine Rekonvaleszenz, keine Schmerzen, keine Ausfälle aus dem normalen Leben.',
                             pl: 'Tak. Po zabiegu nie ma żadnych ograniczeń — możesz od razu wrócić do pracy, prowadzić auto, uprawiać sport lub kontynuować swój dzień. Żadnej rekonwalescencji, bólu ani przerw w normalnym życiu.' },

    'ems.cta.h2':          { html: true, en: 'Start with <em>strengthening the pelvic floor</em>', de: 'Beginnen Sie mit der <em>Stärkung des Beckenbodens</em>', pl: 'Zacznij <em>wzmacniać dno miednicy</em>' },

    /* ===== MASÁŽE ===== */
    'mas.title':           { en: 'Massages — Refresh Studio Kadaň', de: 'Massagen — Refresh Studio Kadaň', pl: 'Masaże — Refresh Studio Kadaň' },
    'mas.hero.tag':        { en: 'Classic massage', de: 'Klassische Massage', pl: 'Klasyczny masaż' },
    'mas.hero.h1':         { html: true, en: '<em>Massages</em>', de: '<em>Massagen</em>', pl: '<em>Masaże</em>' },
    'mas.hero.sub':        { en: 'Relaxation that turns into regeneration', de: 'Entspannung, die in Regeneration übergeht', pl: 'Odprężenie przechodzące w regenerację' },

    'mas.intro.label':     { en: 'Classic back massage', de: 'Klassische Rückenmassage', pl: 'Klasyczny masaż pleców' },
    'mas.intro.h2':        { html: true, en: 'A genuine sense of <em>well-being</em> for your back', de: 'Ein echtes Gefühl des <em>Wohlbefindens</em> für Ihren Rücken', pl: 'Prawdziwe poczucie <em>komfortu</em> dla Twoich pleców' },
    'mas.intro.p1':        { en: 'Classic back massage is an excellent choice for releasing tension, reducing stress and quickly relieving pain. Thanks to professional massage techniques, tissues are perfused, stiff muscles are released and their regeneration is supported.',
                             de: 'Die klassische Rückenmassage ist eine ausgezeichnete Wahl zur Lösung von Verspannungen, Stressabbau und schneller Schmerzlinderung. Dank professioneller Massagetechniken wird die Gewebedurchblutung gefördert, verspannte Muskeln werden gelöst und ihre Regeneration unterstützt.',
                             pl: 'Klasyczny masaż pleców to doskonały wybór do rozluźnienia napięcia, łagodzenia stresu i szybkiej ulgi w bólu. Dzięki profesjonalnym technikom masażu dochodzi do dotlenienia tkanek, rozluźnienia napiętych mięśni i wsparcia ich regeneracji.' },
    'mas.intro.p2':        { en: 'The massage is always tailored to your current needs — whether you are dealing with long-term overload, painful spots or just longing for deep relaxation.',
                             de: 'Die Massage wird immer an Ihre aktuellen Bedürfnisse angepasst — ob Sie unter langfristiger Überlastung leiden, schmerzhafte Stellen haben oder einfach nur tiefe Entspannung suchen.',
                             pl: 'Masaż zawsze jest dostosowany do Twoich aktualnych potrzeb — czy masz długotrwałe przeciążenie, bolesne miejsca lub po prostu pragniesz głębokiego relaksu.' },
    'mas.intro.p3':        { en: 'After the massage you will feel lighter, calmer and full of new energy. Treat your back to the care it deserves and experience a true sense of well-being.',
                             de: 'Nach der Massage werden Sie sich leichter, ruhiger und voller neuer Energie fühlen. Gönnen Sie Ihrem Rücken die Pflege, die er verdient, und erleben Sie ein echtes Wohlgefühl.',
                             pl: 'Po masażu poczujesz się lżej, spokojniej i pełen nowej energii. Daj swoim plecom pielęgnację, na jaką zasługują, i zaznaj prawdziwego poczucia komfortu.' },

    'mas.sarka.label':     { en: 'Your masseuse',     de: 'Ihre Masseurin',     pl: 'Twoja masażystka' },
    'mas.sarka.h2':        { html: true, en: 'Šárka <em>Becková</em>', de: 'Šárka <em>Becková</em>', pl: 'Šárka <em>Becková</em>' },
    'mas.sarka.p1':        { en: 'The massage is performed by Šárka Becková, who has been dedicated to massage for almost 20 years. She sees her work as a calling — she empathetically listens to clients\' problems and always tries to find a way to truly relieve them.',
                             de: 'Die Massage wird von Šárka Becková durchgeführt, die sich seit fast 20 Jahren der Massage widmet. Ihre Arbeit sieht sie als Berufung — sie hört einfühlsam den Problemen der Klienten zu und versucht stets, einen Weg zu finden, ihnen wirklich zu helfen.',
                             pl: 'Masaż wykonuje Šárka Becková, która masażystce poświęca się od prawie 20 lat. Swoją pracę traktuje jak powołanie — z empatią wsłuchuje się w problemy klientów i zawsze stara się znaleźć sposób, by im naprawdę ulżyć.' },
    'mas.sarka.p2':        { en: 'Whether through classic massage or modern technologies like Human Regenerator, her goal is to help the body function properly again.',
                             de: 'Ob durch klassische Massage oder moderne Technologien wie Human Regenerator — ihr Ziel ist es, dem Körper zu helfen, wieder richtig zu funktionieren.',
                             pl: 'Czy to poprzez klasyczny masaż, czy nowoczesne technologie jak Human Regenerator — jej celem jest pomóc ciału znów prawidłowo funkcjonować.' },

    'mas.gal.label':       { en: 'From our studio', de: 'Aus unserem Studio',  pl: 'Z naszego studio' },
    'mas.gal.h2':          { html: true, en: 'A look inside <em>Refresh Studio</em>', de: 'Ein Blick ins <em>Refresh Studio</em>', pl: 'Spojrzenie do <em>Refresh Studio</em>' },

    'mas.cta.h2':          { html: true, en: 'Treat yourself to the care <em>you deserve</em>', de: 'Gönnen Sie sich die Pflege, die <em>Sie verdienen</em>', pl: 'Daj sobie pielęgnację, <em>na którą zasługujesz</em>' },
    'mas.cta.p':           { en: 'Book a massage and release the tension.',
                             de: 'Buchen Sie eine Massage und lösen Sie die Verspannungen.',
                             pl: 'Zarezerwuj masaż i rozluźnij napięcie.' },

    /* ===== CENIK ===== */
    'cen.title':           { en: 'Pricing and gift vouchers — Refresh Studio Kadaň',  de: 'Preise und Gutscheine — Refresh Studio Kadaň', pl: 'Cennik i vouchery — Refresh Studio Kadaň' },
    'cen.hero.tag':        { en: 'Transparent pricing',                  de: 'Transparente Preise',          pl: 'Przejrzyste ceny' },
    'cen.hero.h1':         { html: true, en: '<em>Pricing</em>',         de: '<em>Preise</em>',              pl: '<em>Cennik</em>' },
    'cen.hero.sub':        { en: 'Overview of prices for all our services and therapies. No hidden fees.',
                             de: 'Übersicht der Preise aller unserer Dienstleistungen und Therapien. Keine versteckten Gebühren.',
                             pl: 'Przegląd cen wszystkich naszych usług i terapii. Żadnych ukrytych opłat.' },

    'cen.s.hr':            { en: 'Human Regenerator', de: 'Human Regenerator', pl: 'Human Regenerator' },
    'cen.s.ems':           { en: 'EMS Kegel',         de: 'EMS Kegel',         pl: 'EMS Kegel' },
    'cen.s.oxy':           { en: 'Oxyceutical / Bodytoneup', de: 'Oxyceutical / Bodytoneup', pl: 'Oxyceutical / Bodytoneup' },
    'cen.s.mas':           { en: 'Massages',          de: 'Massagen',          pl: 'Masaże' },
    'cen.s.zab':           { en: 'Wraps and baths',   de: 'Packungen und Bäder',pl: 'Okłady i kąpiele' },

    /* row names */
    'cen.r.hr1.name':      { en: 'Human Regenerator — single session',         de: 'Human Regenerator — einzelne Sitzung',           pl: 'Human Regenerator — pojedyncza sesja' },
    'cen.r.hr1.dur':       { en: '30 minutes',         de: '30 Minuten',         pl: '30 minut' },
    'cen.r.ems1.name':     { en: 'EMS KEGEL pelvic chair — five sessions',   de: 'EMS KEGEL Beckenstuhl — fünf Sitzungen',          pl: 'EMS KEGEL fotel miedniczny — pięć sesji' },
    'cen.r.ems1.dur':      { en: '5× 30 minutes',     de: '5× 30 Minuten',     pl: '5× 30 minut' },
    'cen.r.oxy1.name':     { en: 'Oxyceutical René d\'essey — bioavailable oxygen treatment', de: 'Oxyceutical René d\'essey — Behandlung mit bioverfügbarem Sauerstoff', pl: 'Oxyceutical René d\'essey — zabieg z biodostępnym tlenem' },
    'cen.r.oxy1.dur':      { en: '60 minutes',        de: '60 Minuten',        pl: '60 minut' },
    'cen.r.oxy2.name':     { en: 'Bodytoneup René d\'essey — ultra firming body treatment', de: 'Bodytoneup René d\'essey — ultra-straffende Körperbehandlung', pl: 'Bodytoneup René d\'essey — ultra ujędrniający zabieg na ciało' },
    'cen.r.oxy2.dur':      { en: '90 minutes',        de: '90 Minuten',        pl: '90 minut' },

    'cen.r.m1.name':       { en: 'Neck massage',                 de: 'Nackenmassage',                pl: 'Masaż karku' },
    'cen.r.m1.dur':        { en: '30 minutes',                   de: '30 Minuten',                   pl: '30 minut' },
    'cen.r.m2.name':       { en: 'Back massage',                 de: 'Rückenmassage',                pl: 'Masaż pleców' },
    'cen.r.m2.dur':        { en: '30 minutes',                   de: '30 Minuten',                   pl: '30 minut' },
    'cen.r.m3.name':       { en: 'Back and neck massage',        de: 'Rücken- und Nackenmassage',    pl: 'Masaż pleców i karku' },
    'cen.r.m3.dur':        { en: '50 minutes',                   de: '50 Minuten',                   pl: '50 minut' },
    'cen.r.m4.name':       { en: 'Cupping therapy',              de: 'Schröpf-Therapie',             pl: 'Terapia bańkami' },
    'cen.r.m4.dur':        { en: '50 minutes',                   de: '50 Minuten',                   pl: '50 minut' },
    'cen.r.m5.name':       { en: 'Back and neck massage + cupping therapy', de: 'Rücken- und Nackenmassage + Schröpf-Therapie',   pl: 'Masaż pleców i karku + terapia bańkami' },
    'cen.r.m5.dur':        { en: '50 minutes',                   de: '50 Minuten',                   pl: '50 minut' },
    'cen.r.m6.name':       { en: 'Facial treatment with Nu Skin galvanic iron', de: 'Gesichtsbehandlung mit Nu Skin Galvanik-Eisen', pl: 'Zabieg na twarz galwanicznym żelazkiem Nu Skin' },
    'cen.r.m6.dur':        { en: '30 minutes',                   de: '30 Minuten',                   pl: '30 minut' },
    'cen.r.m7.name':       { en: 'Hot lava stone massage',       de: 'Heiße Lavasteinmassage',       pl: 'Masaż gorącymi kamieniami lawy' },
    'cen.r.m7.dur':        { en: '50 minutes',                   de: '50 Minuten',                   pl: '50 minut' },
    'cen.r.m8.name':       { en: 'Maderotherapy — single treatment', de: 'Maderotherapie — einzelne Behandlung', pl: 'Maderoterapia — pojedynczy zabieg' },
    'cen.r.m8.dur':        { en: '50 minutes',                   de: '50 Minuten',                   pl: '50 minut' },
    'cen.r.m9.name':       { en: 'Maderotherapy — five treatments', de: 'Maderotherapie — fünf Behandlungen', pl: 'Maderoterapia — pięć zabiegów' },
    'cen.r.m9.dur':        { en: '5× 50 minutes',                de: '5× 50 Minuten',                pl: '5× 50 minut' },
    'cen.r.m10.name':      { en: 'Maderotherapy — ten treatments',de: 'Maderotherapie — zehn Behandlungen', pl: 'Maderoterapia — dziesięć zabiegów' },
    'cen.r.m10.dur':       { en: '10× 50 minutes',               de: '10× 50 Minuten',               pl: '10× 50 minut' },

    'cen.r.z1.name':       { en: 'Paraffin bath and hand wrap with back massage (RECOMMENDED)',
                             de: 'Paraffinbad und Handpackung zur Rückenmassage (EMPFEHLENSWERT)',
                             pl: 'Kąpiel parafinowa i okład na ręce do masażu pleców (POLECAMY)' },
    'cen.r.z1.dur':        { en: '20 minutes',        de: '20 Minuten',        pl: '20 minut' },

    'cen.note':            { en: 'For the above procedures and services you can use the 10 + 1 free pass, which you can purchase at our studio. It is also possible to buy gift vouchers for services and procedures of the value you choose.',
                             de: 'Für die oben genannten Behandlungen und Leistungen können Sie die 10 + 1 gratis-Karte nutzen, die Sie in unserem Studio erwerben können. Es ist auch möglich, Geschenkgutscheine für Dienstleistungen und Behandlungen im Wert nach Ihren Möglichkeiten zu kaufen.',
                             pl: 'Na wymienione zabiegi i usługi można skorzystać z karnetu 10 + 1 gratis, który można zakupić w naszym studio. Możliwy jest również zakup voucherów upominkowych na usługi i zabiegi o wybranej przez Państwa wartości.' },

    /* Voucher banner (shared on cenik + kontakt) */
    'vouch.h3':            { html: true, en: 'Gift <em>vouchers</em>', de: 'Geschenk-<em>gutscheine</em>', pl: 'Vouchery <em>upominkowe</em>' },
    'vouch.p1':            { en: 'Treat your loved ones to truly exceptional care and gift them a Human Regenerator gift voucher. You choose the value and type of package yourself, and we will prepare an elegant voucher exactly according to the agreement.',
                             de: 'Schenken Sie Ihren Lieben wirklich außergewöhnliche Pflege und überreichen Sie ihnen einen Geschenkgutschein für Human Regenerator. Den Wert und die Art des Pakets wählen Sie selbst, und wir bereiten Ihnen einen eleganten Gutschein genau nach Vereinbarung vor.',
                             pl: 'Obdaruj swoich bliskich naprawdę wyjątkową pielęgnacją i podaruj im voucher upominkowy na zabieg Human Regenerator. Wartość i rodzaj pakietu wybierasz sam, a my przygotujemy elegancki voucher dokładnie według ustaleń.' },
    'vouch.p2':            { html: true, en: 'You give not only a modern form of regeneration and relief from fatigue or pain, but also a deep feeling of calm, energy and inner balance. With this voucher, your loved ones will not only feel great — but also shine. 💚',
                             de: 'Sie schenken nicht nur eine moderne Form der Regeneration und Linderung von Müdigkeit oder Schmerzen, sondern auch ein tiefes Gefühl von Ruhe, Energie und innerer Balance. Mit diesem Gutschein werden sich Ihre Lieben nicht nur großartig fühlen — sondern auch strahlen. 💚',
                             pl: 'Dajesz w prezencie nie tylko nowoczesną formę regeneracji i ulgę od zmęczenia czy bólu, ale także głębokie poczucie spokoju, energii i wewnętrznej równowagi. Z tym voucherem Twoi bliscy będą czuć się nie tylko świetnie — ale też promienieć. 💚' },
    'vouch.p3':            { en: 'A gift voucher can be purchased in our salon or from the comfort of your home online.',
                             de: 'Einen Gutschein können Sie in unserem Salon oder bequem von zu Hause online kaufen.',
                             pl: 'Voucher upominkowy można zakupić w naszym salonie lub wygodnie online z domu.' },
    'vouch.btn':           { en: 'Contact us', de: 'Kontaktieren Sie uns', pl: 'Skontaktuj się z nami' },
    'vouch.btn_call':      { en: 'Call us: +420 777 938 915', de: 'Rufen Sie uns an: +420 777 938 915', pl: 'Zadzwoń do nas: +420 777 938 915' },

    'cen.cta.h2':          { html: true, en: 'Interested in <em>our services</em>?', de: 'Interesse an <em>unseren Diensten</em>?', pl: 'Zainteresowany <em>naszymi usługami</em>?' },
    'cen.cta.p':           { en: 'Call us or fill out the form.', de: 'Rufen Sie uns an oder füllen Sie das Formular aus.', pl: 'Zadzwoń do nas lub wypełnij formularz.' },

    /* ===== KONTAKT ===== */
    'kon.title':           { en: 'Contact — Refresh Studio Kadaň', de: 'Kontakt — Refresh Studio Kadaň', pl: 'Kontakt — Refresh Studio Kadaň' },
    'kon.hero.tag':        { en: 'Get in touch', de: 'Melden Sie sich', pl: 'Skontaktuj się' },
    'kon.hero.h1':         { html: true, en: '<em>Contact</em>', de: '<em>Kontakt</em>', pl: '<em>Kontakt</em>' },
    'kon.hero.sub':        { en: 'We will gladly advise you, explain procedures and help you choose a suitable therapy.',
                             de: 'Wir beraten Sie gerne, erklären die Verfahren und helfen Ihnen, eine geeignete Therapie zu wählen.',
                             pl: 'Chętnie doradzimy, wyjaśnimy procedury i pomożemy wybrać odpowiednią terapię.' },

    'kon.left.label':      { en: 'By phone',                       de: 'Telefonisch',                pl: 'Telefonicznie' },
    'kon.left.h2':         { html: true, en: 'Free <em>consultation</em>', de: 'Unverbindliche <em>Beratung</em>', pl: 'Niezobowiązująca <em>konsultacja</em>' },
    'kon.left.p1':         { en: 'To book an appointment or for a free consultation, please call directly the owner of Refresh Studio, Šárka Becková, on the phone number below.',
                             de: 'Um einen Termin zu buchen oder eine unverbindliche Beratung zu erhalten, rufen Sie bitte direkt die Inhaberin des Refresh Studios, Šárka Becková, unter der unten angegebenen Nummer an.',
                             pl: 'Aby umówić termin lub odbyć niezobowiązującą konsultację, zadzwoń bezpośrednio do właścicielki Refresh Studio, Šárki Beckovej, pod numer telefonu poniżej.' },
    'kon.left.p2':         { en: 'Šárka will best advise you, explain procedures and help you choose a suitable therapy.',
                             de: 'Šárka wird Sie am besten beraten, die Verfahren erklären und Ihnen helfen, die passende Therapie zu wählen.',
                             pl: 'Šárka najlepiej Cię doradzi, wyjaśni procedury i pomoże wybrać odpowiednią terapię.' },
    'kon.left.p3':         { en: 'If you can\'t reach her, just send an SMS — she will get back to you as soon as possible.',
                             de: 'Sollten Sie sie nicht erreichen, schicken Sie ihr einfach eine SMS — sie meldet sich bei Ihnen, sobald es möglich ist.',
                             pl: 'Jeśli się nie dodzwonisz, wystarczy wysłać SMS — odezwie się tak szybko, jak to będzie możliwe.' },
    'kon.left.phone_sub':  { en: 'Šárka Becková — owner of Refresh Studio',
                             de: 'Šárka Becková — Inhaberin des Refresh Studios',
                             pl: 'Šárka Becková — właścicielka Refresh Studio' },

    'kon.right.h2':        { html: true, en: 'Contact <em>form</em>', de: 'Kontakt-<em>formular</em>', pl: 'Formularz <em>kontaktowy</em>' },
    'kon.right.p':         { en: 'If interested, you can also fill out the contact form and we will get back to you as soon as possible.',
                             de: 'Bei Interesse können Sie auch das Kontaktformular ausfüllen und wir melden uns bei Ihnen so schnell wie möglich.',
                             pl: 'W razie zainteresowania możesz również wypełnić formularz kontaktowy, a my odezwiemy się jak najszybciej.' },
    'kon.form.name':       { en: 'Full name',                de: 'Vor- und Nachname',         pl: 'Imię i nazwisko' },
    'kon.form.name_ph':    { en: 'Your name',                de: 'Ihr Name',                  pl: 'Twoje imię' },
    'kon.form.phone':      { en: 'Phone',                    de: 'Telefon',                   pl: 'Telefon' },
    'kon.form.email':      { en: 'E-mail',                   de: 'E-Mail',                    pl: 'E-mail' },
    'kon.form.email_ph':   { en: 'your@email.com',           de: 'ihre@email.de',             pl: 'twoj@email.pl' },
    'kon.form.service':    { en: 'I am interested in',       de: 'Ich interessiere mich für', pl: 'Interesuje mnie' },
    'kon.form.opt_select': { en: 'Choose service…',          de: 'Wählen Sie eine Leistung…', pl: 'Wybierz usługę…' },
    'kon.form.opt_hr':     { en: 'Human Regenerator',        de: 'Human Regenerator',         pl: 'Human Regenerator' },
    'kon.form.opt_ems':    { en: 'EMS Kegel Chair',          de: 'EMS Kegel Chair',           pl: 'EMS Kegel Chair' },
    'kon.form.opt_mas':    { en: 'Massages',                 de: 'Massagen',                  pl: 'Masaże' },
    'kon.form.opt_vouch':  { en: 'Gift voucher',             de: 'Geschenkgutschein',         pl: 'Voucher upominkowy' },
    'kon.form.opt_other':  { en: 'Other / I want advice',    de: 'Sonstiges / Ich brauche Beratung', pl: 'Inne / chcę porady' },
    'kon.form.message':    { en: 'Message',                  de: 'Nachricht',                 pl: 'Wiadomość' },
    'kon.form.message_ph': { en: 'Your message (optional)',  de: 'Ihre Nachricht (optional)', pl: 'Twoja wiadomość (opcjonalnie)' },
    'kon.form.submit':     { en: 'Send message',             de: 'Nachricht senden',          pl: 'Wyślij wiadomość' },

    /* End of dictionary */
    '__end__': {}
  };

  /* --- Translation engine -------------------------------------------------- */
  var cLang = 'cs';
  var origMap = new Map();

  function getOrig(el, isHtml) {
    return isHtml ? el.innerHTML : el.textContent;
  }
  function setText(el, val, isHtml) {
    if (isHtml) el.innerHTML = val;
    else el.textContent = val;
  }

  function doTranslate(lang) {
    if (lang === cLang) return;

    /* Text content via data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var d = i18nData[k];
      if (!d) return;
      var isHtml = el.hasAttribute('data-i18n-html') || d.html;
      if (lang === 'cs') {
        if (origMap.has(el)) setText(el, origMap.get(el), isHtml);
      } else {
        if (!origMap.has(el)) origMap.set(el, getOrig(el, isHtml));
        var t = d[lang];
        if (t) setText(el, t, isHtml);
      }
    });

    /* Placeholder via data-i18n-ph */
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      var d = i18nData[k];
      if (!d) return;
      if (lang === 'cs') {
        if (el.dataset.origPh != null) el.placeholder = el.dataset.origPh;
      } else {
        if (el.dataset.origPh == null) el.dataset.origPh = el.placeholder || '';
        if (d[lang]) el.placeholder = d[lang];
      }
    });

    /* alt via data-i18n-alt */
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-alt');
      var d = i18nData[k];
      if (!d) return;
      if (lang === 'cs') {
        if (el.dataset.origAlt != null) el.alt = el.dataset.origAlt;
      } else {
        if (el.dataset.origAlt == null) el.dataset.origAlt = el.alt || '';
        if (d[lang]) el.alt = d[lang];
      }
    });

    /* aria-label via data-i18n-aria */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      var d = i18nData[k];
      if (!d) return;
      if (lang === 'cs') {
        if (el.dataset.origAria != null) el.setAttribute('aria-label', el.dataset.origAria);
      } else {
        if (el.dataset.origAria == null) el.dataset.origAria = el.getAttribute('aria-label') || '';
        if (d[lang]) el.setAttribute('aria-label', d[lang]);
      }
    });

    /* <title> via document with data-i18n-title attribute on <html> */
    var titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey && i18nData[titleKey]) {
      if (lang === 'cs') {
        if (document.documentElement.dataset.origTitle) document.title = document.documentElement.dataset.origTitle;
      } else {
        if (!document.documentElement.dataset.origTitle) document.documentElement.dataset.origTitle = document.title;
        if (i18nData[titleKey][lang]) document.title = i18nData[titleKey][lang];
      }
    }

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switch a').forEach(function (a) {
      a.classList.toggle('lang-active', a.dataset.lang === lang);
    });
    cLang = lang;
    try { localStorage.setItem('refresh_lang', lang); } catch (e) {}
  }

  function init() {
    document.querySelectorAll('.lang-switch a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        doTranslate(a.dataset.lang);
      });
    });
    try {
      var saved = localStorage.getItem('refresh_lang');
      if (saved && saved !== 'cs') doTranslate(saved);
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.i18n = { translate: doTranslate, data: i18nData };
})();
