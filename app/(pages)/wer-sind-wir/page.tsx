import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/wer-sind-wir/AboutSection";

export default function AboutUs() {
  return (
    <main id="about">
      <div id="main" tabIndex={-1} />
      <Hero
        imageSrc="/img/wersindwir/hero.avif"
        imageAlt="Robin und Jessi halten Händchen und blicken aufs Meer vor einer sonnigen Küstenlandschaft"
        imageSize={{ width: 1349, height: 900 }}
        title="Wer sind wir"
        subtitle="Zwei Abenteurer mit Liebe zu Japan und zueinander. Wir sind Robin und Jessi."
      />

      {/* Über uns */}
      <AboutSection />

      {/* Banner */}
    </main>
  );
}
