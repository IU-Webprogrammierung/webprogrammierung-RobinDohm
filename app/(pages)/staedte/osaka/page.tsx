import { Hero } from "@/components/Hero";

export default function CityOsaka() {
  return (
    <main id="osaka">
      <div id="main" tabIndex={-1} />
      <Hero
        imageSrc="/img/staedte/osaka/hero.avif"
        imageAlt="Ein Blick auf den Tsūtenkaku in Osaka"
        imageSize={{ width: 1150, height: 900 }}
        title={
          <>
            Osaka{" "}
            <span className="jp-accent" lang="ja">
              大阪
            </span>
          </>
        }
        subtitle="Die Hauptstadt der japanischen Küche. Essen, Spaß und Shopping."
      />
    </main>
  );
}
