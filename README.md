# 🗾 Japan Reisebericht

Ein **Reisebericht** mit Landeskunde, Städten und persönlichen Momenten. Dieses Projekt entsteht im Rahmen des IU-Moduls **Web-Programmierung** und begleitet den Lernprozess von _Vanilla HTML/CSS_ bis hin zu _Next.js_.

---

## 🧭 Projektphasen

| Phase       | Ziel                                                       | Status           |
| :---------- | :--------------------------------------------------------- | :--------------- |
| **Phase 1** | Konzept & responsive Grundstruktur _(mind. 2 Breakpoints)_ | ✅ abgeschlossen |
| **Phase 2** | Feinschliff, Inhalte & Medienintegration                   | 🚧 in Arbeit     |
| **Phase 3** | Portierung nach **Next.js** inkl. Tailwind & SEO           | ⏳ geplant       |

---

## 🗂️ Seitenübersicht

- 🏠 **Start** → `/pages/index.html`
- 🗻 **Japan** → `/pages/japan.html`
- 🏙️ **Städte** → `/pages/staedte/*` _(Tokyo, Kanazawa, Kyoto, Hiroshima, Osaka)_
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

- [] Alle Seiten (Skeleton) und Navigation vorhanden
- [x] Mindestens ein Grid- oder Flex-Layout je Seite _(Impressum/Datenschutz/Cookies ausgenommen)_
- [x] Breakpoints greifen (360 – 1920 px)
- [x] Konzept-PDF abgelegt und im Repo versioniert

---

### Phase 2 – Feinschliff & Medienintegration

- [ ] Vollständige Texte und Inhalte integriert
- [ ] Medien (Bilder, Galerien, Timeline) nach Konzept eingebunden
- [ ] Responsives Design auf allen Breakpoints getestet (360 – 1920 px)
- [ ] Erweiterte Gestaltung mit typografischem Feinschliff und Farbschema
- [ ] Barrierefreiheit nach **WCAG 2.1** & **WAI-ARIA** (Semantik, Alternativtexte, Fokusreihenfolge)
- [ ] Validierung (HTML & CSS) über W3C Validator erfolgreich
- [ ] Accessibility-Check (WCAG 2.1 AA) bestanden
- [ ] Dokumentation (README & Kommentierung im Code) aktualisiert

---

### Phase 3 – Next.js Portierung & Optimierung

- [ ] Projekt nach **Next.js 15+** migriert (App-Router)
- [ ] Styling mit **TailwindCSS** implementiert
- [ ] Komponentenbasierte Aufteilung (Navigation, Footer, Layouts)
- [ ] SEO-Optimierung (Meta-Tags, Open Graph, saubere URLs)
- [ ] Performance-Audit (Lighthouse > 90 in allen Kategorien)
- [ ] WCAG 2.1 AA & WAI-ARIA erneut überprüft
- [ ] Finales README mit Deployment-Hinweis und Screenshots ergänzt

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

---

© 2025 Robin Dohm
