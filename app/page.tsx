import { ItinerarySection } from "@/components/sections/main/ItinerarySection";
import { SplitSection } from "@/components/sections/main/SplitSection";
import { splitSections } from "@/data/split-sections";
import { cityPins, itineraryStops } from "@/data/itinerary";

export default function Home() {
  return (
    <main id="index">
      <div id="main" tabIndex={-1} />

      {/* Lade alle Sektionen gemäß Daten */}
      {splitSections.map((section) => (
        <SplitSection key={section.id} {...section} />
      ))}

      {/* Darstellung der Reiseroute mit Verlauf und interaktiver Karte */}
      <ItinerarySection
        title="Unser Reiseplan"
        description="Wir hatten insgesamt 16 Tage Zeit, um Japan zu erkunden. Unsere Reiseroute führte uns durch mehrere Städte, jede mit ihrem eigenen Charme und ihren einzigartigen Sehenswürdigkeiten. Wir sind dabei zwischen den Städten mit dem Shinkansen, dem berühmten japanischen Hochgeschwindigkeitszug, gereist."
        stops={itineraryStops}
        pins={cityPins}
      />
    </main>
  );
}
