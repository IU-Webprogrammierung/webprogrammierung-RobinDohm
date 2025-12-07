import type { Metadata } from "next";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

type BuildMetadataOptions = {
  title: string;
  description: string;
  subtitle?: string;
  path?: string;
  noIndex?: boolean;
};

const getSiteUrl = () =>
  (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000"
  ).replace(/\/+$/, "");

const buildOgImageUrl = (title: string, subtitle?: string) => {
  const params = new URLSearchParams();
  params.set("title", title);
  if (subtitle) params.set("subtitle", subtitle);
  return `/api/og?${params.toString()}`;
};

export function buildMetadata({
  title,
  description,
  subtitle,
  path = "/",
}: BuildMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImage = buildOgImageUrl(title, subtitle);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Japan Reisebericht",
      images: [
        {
          url: ogImage,
          width: OG_WIDTH,
          height: OG_HEIGHT,
          alt: title,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon0.svg", type: "image/svg+xml" },
        { url: "/icon1.png", sizes: "96x96" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    },
  };
}
