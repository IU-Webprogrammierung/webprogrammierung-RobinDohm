import { Hero } from "@/components/Hero";

export default function CityKanazawa() {
  return (
    <main id="kanazawa">
      <div id="main" tabIndex={-1} />
      <Hero
        imageSrc="/img/staedte/kanazawa/hero.avif"
        imageAlt="Der Eingang zum Bahnhof Kanazawa"
        imageSize={{ width: 1351, height: 900 }}
        title={
          <>
            Kanazawa{" "}
            <span className="jp-accent" lang="ja">
              金沢
            </span>
          </>
        }
        subtitle="Die Stadt der Samurai"
      />
    </main>
  );
}
