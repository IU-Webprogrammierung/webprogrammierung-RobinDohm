"use client";

import { useEffect } from "react";

type IdleDeadline = {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
};

type IdleOptions = { timeout?: number };
type IdleCallback = (deadline: IdleDeadline) => void;
type IdleRequest = (callback: IdleCallback, options?: IdleOptions) => number;
type IdleCancel = (handle: number) => void;
type WindowWithIdle = Window & {
  requestIdleCallback?: IdleRequest;
  cancelIdleCallback?: IdleCancel;
};

export function SakuraOverlay() {
  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    const win = window as WindowWithIdle;
    const requestIdle: IdleRequest | undefined =
      typeof win.requestIdleCallback === "function"
        ? win.requestIdleCallback.bind(win)
        : undefined;

    const cleanup = () => {
      const images = document.querySelector(".sakura-images");
      images?.parentNode?.removeChild(images);
      const layer = document.querySelector(".sakura-layer");
      layer?.parentNode?.removeChild(layer);
    };

    const init = () => {
      if (cancelled) return;
      const vw = window.innerWidth || document.documentElement.clientWidth || 0;
      const reduceMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const showParticles = vw >= 1150 && !reduceMotion;
      const COUNT = showParticles ? 20 : 0;

      // Zweige erst ab Tablet-Plus anzeigen
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

      // Fallende Blätter nur, wenn gewünscht
      if (COUNT > 0) {
        const layer = document.createElement("div");
        layer.className = "sakura-layer";
        document.body.appendChild(layer);

        const rand = (min: number, max: number) =>
          Math.random() * (max - min) + min;

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
          const img =
            Math.random() < 0.5
              ? "/img/sakura_petal_01.avif"
              : "/img/sakura_petal_02.avif";
          inner.style.backgroundImage = `url(${img})`;
          inner.style.setProperty("--spinDur", `${rand(6, 10)}s`);
          petal.appendChild(inner);
          layer.appendChild(petal);
        }
      }
    };

    const scheduleInit = () => {
      const run = () => {
        cleanup();
        if (requestIdle) {
          requestIdle(
            () => {
              if (!cancelled) init();
            },
            { timeout: 1500 }
          );
        } else {
          setTimeout(() => {
            if (!cancelled) init();
          }, 0);
        }
      };

      if (document.readyState === "complete") {
        run();
      } else {
        window.addEventListener("load", run, { once: true });
      }
    };

    scheduleInit();

    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cleanup();
        if (requestIdle) {
          requestIdle(
            () => {
              if (!cancelled) init();
            },
            { timeout: 500 }
          );
        } else {
          setTimeout(() => {
            if (!cancelled) init();
          }, 0);
        }
      }, 150);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      cleanup();
    };
  }, []);

  return null;
}
