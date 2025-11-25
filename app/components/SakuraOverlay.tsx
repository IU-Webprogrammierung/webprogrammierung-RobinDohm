"use client";

import { CSSProperties } from "react";
import { useSakura } from "../hooks/useSakura";

export function SakuraOverlay() {
  const { showBranches, petals } = useSakura();

  return (
    <>
      {showBranches && (
        <div className="sakura-images" aria-hidden="true">
          <div className="sakura-bg left" />
          <div className="sakura-bg right" />
        </div>
      )}

      {petals.length > 0 && (
        <div className="sakura-layer" aria-hidden="true">
          {petals.map((petal) => (
            <span
              key={petal.id}
              className="sakura-petal"
              style={{
                "--x": petal.x,
                "--size": petal.size,
                "--rot": petal.rot,
                "--dur": petal.dur,
                "--delay": petal.delay,
              } as CSSProperties}
            >
              <span
                className="petal-inner"
                style={{
                  backgroundImage: `url(${petal.texture})`,
                  "--spinDur": petal.spinDur,
                } as CSSProperties}
              />
            </span>
          ))}
        </div>
      )}
    </>
  );
}
