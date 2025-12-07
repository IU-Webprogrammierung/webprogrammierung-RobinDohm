import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SakuraOverlay } from "../components/SakuraOverlay";
import { SkipLink } from "@/components/SkipLink";
import { buildMetadata } from "@/lib/seo";

const notoSans = localFont({
  src: [
    {
      path: "../public/fonts/Noto_Sans/NotoSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Sans/NotoSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-noto-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial"],
});

const notoSerif = localFont({
  src: [
    {
      path: "../public/fonts/Noto_Serif/NotoSerif-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Noto_Serif/NotoSerif-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-noto-serif",
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
});

const yujiBoku = localFont({
  src: [
    {
      path: "../public/fonts/Yuji_Boku/YujiBoku-Subset.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-yuji-boku",
  fallback: ["serif"],
});

const caveat = localFont({
  src: [
    {
      path: "../public/fonts/Caveat/Caveat-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-caveat",
  fallback: ["cursive"],
});

export const metadata: Metadata = buildMetadata({
  title: "Japan Reisebericht",
  description: "Ein Reiseblog über unsere Flitterwochen durch Japan.",
  subtitle: "Tokyo, Kyoto, Hiroshima und mehr aus erster Hand.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${notoSans.variable} ${notoSerif.variable} ${yujiBoku.variable} ${caveat.variable}`}
    >
      <meta name="apple-mobile-web-app-title" content="JPBlog" />
      <body className="antialiased">
        <SkipLink />
        <SakuraOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
