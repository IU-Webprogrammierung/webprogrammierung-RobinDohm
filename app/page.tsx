import { ItinerarySection } from "@/components/sections/main/ItinerarySection";
import { SplitSection } from "@/components/sections/main/SplitSection";
import { splitSections } from "@/data/split-sections";
import { cityPins, itineraryStops } from "@/data/itinerary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Startseite - Japan Reisebericht",
  description:
    "Begleite uns auf unserer Route durch Japan: 16 Tage, Shinkansen, Tempel und moderne Metropolen.",
  subtitle: "Unsere Highlights von Tokyo bis Osaka.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main" data-page="index" tabIndex={-1}>

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
