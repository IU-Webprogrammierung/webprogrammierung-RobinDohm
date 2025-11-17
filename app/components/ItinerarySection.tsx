import Image from "next/image";
import type { CSSProperties } from "react";

type CityPin = {
  name: string;
  href: string;
  position: { x: string; y: string };
};

type ItinerarySectionProps = {
  title: string;
  description: string;
  stops: ReadonlyArray<{ title: string; description: string }>;
  pins: ReadonlyArray<CityPin>;
  mapImage?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export function ItinerarySection({
  title,
  description,
  stops,
  pins,
  mapImage = {
    src: "/svg/mapofjapan.svg",
    width: 547,
    height: 684,
    alt: "Karte von Japan",
  },
}: ItinerarySectionProps) {
  return (
    // Reiseplan links, Karte rechts
    <section
      id="itinerary"
      className="grid gap-6 md:grid-cols-2 md:items-start"
    >
      <div className="space-y-6">
        <h2>{title}</h2>
        <p className="text-base leading-relaxed text-text">{description}</p>
        <ol className="m-0 list-none space-y-4 p-0">
          {stops.map((stop) => (
            <li key={stop.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-text">{stop.title}</h3>
              <p className="text-base leading-relaxed text-text">
                {stop.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div
        className="relative w-full overflow-hidden"
        aria-label="Japan-Karte mit markierten Städten"
      >
        {/* Karte als Image, Pins werden darauf absolute positioniert */}
        <Image
          src={mapImage.src}
          width={mapImage.width}
          height={mapImage.height}
          alt={mapImage.alt}
          className="block h-auto w-full border-0 bg-transparent shadow-none"
        />
        {pins.map((pin) => (
          <a
            key={pin.name}
            href={pin.href}
            style={
              {
                left: pin.position.x,
                top: pin.position.y,
              } as CSSProperties
            }
            className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-primary shadow-card transition-transform duration-200 ease-out hover:scale-125 hover:bg-primary-hover focus-visible:scale-125 focus-visible:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label={pin.name}
            title={pin.name}
          >
            <span className="sr-only">{pin.name}</span>
            {/* Tooltip für die Stadt */}
            <span
              aria-hidden="true"
              className="absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-line bg-surface px-1.5 py-0.5 text-xs leading-tight text-text shadow-card"
            >
              {pin.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
