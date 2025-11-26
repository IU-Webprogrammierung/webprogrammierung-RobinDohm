"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ImageRail } from "@/components/ImageRail";
import { StickyNote } from "@/components/StickyNote";
import { cultureContent, geoContent, foodContent } from "@/data/japan";

export default function Japan() {
  const [foodImg1, foodImg2, foodImg3] = foodContent.images;

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

      {/* Kulinarik */}
      <section id="jp-food" className="py-custom text-text">
        <h2>{foodContent.heading}</h2>

        <div className="grid auto-rows-min gap-4 space-y-4 items-center md:grid-cols-3 lg:grid-cols-12">
          {/* Textblock 1: paragraphs[0..2] */}
          <div className="space-y-3 md:col-span-2 lg:col-span-8 lg:col-start-1">
            {foodContent.paragraphs.slice(0, 3).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Bild 1 + Sticky Note */}
          <div className="relative md:col-span-1 lg:col-span-4 lg:col-start-9">
            <StickyNote className="w-[95%] -mb-6 mx-auto md:w-auto md:mx-0 md:absolute md:-top-14 md:right-0 md:max-w-[180px]">
              {foodContent.note}
            </StickyNote>
            <Image
              src={foodImg1.src}
              alt={foodImg1.alt}
              width={foodImg1.width}
              height={foodImg1.height}
              className="w-full h-auto"
            />
          </div>

          {/* Textblock 2: paragraphs[3..5] */}
          <div className="space-y-3 md:col-span-2 md:row-start-2 lg:col-span-8 lg:col-start-5 lg:row-start-2">
            {foodContent.paragraphs.slice(3, 6).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Bild 2 */}
          <div className="md:col-span-1 md:row-start-2 lg:col-span-4 lg:col-start-1 lg:row-start-2">
            <Image
              src={foodImg2.src}
              alt={foodImg2.alt}
              width={foodImg2.width}
              height={foodImg2.height}
              className="w-full h-auto"
            />
          </div>

          {/* Textblock 3: paragraphs[6..8] */}
          <div className="space-y-3 md:col-span-2 md:row-start-3 lg:col-span-8 lg:col-start-1 lg:row-start-3">
            {foodContent.paragraphs.slice(6, 9).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Bild 3 */}
          <div className="md:col-span-1 md:row-start-3 lg:col-span-4 lg:col-start-9 lg:row-start-3">
            <Image
              src={foodImg3.src}
              alt={foodImg3.alt}
              width={foodImg3.width}
              height={foodImg3.height}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
