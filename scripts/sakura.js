(() => {
  // Fallende Blütenblätter initialisieren
  function init() {
    const vw = window.innerWidth || document.documentElement.clientWidth || 0;
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const showParticles = vw >= 1150 && !reduceMotion; // Nur bei ≥1150px Breite animieren, außer Reduced Motion
    const COUNT = showParticles ? 20 : 0;

    // Zweige bis zu einer Breite von 768px ausblenden
    if (vw >= 769) {
      const images = document.createElement("div");
      images.className = "sakura-images";
      const left = document.createElement("div");
      left.className = "sakura-bg left";
      const right = document.createElement("div");
      right.className = "sakura-bg right";
      images.append(left, right);
      document.body.appendChild(images);
    }

    // Nur wenn COUNT > 0, Blütenblätter erzeugen
    if (COUNT > 0) {
      const layer = document.createElement("div");
      layer.className = "sakura-layer";
      document.body.appendChild(layer);

      // Hilfsfunktion: Zufallswert im Bereich [min, max]
      const rand = (min, max) => Math.random() * (max - min) + min;
      for (let i = 0; i < COUNT; i++) {
        const petal = document.createElement("span");
        petal.className = "sakura-petal";

        // --x: Startposition in der Breite (Viewport-bezogen, daher vw)
        petal.style.setProperty("--x", `${rand(0, 100)}vw`);

        // --size: visuelle Größe des Blatts in Pixel
        petal.style.setProperty("--size", `${Math.round(rand(18, 36))}px`);

        // --rot: Rotation für leichte Neigung des Blatts
        petal.style.setProperty("--rot", `${rand(-30, 30)}deg`);

        // --dur: Gesamtdauer der Animation
        petal.style.setProperty("--dur", `${rand(10, 18)}s`);

        // --delay: Startverzögerung
        petal.style.setProperty("--delay", `${rand(-12, 0)}s`);

        const inner = document.createElement("span");
        inner.className = "petal-inner";

        // Zufällige Auswahl zwischen zwei Texturen
        const img =
          Math.random() < 0.5
            ? "/public/img/sakura_petal_01.avif"
            : "/public/img/sakura_petal_02.avif";
        inner.style.backgroundImage = `url(${img})`;

        // --spinDur: Rotationsdauer der Blätter um die eigene Achse
        inner.style.setProperty("--spinDur", `${rand(6, 10)}s`);
        petal.appendChild(inner);
        layer.appendChild(petal);
      }
    }
  }

  // Bestehende Effekte entfernen, damit Duplikate bei Resize-Events verhindert werden
  function cleanup() {
    const images = document.querySelector(".sakura-images");
    if (images && images.parentNode) images.parentNode.removeChild(images);
    const layer = document.querySelector(".sakura-layer");
    if (layer && layer.parentNode) layer.parentNode.removeChild(layer);
  }

  //Funktion zum verzögerten Start der Animationen
  function schedule() {
    const run = () => {
      if ("requestIdleCallback" in window) {
        // Führe init (Fallanimation) aus, wenn der Browser Leerlauf hat.
        // timeout garantiert spätestens nach 1500ms.
        window.requestIdleCallback(init, { timeout: 1500 });
      } else {
        // Fallback
        setTimeout(init, 0);
      }
    };

    // Wenn alles bereits geladen (inkl. Bilder/CSS/Fonts):
    if (document.readyState === "complete") {
      run();
    } else {
      // Andernfalls: warte auf vollständiges Laden und starte dann
      window.addEventListener("load", run, { once: true });
    }
  }

  schedule();

  // Auf Fenstergrößenänderungen reagieren mit 500ms Delay
  let sakuraResizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(sakuraResizeTimer);
    sakuraResizeTimer = setTimeout(() => {
      cleanup();
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(init, { timeout: 500 });
      } else {
        setTimeout(init, 0);
      }
    }, 150);
  });
})();
