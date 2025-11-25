"use client";

import { Hero } from "@/components/Hero";

export default function Japan() {
  return (
    <main id="japan">
      <div id="main" tabIndex={-1} />

      <Hero
        imageSrc="/img/japan/hero.avif"
        imageAlt="Japanische Landschaft mit Bergen"
        imageSize={{ width: 1396, height: 900 }}
        title={
          <>
            Japan{" "}
            <span className="jp-accent" lang="ja">
              日本
            </span>{" "}
            - Ein Land voller Gegensätze
          </>
        }
        subtitle="Zwischen Tradition und Hightech, Zen-Gärten und Vulkanen - Japan
            fasziniert auf besondere Weise"
      />
    </main>
  );
}
