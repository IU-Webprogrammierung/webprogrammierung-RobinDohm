import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { citySlugs, getCityBySlug } from "@/data/cities";
import { OverviewSection } from "@/components/sections/staedte/OverviewSection";
import { ExperiencesSection } from "@/components/sections/staedte/ExperiencesSection";
import { ImageRail } from "@/components/ImageRail";
import { buildMetadata } from "@/lib/seo";

type CityPageParams = Promise<{ city: string }>;

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: CityPageParams }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return buildMetadata({
    title: `${city.hero.title} - Japan Reisebericht`,
    description: city.hero.subtitle,
    subtitle: city.overview.heading,
    path: `/staedte/${city.slug}`,
  });
}

export default async function CityPage({ params }: { params: CityPageParams }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) {
    notFound();
  }

  const { hero, overview, experience, images } = city;

  return (
    <main id="main" data-page={city.slug} tabIndex={-1}>

      {/* Hero */}
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

      {/* Übersicht */}
      <OverviewSection
        heading={overview.heading}
        paragraphs={overview.paragraphs}
        infoTitle={overview.infoTitle}
        infoItems={overview.infoItems}
      />

      {/* Erlebnisse (Tagesweise) */}
      <ExperiencesSection
        heading={experience.title}
        experiences={experience.experiences}
      />

      {/* Weitere Bilder */}
      <ImageRail title={images.title} images={images.images} />
    </main>
  );
}
