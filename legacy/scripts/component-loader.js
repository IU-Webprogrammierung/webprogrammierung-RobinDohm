// Lade die Componenten asynchron (ohne jQuery)
// Diese Datei injiziert Header, Mobile-Navigation und Footer
// und initialisiert danach die Navigation/Active-State-Logik.
(function () {
  function inject(selector, url) {
    var el = document.querySelector(selector);
    if (!el) return Promise.resolve();
    return fetch(url, { credentials: "same-origin" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(function (html) {
        el.innerHTML = html;
      });
  }

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  onReady(function () {
    Promise.all([
      inject("header.site-header", "/components/header.html"),
      inject("#mobile-menu", "/components/mobile_nav.html"),
    ])
      .then(function () {
        if (window.initNav) window.initNav();
        if (window.markActiveNav) window.markActiveNav();
        return inject("footer.site-footer", "/components/footer.html");
      })
      .catch(function (e) {
        console.warn("Component load failed", e);
      });
  });
})();

