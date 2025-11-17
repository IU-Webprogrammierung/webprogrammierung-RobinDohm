(function () {
  const rail = document.querySelector(".img-rail");
  if (!rail) return;

  const strip = rail.querySelector(".img-strip");
  const prev = rail.querySelector(".img-btn-prev");
  const next = rail.querySelector(".img-btn-next");

  function step() {
    const first = strip.children[0];
    if (!first) return 300;
    const style = getComputedStyle(strip);
    const gap = parseFloat(style.columnGap || style.gap || 0);
    return first.getBoundingClientRect().width + gap;
  }

  function scrollByDir(dir) {
    strip.scrollBy({ left: dir * step(), behavior: "smooth" });
  }

  prev?.addEventListener("click", () => scrollByDir(-1));
  next?.addEventListener("click", () => scrollByDir(1));
})();
