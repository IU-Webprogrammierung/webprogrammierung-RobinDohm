import { Hero } from "@/components/Hero";

export default function CityTokyo() {
  return (
    <main id="tokyo">
      <div id="main" tabIndex={-1} />
      <Hero
        imageSrc="/img/staedte/tokyo/hero.avif"
        imageAlt="Ausblick aus dem Skytree über Tokyo"
        imageSize={{ width: 1501, height: 900 }}
        title={
          <>
            Tokyo{" "}
            <span className="jp-accent" lang="ja">
              東京
            </span>
          </>
        }
        subtitle="Die größte Stadt der Welt. Hier pulsiert das Leben, Tag und Nacht."
      />
    </main>
  );
}
