import Image from "next/image";

import { geoContent } from "@/data/japan";

export function GeoSection() {
  return (
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
  );
}
