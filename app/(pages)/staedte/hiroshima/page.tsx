import { Hero } from "@/components/Hero";

export default function CityHiroshima() {
  return (
    <main id="hiroshima">
      <div id="main" tabIndex={-1} />
      <Hero
        imageSrc="/img/staedte/hiroshima/hero.avif"
        imageAlt="Überblick auf den Friedenspark in Hiroshima"
        imageSize={{ width: 1429, height: 900 }}
        title={
          <>
            Hiroshima{" "}
            <span className="jp-accent" lang="ja">
              広島
            </span>
          </>
        }
        subtitle="Bekannt durch die Atombombe. Heute eine lebendige Stadt mit Geschichte und Frieden im Herzen."
      />
    </main>
  );
}
