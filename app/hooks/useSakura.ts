"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * useSakura
 * - Steuert Zweige (immer bei Breite >= branchMinWidth) und Petals (nur wenn kein Reduce Motion)
 * - Reagiert auf Breakpoints via matchMedia; SSR-safe über window-Guard
 * - Nutzt requestIdleCallback falls vorhanden, sonst setTimeout als Fallback
 * - Liefert showBranches + Petal-Array mit CSS-Variablen-Werten für das Rendern
 */
// Typen für requestIdleCallback
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

export type SakuraConfig = {
  petalCount?: number;
  branchMinWidth?: number;
  petalMinWidth?: number;
  idleTimeout?: number;
  textures?: string[];
};

 type Petal = {
  id: number;
  x: string;
  size: string;
  rot: string;
  dur: string;
  delay: string;
  spinDur: string;
  texture: string;
};

 const defaultTextures = [
  "/img/sakura_petal_01.avif",
  "/img/sakura_petal_02.avif",
];

export function useSakura(config: SakuraConfig = {}) {
  const {
    petalCount = 20,
    branchMinWidth = 769,
    petalMinWidth = 1150,
    idleTimeout = 1500,
    textures = defaultTextures,
  } = config;

  const [state, setState] = useState<{
    showBranches: boolean;
    petals: Petal[];
  }>({
    showBranches: false,
    petals: [],
  });

  // SSR-Guard: nur im Browser nutzen
  const win =
    typeof window !== "undefined" ? (window as WindowWithIdle) : undefined;
  const requestIdle = useMemo<IdleRequest | undefined>(() => {
    if (!win || typeof win.requestIdleCallback !== "function") return undefined;
    return win.requestIdleCallback.bind(win);
  }, [win]);

  const compute = useCallback(() => {
    if (!win) return;
    const reduceMotion =
      typeof win.matchMedia === "function" &&
      win.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Zweige hängen nur von Breite ab, nicht von reduceMotion
    const branches =
      typeof win.matchMedia === "function" &&
      win.matchMedia(`(min-width: ${branchMinWidth}px)`).matches;
    // Petals nur wenn keine Reduced Motion und Mindestbreite
    const allowPetals =
      !reduceMotion &&
      typeof win.matchMedia === "function" &&
      win.matchMedia(`(min-width: ${petalMinWidth}px)`).matches;

    const count = allowPetals ? petalCount : 0;
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    // Petals mit CSS-Variablenwerten vorbereiten
    const petals: Petal[] = Array.from({ length: count }, (_v, i) => {
      const texture =
        textures[Math.floor(Math.random() * textures.length)] ?? textures[0];
      return {
        id: i,
        x: `${rand(0, 100)}vw`,
        size: `${Math.round(rand(18, 36))}px`,
        rot: `${rand(-30, 30)}deg`,
        dur: `${rand(10, 18)}s`,
        delay: `${rand(-12, 0)}s`,
        spinDur: `${rand(6, 10)}s`,
        texture,
      };
    });

    setState({ showBranches: Boolean(branches), petals });
  }, [win, branchMinWidth, petalMinWidth, petalCount, textures]);

  const scheduleCompute = useCallback(
    (timeout: number) => {
      if (!win) return;
      // Idle bevorzugen, sonst Timeout
      if (requestIdle) {
        requestIdle(() => compute(), { timeout });
      } else {
        setTimeout(() => compute(), 0);
      }
    },
    [compute, requestIdle, win]
  );

  useEffect(() => {
    if (!win) return;
    // Initial ausführen
    scheduleCompute(idleTimeout);

    const mediaQueries = [
      win.matchMedia?.("(prefers-reduced-motion: reduce)"),
      win.matchMedia?.(`(min-width: ${branchMinWidth}px)`),
      win.matchMedia?.(`(min-width: ${petalMinWidth}px)`),
    ].filter(Boolean) as MediaQueryList[];

    // auf Änderungen reagieren
    mediaQueries.forEach((mq) => mq.addEventListener("change", compute));

    return () => {
      mediaQueries.forEach((mq) => mq.removeEventListener("change", compute));
    };
  }, [
    branchMinWidth,
    compute,
    idleTimeout,
    petalMinWidth,
    scheduleCompute,
    win,
  ]);

  return state;
}
