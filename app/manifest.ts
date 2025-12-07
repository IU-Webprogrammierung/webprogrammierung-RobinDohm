import type { MetadataRoute } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "http://localhost:3000";
const startUrl = "/";
const scope = "/";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JPBlog - Japan Reisebericht",
    short_name: "JPBlog",
    id: `${base}${startUrl}`,
    start_url: startUrl,
    scope,
    description: "Ein Reisebericht über Japan von Robin und Jessi.",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    lang: "de-DE",
    dir: "ltr",
    icons: [
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },

      {
        src: "/favicon/web-app-manifest-256x256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },

      {
        src: "/favicon/web-app-manifest-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },

      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
