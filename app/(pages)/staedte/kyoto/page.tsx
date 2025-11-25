import { Hero } from "@/components/Hero";

export default function CityKyoto() {
  return (
    <main id="kyoto">
      <div id="main" tabIndex={-1} />
      <Hero
        imageSrc="/img/staedte/kyoto/hero.avif"
        imageAlt="Ein Überlick über Kyoto bei Nacht"
        imageSize={{ width: 1350, height: 900 }}
        title={
          <>
            Kyoto{" "}
            <span className="jp-accent" lang="ja">
              京都
            </span>
          </>
        }
        subtitle="Die ehmalige Kaiserstadt Japans. Tradition und Moderne treffen hier aufeinander."
      />
    </main>
  );
}
