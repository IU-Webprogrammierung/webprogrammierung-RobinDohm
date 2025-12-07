// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/og"],
        disallow: [
          "/api/", // technische Endpunkte
          "/_next/", // Build-Artefakte
          "/admin/", // interne Bereiche
          "/draft/", // Entwürfe/Previews
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: [
          "/*.png$",
          "/*.jpg$",
          "/*.jpeg$",
          "/*.gif$",
          "/*.webp$",
          "/*.avif$",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
