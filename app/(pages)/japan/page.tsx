import { Hero } from "@/components/Hero";
import { RisksSection } from "@/components/sections/japan/RisksSection";
import { FoodSection } from "@/components/sections/japan/FoodSection";
import { CultureSection } from "@/components/sections/japan/CultureSection";
import { GeoSection } from "@/components/sections/japan/GeoSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Japan - Zwischen Tradition und Hightech",
  description:
    "Geografie, Kultur, Essen und Herausforderungen in Japan: unser Blick auf ein Land voller Gegensätze.",
  subtitle: "Eine Übersicht über Japans Vielfalt.",
  path: "/japan",
});

export default function Japan() {
  return (
    <main id="main" data-page="japan" tabIndex={-1}>
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
      <GeoSection />

      {/* Kultur & Gesellschaft */}
      <CultureSection />

      {/* Kulinarik */}
      <FoodSection />

      {/* Naturgewalt & Herausforderungen */}
      <RisksSection />
    </main>
  );
}
