import type { MetadataRoute } from "next";
import { citySlugs } from "@/data/cities";

const getSiteUrl = () =>
  (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000"
  ).replace(/\/+$/, "");

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  // Alles auf yearly, sollte in einem echten Blog deutlich öfter aktualisiert werden
  const staticRoutes: RouteEntry[] = [
    { path: "/", priority: 1, changeFrequency: "yearly" },
    { path: "/japan", priority: 0.8, changeFrequency: "yearly" },
    { path: "/wer-sind-wir", priority: 0.8, changeFrequency: "yearly" },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  ];

  const cityRoutes: RouteEntry[] = citySlugs.map((slug) => ({
    path: `/staedte/${slug}`,
    priority: 0.8,
    changeFrequency: "yearly",
  }));

  return [...staticRoutes, ...cityRoutes].map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );
}
