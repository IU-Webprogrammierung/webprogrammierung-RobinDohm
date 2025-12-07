# ⚠️ Hinweis zur Dokumentation

Diese README wurde für **Phase 3** umfassend überarbeitet und strukturell neu aufgebaut.  
Viele frühere Optimierungen, technische Entscheidungen und Detailerklärungen aus **Phase 1–2**  
werden hier nicht mehr vollständig abgebildet.

Für eine vollständige, historische Übersicht aller Änderungen und Optimierungen  
wählen Sie bitte die entsprechenden **Releases** im Repository aus und betrachten Sie deren README.md Dateien.

Zur besseren visuellen Darstellung wird [Markdown Live Preview](https://markdownlivepreview.com/) emfohlen.

---

# 🗾 Japan Reisebericht

Ein **Reisebericht** mit Landeskunde, Städten und persönlichen Momenten. Dieses Projekt entsteht im Rahmen des IU-Moduls **Web-Programmierung** und begleitet den Lernprozess von _Vanilla HTML/CSS_ bis hin zu _Next.js_.

---

## 🧭 Projektphasen

| Phase       | Ziel                                                       | Status           |
| :---------- | :--------------------------------------------------------- | :--------------- |
| **Phase 1** | Konzept & responsive Grundstruktur _(mind. 2 Breakpoints)_ | ✅ abgeschlossen |
| **Phase 2** | Feinschliff, Inhalte & Medienintegration                   | ✅ abgeschlossen |
| **Phase 3** | Portierung nach **Next.js** inkl. Tailwind & SEO           | ✅ abgeschlossen |

---

## ✅ Definition of Done

### Phase 1 – Konzept & Grundstruktur

- [x] Alle Seiten (Skeleton) und Navigation vorhanden
- [x] Mindestens ein Grid- oder Flex-Layout je Seite _(Impressum/Datenschutz/Cookies ausgenommen)_
- [x] Breakpoints greifen (360 – 1920 px)
- [x] Konzept-PDF abgelegt und im Repo versioniert

---

### Phase 2 – Feinschliff & Medienintegration

- [x] Vollständige Texte und Inhalte integriert
- [x] Medien (Bilder, Galerien, Timeline) nach Konzept eingebunden
- [x] Responsives Design auf allen Breakpoints getestet (360 – 1920 px)
- [x] Erweiterte Gestaltung mit typografischem Feinschliff und Farbschema
- [x] Barrierefreiheit nach **WCAG 2.1** & **WAI-ARIA** (Semantik, Alternativtexte, Fokusreihenfolge)
- [x] Validierung (HTML & CSS) über W3C Validator erfolgreich
- [x] Accessibility-Check (WCAG 2.1 AA) bestanden
- [x] Performance-Audit (Lighthouse > 90 in allen Kategorien)
- [x] Dokumentation (README & Kommentierung im Code) aktualisiert

---

### Phase 3 – Next.js Portierung & Optimierung

- [x] Projekt nach **Next.js 16+** migriert (App-Router)
- [x] Styling mit **TailwindCSS** implementiert
- [x] Komponentenbasierte Aufteilung (Navigation, Footer, Layouts)
- [x] SEO-Optimierung (Meta-Tags, Open Graph, saubere URLs)
- [x] Erneutes Performance-Audit (Lighthouse > 90 in allen Kategorien)
- [x] WCAG 2.1 AA & WAI-ARIA erneut überprüft
- [x] README final überarbeitet

---

## 🚀 Quickstart (Next.js)

- Voraussetzungen: Node.js 18+, npm.
- Installation: `npm install`
- Dev-Server: `npm run dev` (Standard: http://localhost:3000)
- Lint: `npm run lint`
- Build: `npm run build`
- Start (Prod): `npm start`
- Fontsubset für japanische Schriftzeichen: `npm run subset:yuji` (Eigenes Script zum Subset via subset-font Modul)

---

## 🗂️ Seitenübersicht

- 🏠 **Start** → `/`
- 🗻 **Japan** → `/japan`
- 🏙️ **Städte** → `/staedte/*` _(Tokyo, Kanazawa, Kyoto, Hiroshima, Osaka)_
- 👥 **Wer sind wir** → `/wer-sind-wir`

---

## ⚙️ Technik & Umsetzung

- **Next.js (App Router, TS)** mit Server-/Client components.
- **TailwindCSS** + globale CSS-Token (CSS Custom Properties, clamp()).
- **next/image** für Optimierung (AVIF, lazy, fetchPriority bei Hero).
- **Lokale Webfonts** (Noto Sans/Serif, Yuji Boku, Caveat) via `next/font/local`.
- **ApexCharts (dynamic import)** für interaktive Charts (RisksSection).
- **Eigenes SEO/Meta-Utility** (`lib/seo.ts`) für konsistente Metadata/OG.
- **API-Routen**: `/api/og` für dynamische OG-Images (Edge Runtime).
- **PWA-Bausteine**: `app/manifest.ts`, `app/robots.ts`, `app/sitemap.ts`.
- **Datenhaltung** in `/data` (Texte, Bilder), Komponenten in `/components`.
- **Mobile-first Design**
- **Semantische Struktur** nach HTML5-Standard
- **Barrierefreiheit** gemäß **WCAG 2.1** & **WAI-ARIA**
- **Flexbox & CSS Grid** SplitSections, Timeline, Geo/Food/Risks Sections, ImageRail.
- **Full-Width Hero** (japan/page, wer-sind-wir) mit responsiven Overlays
- **CSS-Variablen** für Farben, Schatten und weitere Einstellungen zur reduzierung von Inline-Stilen.
- **Haupt-Breakpoints (Tailwind)** `md` 768px, `lg` 1024px.

---

## 🧱 Projektstruktur

- `app/` → Seiten (App Router), Layout, API (OG), PWA-Routen (robots, sitemap, manifest).
- `components/` → Header/Footer, Sections, ImageRail, StickyNote, Timeline, etc.
- `data/` → Inhalte (Städte, Texte, Routen).
- `docs/` → Konzept- & Abgabedokumente
- `hooks/` → Eigene Hooks zur Wiederverwendbarkeit.
- `legacy/` → Stand des Projektes vor Umstellung auf Next.js
- `public/` → Bilder, Fonts, Icons, OG-Assets.
- `lib/seo.ts` → Meta/OG Helper.
- `public/` → Bilder, Fonts, Icons, OG-Assets.
- `scripts/` → Eigene Scripte (hier nur für Font Subset)

## 🧩 Interaktionen & Komponenten

- **Header**: Desktop-Navigation mit Städte-Dropdown; Mobile-Menü mit Overlay, Scroll-Lock.
- **Skip-Link**: Fokusierbar, springt direkt auf `<main>`.
- **ImageRail**: Horizontales Karussell mit Buttons, Keyboard-Steuerung, Fokus-Overlay.
- **Städteseite**: Dynamische Routen per `generateStaticParams`, Hero mit JP-Akzent.
- **Itinerary-Karte**: Pins mit Tooltip, Hover/Fokus-Scaling.
- **Sticky Notes / Banners**: dekorative, aber zugängliche Nebeninfos.
- **Charts**: Dynamisch geladen.

## 🖼️ Bildoptimierung

Bilder wurden bereits komprimiert und in passenden Formaten eingebunden. Zusätzlich wird die Next.js Image Komponente an allen Stellen
verwendet (Außer bei Edge Runtimes) um weitere optimierungen der Bilder zu gewährleisten.

- **Automatische Größenoptimierung**

  - Next.js generiert mehrere responsive Varianten.
  - Immer die kleinste passende Bildgröße wird ausgeliefert.

- **Serverseitige Kompression**

  - Dynamische Optimierung der Bildqualität.
  - Reduzierte Dateigrößen ohne merklichen Qualitätsverlust.

- **Lazy Loading**

  - Bilder außerhalb des Viewports werden automatisch verzögert geladen.

- **Kein Layout Shift**

  - Feste `width`/`height` oder `fill` verhindern CLS-Probleme.

- **Steuerbare Ladepriorität**

  - `fetchPriority="high"` für LCP-Bilder.
  - `loading="lazy"` für sekundäre Bilder.

- **Optimiertes Caching**

  - CDN- und Browser-Caching für alle generierten Bildvarianten.

- **Blur-/Shimmer-Placeholder**

  - Flüssiges Laden dank `"blur"`-Placeholder oder Shimmer-Effekt.

- **Domain-Sicherheit**

  - Nur in `next.config.js` erlaubte Domains dürfen geladen werden.

- **Saubere SVG-Behandlung**

  - SVGs werden unverändert und ohne unnötige Optimierung direkt ausgeliefert.

- **HiDPI-/Retina-Unterstützung**
  - Automatisch generierte 2x/3x Varianten für scharfe Darstellung.

### Umsetzung in diesem Projekt

Dabei wurden in diesem Projekt hauptsächlich folgende Punkte gezielt genutzt:

- next/image mit festen `width/height` zur CLS-Vermeidung, lazy loading.
- Hero-Bilder mit `priority`/`fetchPriority=high`.
- AVIF eingesetzt → PNG/JPG nur wo nötig.

---

## ♿ Barrierefreiheit (WCAG 2.1 AA, WAI-ARIA)

- Semantische Struktur: `<main>`, Überschriften-Hierarchie, Listen.
- Skip-Link auf `#main`, `tabIndex={-1}` für Fokusaufnahme.
- Fokus-Stile mit sichtbarem Outline, Farbkontrast via Theme-Tokens.
- ARIA-Labels für Navigation, Dropdown (`aria-expanded`, `aria-controls`), Karte, Pins, Karussell (`role="region"`).
- Charts: `role="group"` mit `aria-labelledby` + `sr-only` Beschreibungen.
- Alternativtexte für Bilder, `lang="ja"` für japanische Schriftzüge.
- Tastatur-Navigation: Mobile-Menü ESC, ImageRail Pfeiltasten, Fokusfallen vermieden.

---

## 🔍 SEO, Meta & Crawler

- Zentrales `buildMetadata` (Title, Description, OG/Twitter, Canonical, metadataBase).
- Dynamische OG-Bilder über `/api/og?title=…&subtitle=…` (Edge); Query-Handling robust gegen `&amp;`.
- `app/robots.ts`: Allow `/`, `/api/og`, Disallow technische Pfade; Sitemap-/Host-Links aus `NEXT_PUBLIC_SITE_URL`.
- `app/sitemap.ts`: Routen (Start, Japan, Wer-sind-wir, Rechtstexte, Städte) mit eigener changeFrequency/Priority.
- Manifest (`app/manifest.ts`): Name/Shortname, Icons (192–512, maskable), Theme/Background, Lang `de`.

---

## 📚 Quellen & Lernressourcen

Diese Projektarbeit entstand durch eigenständiges Lernen aus verschiedenen offenen Quellen:

- 🧾 [Markdown Guide](https://www.markdownguide.org/) - für Struktur & Syntax der README.md
- 🎓 [Kevin Powell - YouTube](https://www.youtube.com/@KevinPowell) - moderne CSS-Techniken & Responsive Design
- 🧠 [MDN Web Docs](https://developer.mozilla.org/de/) - offizielle Referenz zu HTML, CSS und ARIA-Rollen
- 🔍 [W3C Validator](https://validator.w3.org/) & [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/) - Validierung und Barrierefreiheitsstandards
- 🪶 [CSS Tricks](https://css-tricks.com/) - Inspirationen zu Layout-Mustern (Flexbox/Grid)
- 💨 [TailwindCSS](https://tailwindcss.com/) - Dokumentation & Utility-First-Konzept für Phase 3
- ⚛️ [Next.js](https://nextjs.org/docs) - offizielle Dokumentation für Routing, Rendering und Performance-Optimierung
- 📝 [Conventional Commit Messages](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13) - Leitbild für Commit Messages

### 📘 Fachliteratur

- Hahn, M. (2024). _Webdesign - Das Handbuch zur Webgestaltung_ (4. Aufl.). Rheinwerk Verlag. ISBN 978-3-367-10030-9
- Erlhofer, S. & Brenner, D. (2019). _Website-Konzeption und Relaunch_ (2. Aufl.). Rheinwerk Verlag. ISBN 978-3-8362-7141-7
- Jacobsen, J. & Meyer, L. (2017). _Praxisbuch Usability und UX978-3-8362-4423-7_. Rheinwerk Verlag. ISBN 978-3-8362-4423-7
- Erlhofer, S. (2023). _Suchmaschinen-Optimierung_(11. Aufl.). Rheinwerk Verlag. ISBN 978-3-8362-9169-9

### ✨ Inspirationen

- [Sticky Note von David Brandon](https://codepen.io/dillonbrady/pen/EgRoZQ) - Transform und Schatten für die Stickynote Componente
- [How to load HTML from another page with vanilla JavaScript](https://gomakethings.com/how-to-load-html-from-another-page-with-vanilla-javascript/) - Grundlage für meinen Componenten-Loader ohne jQuery
- [Making keyboard navigation more accessible with JavaScript ‘focus traps’ by Benjamin Kroll](https://www.mugo.ca/Blog/Making-keyboard-navigation-more-accessible-with-JavaScript-focus-traps) - Grundlage für meine Fokus-Trap in der nav.js

---

© 2025 Robin Dohm
