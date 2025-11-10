(function () {
  function initNav() {
    const btnOpen = document.querySelector(".nav-toggle");
    const menu = document.querySelector("#mobile-menu");
    const btnClose = document.querySelector(".nav-close");

    // Abbruch: fehlende Elemente
    if (!btnOpen || !menu) return;
    // Abbruch: Listener bereits gesetzt
    if (menu.dataset.navBound === "1") return;

    // Menü öffnen Funktion
    function openMenu() {
      // Menü sichtbar und überlagert anzeigen
      menu.hidden = false;
      menu.style.display = "grid";
      menu.style.position = "fixed";
      menu.style.zIndex = "1000";

      // Aktuelle Scroll-Position merken und Body fixieren
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      document.body.dataset.lockScrollY = String(y);
      document.body.style.position = "fixed";
      document.body.style.top = "-" + y + "px";
      document.body.style.width = "100%";

      // Verhindert Layout-Sprung beim Schließen durch Scrollbar
      document.documentElement.style.overflowY = "scroll";

      // Zustand setzen
      document.body.classList.add("menu-open");

      // ARIA-Status aktualisieren
      btnOpen.setAttribute("aria-expanded", "true");
      btnOpen.setAttribute("aria-label", "Menue schliessen");

      // Fokus auf erstes interaktives Element im Menü setzen
      const first = menu.querySelector("a, button");
      if (first) first.focus();
    }

    // Menü schließen Funktion
    function closeMenu() {
      // Menü ausblenden und Inline-Styles zurücksetzen
      menu.hidden = true;
      menu.style.display = "";
      menu.style.position = "";
      menu.style.zIndex = "";

      // Scrolling entsperren und ursprüngliche Position wiederherstellen
      const y = parseInt(document.body.dataset.lockScrollY || "0", 10);
      document.body.classList.remove("menu-open");
      document.documentElement.style.overflowY = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (!isNaN(y)) window.scrollTo(0, y);

      // ARIA-Status aktualisieren
      btnOpen.setAttribute("aria-expanded", "false");
      btnOpen.setAttribute("aria-label", "Menue oeffnen");

      // Fokus zurück auf Öffnen-Button
      btnOpen.focus();
    }

    // Menü umschalten Funktion (Switch zwischen offen/geschlossen)
    function toggleMenu() {
      if (menu.hidden) openMenu();
      else closeMenu();
    }

    // Schließe das Menü bei Klick auf Schließen-BTN
    btnOpen.addEventListener("click", toggleMenu);
    if (btnClose) btnClose.addEventListener("click", closeMenu);

    // Schließe das Menü bei ESC-Tasten nutzung
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !menu.hidden) closeMenu();
    });

    // Schließe das Menü wenn Mobile-Menü versteck wird
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      if (e.matches && !menu.hidden) {
        closeMenu();
      }
    });

    menu.dataset.navBound = "1";
  }

  function markActiveNav() {
    try {
      var activeAttr =
        document.documentElement.getAttribute("data-active") || "";

      // Keys via "|" aufsplitten, trimmen und leere entfernen
      var keys = activeAttr
        .split("|")
        .map(function (k) {
          return k.trim();
        })
        .filter(Boolean);

      if (!keys.length) return;

      // Vorherige Zustände zurücksetzen
      document.querySelectorAll("[data-nav]").forEach(function (el) {
        el.classList.remove("active");
      });

      // Für jeden Key passende Elemente aktiv setzen
      keys.forEach(function (key) {
        var sel = '[data-nav="' + key + '"]';
        document.querySelectorAll(sel).forEach(function (el) {
          el.classList.add("active");
        });
      });
    } catch (e) {}
  }

  // Globale Bereitstellung: spätes Initialisieren durch nachgeladenen Header/Mobile-Navigation
  window.initNav = initNav;
  window.markActiveNav = markActiveNav;

  // Initiale Ausführung nach DOM-Bereitstellung
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        initNav();
        markActiveNav();
      },
      { once: true }
    );
  } else {
    initNav();
    markActiveNav();
  }
})();
