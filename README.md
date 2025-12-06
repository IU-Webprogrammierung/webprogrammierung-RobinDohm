# 🗾 Japan Reisebericht

Ein **Reisebericht** mit Landeskunde, Städten und persönlichen Momenten. Dieses Projekt entsteht im Rahmen des IU-Moduls **Web-Programmierung** und begleitet den Lernprozess von _Vanilla HTML/CSS_ bis hin zu _Next.js_.

---

## 🧭 Projektphasen

| Phase       | Ziel                                                       | Status           |
| :---------- | :--------------------------------------------------------- | :--------------- |
| **Phase 1** | Konzept & responsive Grundstruktur _(mind. 2 Breakpoints)_ | ✅ abgeschlossen |
| **Phase 2** | Feinschliff, Inhalte & Medienintegration                   | ✅ abgeschlossen |
| **Phase 3** | Portierung nach **Next.js** inkl. Tailwind & SEO           | 🚧 in Arbeit     |

---

## 🗂️ Seitenübersicht

- 🏠 **Start** → `/pages/index.html`
- 🗻 **Japan** → `/pages/japan.html`
- 🏙️ **Städte** → `/pages/staedte/*.html` _(Tokyo, Kanazawa, Kyoto, Hiroshima, Osaka)_
- 👥 **Wer sind wir** → `/pages/wer-sind-wir.html`

---

## ⚙️ Technik & Umsetzung

- **Vanilla HTML/CSS** (ohne Frameworks)
- **Semantische Struktur** nach HTML5-Standard
- **Barrierefreiheit** gemäß **WCAG 2.1** & **WAI-ARIA**
- **Flexbox & CSS Grid** für Layouts
- **Mobile-first Design**
- **Breakpoints:** 640/768 px (Tablet), 1024 px (Desktop)
- **Zukunft:** Migration zu Next.js + TailwindCSS

---

## 🧱 Projektstruktur

- /pages → HTML-Seiten
- /styles → Base-, Layout- & Komponenten-CSS
- /public/img → Bilder & Medien
- /docs → Konzept- & Abgabedokumente

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
- [ ] SEO-Optimierung (Meta-Tags, Open Graph, saubere URLs)
- [ ] Erneutes Performance-Audit (Lighthouse > 90 in allen Kategorien)
- [ ] WCAG 2.1 AA & WAI-ARIA erneut überprüft
- [ ] Finales README mit Deployment-Hinweis und Screenshots ergänzt

---

## 🖼️ Bildoptimierung

Bilder wurden bereits komprimiert und in passenden Formaten eingebunden, dennoch bestehen weitere Optimierungsmöglichkeiten für Performance und LCP.

---

### ✅ Aktueller Stand

- Verwendung moderner Formate: **AVIF / WEBP** (JPG/PNG nur wo nötig)
- Kompression optimiert, ohne sichtbaren Qualitätsverlust
- Bilder auf **maximale Darstellungsgröße** skaliert
- Mobile/Desktop-Varianten an ausgewählten Stellen
- Preloading für wichtige Hero-Bilder
- Vermeidung von Layout Shift durch feste `width`/`height`, `lazy` + `async`

---

### 🔍 Mögliche Erweiterungen

| Ansatz                             | Ziel                                        |
| ---------------------------------- | ------------------------------------------- |
| Responsive `srcset`/`sizes`        | Geräteabhängig die passende Bildgröße laden |
| `<picture>` mit AVIF/WEBP-Fallback | Bessere Formatsteuerung                     |
| Blur-Placeholders                  | Sanfterer Ladeeindruck                      |
| `image-set()` für CSS-Backgrounds  | Responsive Hintergründe analog zu `<img>`   |
| Strikte Caching-Strategie          | Bessere Wiederverwendung im Browser         |

---

### Beispiel für **`srcset`/`sizes` umzusetzen**

```html
<img
  src="hero-768.avif"
  srcset="
    hero-480.avif   480w,
    hero-768.avif   768w,
    hero-1200.avif 1200w,
    hero-1600.avif 1600w
  "
  sizes="(max-width: 600px) 100vw,
         (max-width: 1024px) 80vw,
         1200px"
  alt="Herobild"
  width="1200"
  height="800"
  loading="lazy"
  decoding="async"
/>
```

### Beispiel für **`srcset`/`sizes`** mit `picture`

```html
<picture>
  <source type="image/avif" srcset="hero-768.avif 768w, hero-1200.avif 1200w" />
  <source type="image/webp" srcset="hero-768.webp 768w, hero-1200.webp 1200w" />
  <img
    src="hero-1200.jpg"
    alt="Herobild"
    width="1200"
    height="800"
    loading="lazy"
    decoding="async"
  />
</picture>
```

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
