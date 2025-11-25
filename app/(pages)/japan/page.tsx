"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { cultureContent, geoContent } from "@/data/japan";
import { ImageRail } from "@/components/ImageRail";

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

      {/* Geografie & Natur */}
      <section
        id="jp-geo"
        className="grid py-custom gap-4 text-text md:grid-cols-2 md:items-center"
      >
        {/* Text – mobile oben, md über beide Spalten, lg rechts oben */}
        <div className="space-y-4 md:col-span-2 lg:col-span-1 lg:col-start-2">
          <h2>{geoContent.heading}</h2>
          {geoContent.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {/* Facts – mobile unter Text, md rechts, lg rechts unten */}
        <div className="space-y-4 p-4 md:col-start-2 lg:col-start-2">
          <h3 className="text-lg font-semibold">Kurzinfos</h3>
          <ul className="list-disc space-y-2 pl-4">
            {geoContent.facts.map((fact, index) => (
              <li key={`jp-geo-paragraph-${index + 1}`}>{fact}</li>
            ))}
          </ul>
        </div>

        {/* Bild – mobile unten, md unten links, lg links über 2 Zeilen */}
        <div className="overflow-hidden md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-stretch">
          <Image
            src={geoContent.image.src}
            alt={geoContent.image.alt}
            width={geoContent.image.width}
            height={geoContent.image.height}
            className="w-full object-cover h-auto md:h-full"
            priority
          />
        </div>
      </section>

      {/* Kultur & Gesellschaft */}
      <section id="jp-culture">
        <h2>{cultureContent.heading}</h2>
        {cultureContent.paragraphs.map((p, index) => (
          <p className="py-2" key={`jp-culture-paragraph-${index + 1}`}>
            {p}
          </p>
        ))}
        <ImageRail images={cultureContent.images} />
      </section>
    </main>
  );
}
