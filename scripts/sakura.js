(() => {
  const COUNT = 20;
  const layer = document.createElement("div");
  layer.className = "sakura-layer";
  // Background corner images (provided PNGs)
  const images = document.createElement("div");
  images.className = "sakura-images";
  const imgLeft = document.createElement("div");
  imgLeft.className = "sakura-bg left";
  const imgRight = document.createElement("div");
  imgRight.className = "sakura-bg right";
  images.appendChild(imgLeft);
  images.appendChild(imgRight);
  document.body.appendChild(images);
  document.body.appendChild(layer);
  const rand = (min, max) => Math.random() * (max - min) + min;

  for (let i = 0; i < COUNT; i++) {
    const petal = document.createElement("span");
    petal.className = "sakura-petal";
    petal.style.setProperty("--x", `${rand(0, 100)}vw`);
    petal.style.setProperty("--size", `${Math.round(rand(18, 36))}px`);
    petal.style.setProperty("--rot", `${rand(-30, 30)}deg`);
    petal.style.setProperty("--dur", `${rand(10, 18)}s`);
    petal.style.setProperty("--delay", `${rand(-12, 0)}s`);

    const inner = document.createElement("span");
    inner.className = "petal-inner";
    const img = Math.random() < 0.5
      ? "/public/img/sakura_petal_01.png"
      : "/public/img/sakura_petal_02.png";
    inner.style.backgroundImage = `url(${img})`;
    inner.style.setProperty("--spinDur", `${rand(6, 10)}s`);
    petal.appendChild(inner);

    layer.appendChild(petal);
  }
})();
