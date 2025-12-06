import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { citySlugs, getCityBySlug } from "@/data/cities";
import { CityOverviewSection } from "@/components/sections/staedte/CityOverviewSection";

type CityPageParams = Promise<{ city: string }>;

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export default async function CityPage({ params }: { params: CityPageParams }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) {
    notFound();
  }

  const { hero, overview } = city;

  return (
    <main id={city.slug}>
      <div id="main" tabIndex={-1} />
      <Hero
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
        imageSize={hero.imageSize}
        title={
          <>
            {hero.title}{" "}
            <span className="jp-accent" lang="ja">
              {hero.titleAccent}
            </span>
          </>
        }
        subtitle={hero.subtitle}
      />

      <CityOverviewSection
        heading={overview.heading}
        paragraphs={overview.paragraphs}
        infoTitle={overview.infoTitle}
        infoItems={overview.infoItems}
      />
    </main>
  );
}
