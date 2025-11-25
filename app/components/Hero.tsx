"use client";

import Image from "next/image";

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageSize: {
    width: number;
    height: number;
  };
};

// Vollbreiter Hero wie im Legacy-Stil, nutzt Tailwind-Utilities + CSS-Variablen
export function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageSize,
}: HeroProps) {
  return (
    <section className="relative pt-0 overflow-hidden rounded-t-card my-0 mx-[calc(-1*var(--gap))]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageSize.width}
        height={imageSize.height}
        priority
        className="block h-[calc(100dvh-65px)] object-cover border-0 bg-transparent shadow-none"
      />

      <div
        className="
          absolute
          bottom-[1.28rem]
          w-full
          bg-white/65
          py-6 px-4
          space-y-4
          shadow-shadow

          sm:left-1/2
          sm:bottom-[clamp(2rem,8vh,5rem)]
          sm:-translate-x-1/2
          sm:max-w-[min(90%,38rem)]
          sm:rounded-card

          md:left-auto
          md:translate-x-0
          md:right-[clamp(0.75rem,2vw,1rem)]
        "
      >
        <h1 className="text-[1.3rem] text-center sm:text-left">{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </section>
  );
}
