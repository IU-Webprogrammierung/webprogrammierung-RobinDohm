(() => {
  // Fallende Blütenblätter initialisieren
  function init() {
    // Einfache Mobile-Erkennung über Viewport-Breite (kleine Geräte = weniger Partikel für bessere Performance)
    const isMobile =
      window.matchMedia && window.matchMedia("(max-width: 600px)").matches;
    const COUNT = isMobile ? 10 : 20;

    // Layer für alle dynamischen Blütenblätter
    const layer = document.createElement("div");
    layer.className = "sakura-layer";

    // Container für statische Eckbilder
    const images = document.createElement("div");
    images.className = "sakura-images";

    // Linkes Eckbild
    const imgLeft = document.createElement("div");
    imgLeft.className = "sakura-bg left";

    // Rechtes Eckbild
    const imgRight = document.createElement("div");
    imgRight.className = "sakura-bg right";

    images.appendChild(imgLeft);
    images.appendChild(imgRight);

    // Reihenfolge beachten für z-index
    document.body.appendChild(images);
    document.body.appendChild(layer);

    // Hilfsfunktion: Zufallswert im Bereich [min, max]
    const rand = (min, max) => Math.random() * (max - min) + min;

    // Erzeuge Blütenblätter
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
})();
