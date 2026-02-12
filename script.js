// RadoIT single-page (DE/PL) language toggle + small helpers
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const email = "radoslawdebosz@gmail.com";
const copyBtn = document.getElementById('copyEmail');
const copyHint = document.getElementById('copyHint');

copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyHint.textContent = currentLang === 'de' ? "E-Mail kopiert ✅" : "E-mail skopiowany ✅";
  } catch {
    copyHint.textContent = currentLang === 'de'
      ? "Kopieren nicht möglich – bitte manuell markieren."
      : "Nie mogę skopiować – zaznacz ręcznie.";
  }
  setTimeout(() => (copyHint.textContent = ""), 2200);
});

const dict = {
  de: {
    "nav.services":"Leistungen",
    "nav.about":"Über mich",
    "nav.contact":"Kontakt",
    "nav.impressum":"Impressum",

    "hero.title":"Zuverlässige IT-Unterstützung – verständlich & individuell",
    "hero.subtitle":"IT-Support, NAS & Family-Backup sowie kleine Softwarelösungen – ruhig, transparent und ohne Verkaufsdruck.",
    "hero.location":"Troisdorf · Rhein-Sieg-Kreis · Online",
    "hero.languages":"Deutsch · Englisch · Polnisch",
    "hero.ctaPrimary":"Kontakt",
    "hero.ctaSecondary":"Leistungen ansehen",

    "card.title":"Kurz & klar",
    "card.b1":"PC-Hilfe (Windows, WLAN, Drucker, Sicherheit)",
    "card.b2":"NAS/Backup (Ugreen, Synology, QNAP)",
    "card.b3":"Software (Java/Spring Boot, Automatisierungen)",
    "card.mail":"✉️ E-Mail schreiben",

    "services.title":"Leistungen",
    "services.subtitle":"Individuell nach Bedarf – verständlich erklärt, transparent und fair.",

    "services.pc.title":"🖥️ PC-Hilfe & IT-Support",
    "services.pc.1":"Windows-Installation & Einrichtung",
    "services.pc.2":"Datenübertragung & Backups",
    "services.pc.3":"Viren- & Malware-Entfernung",
    "services.pc.4":"WLAN, Drucker & Router einrichten",
    "services.pc.5":"PC-Modernisierung & Leistungsoptimierung",
    "services.pc.6":"Gaming-PC-Beratung (kein Hardwareverkauf)",

    "services.nas.title":"☁️ NAS & Family-Backup",
    "services.nas.1":"NAS-Einrichtung (Ugreen, Synology, QNAP)",
    "services.nas.2":"Familien-Ordner & Benutzerrechte",
    "services.nas.3":"Automatische Backups (PC, Laptop, iPhone, Android)",
    "services.nas.4":"Sicherer Fernzugriff",
    "services.nas.5":"WLAN-/Router-Optimierung",
    "services.nas.6":"Einführung & kurze Erklärung",

    "services.web.title":"🌐 SPA · Visitenkarte · Online-CV",
    "services.web.1":"Single-Page-Websites (schnell, modern, mobil)",
    "services.web.2":"Online-Visitenkarten für Freelancer & kleine Firmen",
    "services.web.3":"CV/Portfolio-Seiten (GitHub Pages möglich)",
    "services.web.4":"Mehrsprachig (DE/PL/EN) + Kontaktbereich",
    "services.web.5":"Individuelles Design im Stil deiner Marke",

    "services.soft.title":"💻 Individuelle Softwarelösungen",
    "services.soft.1":"Kleine Web- & interne Tools",
    "services.soft.2":"Automatisierungen & digitale Formulare",
    "services.soft.3":"CSV / Excel / PDF-Exporte",
    "services.soft.4":"REST-Schnittstellen",
    "services.soft.5":"Migration alter Daten",
    "services.soft.6":"Leichte, wartungsarme Lösungen (Java / Spring Boot)",

    "about.title":"Über mich",
    "about.p1":"Hallo! Ich bin Radosław – Softwareentwickler und IT-Praktiker mit einem klaren, lösungsorientierten Ansatz.",
    "about.p2":"Ich arbeite seit Jahren professionell in der IT und unterstütze im Rahmen meiner eigenen Tätigkeit Privatpersonen sowie kleine Unternehmen bei alltäglichen technischen Themen – verständlich, pragmatisch und ohne unnötiges Fachchinesisch.",
    "about.h1":"Wobei ich helfen kann:",
    "about.l1":"einfache Websites und digitale Visitenkarten (klar, schnell umgesetzt, ohne Überladung),",
    "about.l2":"IT-Support und Windows-Systeme (Einrichtung, Ordnung, Sicherheit),",
    "about.l3":"Einrichtung von NAS-Systemen und Backups für Privat- und kleine Geschäftsumgebungen,",
    "about.l4":"kleine Tools und Automatisierungen nach Bedarf (z. B. Datenexporte, CSV/Excel/PDF, einfache Backend-Lösungen).",
    "about.p3":"Ich arbeite lokal in Troisdorf (Deutschland) sowie remote.",
    "about.p4":"Kommunikation auf Deutsch, Polnisch und Englisch.",
    "about.p5":"Sie haben eine konkrete Idee oder ein technisches Problem? Schreiben Sie mir – wir finden eine passende Lösung.",
    "about.f1k":"Arbeitsweise",
    "about.f1v":"ruhig, strukturiert, transparent",
    "about.f2k":"Sprachen",
    "about.f2v":"DE · EN · PL",
    "about.f3k":"Ort",
    "about.f3v":"Troisdorf + Online (Remote)",

    "contact.title":"Kontakt",
    "contact.subtitle":"Kurze Nachricht reicht – ich melde mich schnell zurück.",
    "contact.mailLabel":"E-Mail",
    "contact.phoneLabel":"Telefon",
    "contact.areaLabel":"Ort",
    "contact.areaValue":"Troisdorf / Rhein-Sieg-Kreis & online",
    "contact.ctaMail":"E-Mail schreiben",
    "contact.ctaCopy":"E-Mail kopieren",

    "form.title":"Nachricht senden",
    "form.email":"Deine E-Mail",
    "form.msg":"Nachricht",
    "form.send":"E-Mail-App öffnen",
    "form.note":"Hinweis: Das Formular sendet keine Daten an einen Server – es öffnet deine E-Mail-App (mailto).",

    "impressum.title":"Impressum",
    "impressum.h1":"Angaben gemäß § 5 TMG",
    "impressum.rechtsform":"Rechtsform: Freiberufler",
    "impressum.ustg":"Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).",

    "legal.disclaimerTitle":"Haftungsausschluss",
    "legal.disclaimer":"Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.",
    "legal.linksTitle":"Haftung für Links",
    "legal.links":"Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte wird keine Gewähr übernommen.",
    "legal.copyrightTitle":"Urheberrecht",
    "legal.copyright":"Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
    "legal.privacyTitle":"Datenschutz",
    "legal.privacy":"Diese Website speichert keine personenbezogenen Daten. Bei Kontaktaufnahme per E-Mail werden die übermittelten Daten ausschließlich zur Bearbeitung der Anfrage verwendet.",

    "footer.impressum":"Impressum",
    "footer.contact":"Kontakt"
  },

  pl: {
    "nav.services":"Usługi",
    "nav.about":"O mnie",
    "nav.contact":"Kontakt",
    "nav.impressum":"Impressum",

    "hero.title":"Rzetelna pomoc IT – jasno i bez naciągania",
    "hero.subtitle":"Wsparcie IT, NAS & kopie zapasowe oraz małe rozwiązania programistyczne – spokojnie, transparentnie i bez sprzedażowego podejścia.",
    "hero.location":"Troisdorf · okolice · online",
    "hero.languages":"Polski · Niemiecki · Angielski",
    "hero.ctaPrimary":"Kontakt",
    "hero.ctaSecondary":"Zobacz usługi",

    "card.title":"Szybko i konkretnie",
    "card.b1":"Pomoc PC (Windows, Wi‑Fi, drukarki, bezpieczeństwo)",
    "card.b2":"NAS/backup (Ugreen, Synology, QNAP)",
    "card.b3":"Software (Java/Spring Boot, automatyzacje)",
    "card.mail":"✉️ Napisz e‑mail",

    "services.title":"Usługi",
    "services.subtitle":"Dopasowane do potrzeb – prosto wytłumaczone, uczciwie i bez „ściemy”.",

    "services.pc.title":"🖥️ Pomoc komputerowa & IT",
    "services.pc.1":"Instalacja i konfiguracja Windows",
    "services.pc.2":"Przenoszenie danych i kopie zapasowe",
    "services.pc.3":"Usuwanie wirusów i malware",
    "services.pc.4":"Konfiguracja Wi‑Fi, drukarek i routerów",
    "services.pc.5":"Modernizacja i przyspieszenie komputerów",
    "services.pc.6":"Doradztwo przy składaniu PC (bez sprzedaży sprzętu)",

    "services.nas.title":"☁️ NAS & backup rodzinny",
    "services.nas.1":"Konfiguracja NAS (Ugreen, Synology, QNAP)",
    "services.nas.2":"Przejrzysta struktura folderów i uprawnień",
    "services.nas.3":"Automatyczne kopie zapasowe (PC, laptop, iPhone, Android)",
    "services.nas.4":"Bezpieczny dostęp zdalny",
    "services.nas.5":"Optymalizacja Wi‑Fi / routera",
    "services.nas.6":"Krótkie szkolenie z obsługi",

    "services.web.title":"🌐 SPA · wizytówka · CV online",
    "services.web.1":"Strony single-page (szybkie, nowoczesne, mobilne)",
    "services.web.2":"Wizytówki online dla freelancerów i małych firm",
    "services.web.3":"Strony CV/portfolio (możliwe na GitHub Pages)",
    "services.web.4":"Wersje językowe (PL/DE/EN) + sekcja kontakt",
    "services.web.5":"Indywidualny wygląd dopasowany do Twojej marki",

    "services.soft.title":"💻 Indywidualne rozwiązania programistyczne",
    "services.soft.1":"Proste aplikacje webowe i narzędzia wewnętrzne",
    "services.soft.2":"Automatyzacje i formularze cyfrowe",
    "services.soft.3":"Eksport danych (CSV, Excel, PDF)",
    "services.soft.4":"Integracje systemów (REST API)",
    "services.soft.5":"Migracja starych danych",
    "services.soft.6":"Nowoczesne, lekkie rozwiązania (Java / Spring Boot)",

    "about.title":"O mnie",
    "about.p1":"Cześć! Jestem Radosław — programista i praktyk IT, który lubi rozwiązywać realne problemy w prosty i zrozumiały sposób.",
    "about.p2":"Zawodowo pracuję w IT od lat, a w ramach własnej działalności wspieram osoby prywatne oraz małe firmy w codziennych sprawach związanych z technologią — bez zbędnego żargonu i korporacyjnego podejścia.",
    "about.h1":"W czym mogę pomóc:",
    "about.l1":"proste strony wizytówki i portfolio (szybko, przejrzyście, bez przeładowania),",
    "about.l2":"wsparcie komputerowe i systemy Windows (konfiguracja, porządkowanie, bezpieczeństwo),",
    "about.l3":"konfiguracja NAS i backupów dla domu oraz małych firm,",
    "about.l4":"drobne narzędzia i automatyzacje dopasowane do konkretnych potrzeb (np. eksport danych, CSV/Excel/PDF, proste backendy).",
    "about.p3":"Pracuję lokalnie w Troisdorf (Niemcy) oraz zdalnie.",
    "about.p4":"Obsługuję klientów po polsku, niemiecku i angielsku.",
    "about.p5":"Masz pomysł albo konkretny problem? Napisz — zobaczymy, co da się sensownie zrobić.",
    "about.f1k":"Styl pracy",
    "about.f1v":"spokojnie, konkretnie, transparentnie",
    "about.f2k":"Języki",
    "about.f2v":"PL · DE · EN",
    "about.f3k":"Obszar",
    "about.f3v":"Troisdorf + online (zdalnie)",

    "contact.title":"Kontakt",
    "contact.subtitle":"Wystarczy krótka wiadomość – szybko odpiszę.",
    "contact.mailLabel":"E-mail",
    "contact.phoneLabel":"Telefon",
    "contact.areaLabel":"Miejsce",
    "contact.areaValue":"Troisdorf / okolice & online",
    "contact.ctaMail":"Napisz e‑mail",
    "contact.ctaCopy":"Kopiuj e‑mail",

    "form.title":"Wyślij wiadomość",
    "form.email":"Twój e‑mail",
    "form.msg":"Wiadomość",
    "form.send":"Otwórz aplikację e‑mail",
    "form.note":"Uwaga: formularz nie wysyła danych na serwer – otwiera Twoją aplikację e‑mail (mailto).",

    "impressum.title":"Impressum",
    "impressum.h1":"Dane zgodnie z § 5 TMG",
    "impressum.rechtsform":"Forma działalności: Freiberufler",
    "impressum.ustg":"Zgodnie z § 19 UStG nie jest naliczany VAT (Kleinunternehmer).",

    "legal.disclaimerTitle":"Wyłączenie odpowiedzialności",
    "legal.disclaimer":"Treści tej strony przygotowano z najwyższą starannością, jednak nie można zagwarantować ich kompletności ani aktualności.",
    "legal.linksTitle":"Linki zewnętrzne",
    "legal.links":"Strona może zawierać linki do zewnętrznych serwisów, na których treść nie mamy wpływu.",
    "legal.copyrightTitle":"Prawa autorskie",
    "legal.copyright":"Treści i materiały stworzone przez właściciela strony podlegają niemieckiemu prawu autorskiemu.",
    "legal.privacyTitle":"Ochrona danych",
    "legal.privacy":"Strona nie zapisuje danych osobowych. Dane przesłane e‑mailem służą wyłącznie do obsługi zapytania.",

    "footer.impressum":"Impressum",
    "footer.contact":"Kontakt"
  }
};

let currentLang = (localStorage.getItem('radoit_lang') || '').toLowerCase();
if (!['de','pl'].includes(currentLang)) {
  const browserLang = (navigator.language || '').toLowerCase();
  if (browserLang.startsWith('pl')) {
    currentLang = 'pl';
  } else if (browserLang.startsWith('de')) {
    currentLang = 'de';
  } else {
    currentLang = 'de';
  }
}

const pill = document.getElementById('langPill');
const hint = document.querySelector('.lang__hint');
const toggleBtn = document.getElementById('langToggle');

function applyLang(lang){
  const t = dict[lang];
  document.documentElement.lang = lang === 'de' ? 'de' : 'pl';
  pill.textContent = lang.toUpperCase();
  if (hint) {
    hint.textContent = lang === 'de' ? '/ PL' : '/ DE';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  localStorage.setItem('radoit_lang', lang);
}

toggleBtn?.addEventListener('click', () => {
  currentLang = currentLang === 'de' ? 'pl' : 'de';
  applyLang(currentLang);
});

applyLang(currentLang);

// reveal on scroll
const revealTargets = document.querySelectorAll('.hero, .section, .footer');
revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

// impressum modal
const impressumModal = document.getElementById('impressumModal');
const openImpressumLinks = document.querySelectorAll('[data-open-impressum]');
const closeImpressumEls = document.querySelectorAll('[data-close-impressum]');

function openImpressum(){
  if (!impressumModal) return;
  impressumModal.classList.add('is-open');
  impressumModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeImpressum(){
  if (!impressumModal) return;
  impressumModal.classList.remove('is-open');
  impressumModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

openImpressumLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openImpressum();
  });
});

closeImpressumEls.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    closeImpressum();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && impressumModal?.classList.contains('is-open')) {
    closeImpressum();
  }
});

// mailto form
const form = document.getElementById('mailtoForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const from = document.getElementById('fromEmail').value.trim();
  const msg = document.getElementById('message').value.trim();

  const subject = currentLang === 'de' ? "Anfrage RadoIT" : "Zapytanie RadoIT";
  const body = (currentLang === 'de'
    ? `Hallo,\n\n${msg}\n\nMeine E-Mail: ${from}\n`
    : `Cześć,\n\n${msg}\n\nMój e-mail: ${from}\n`
  );

  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
});

