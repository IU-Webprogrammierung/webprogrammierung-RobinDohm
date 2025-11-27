import Image from "next/image";

type BannerProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  ariaLabel?: string;
};

export function Banner({
  src,
  alt,
  width,
  height,
  className,
  ariaLabel = "Banner",
}: BannerProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={`
        hidden md:block
        w-[calc(100%+2*var(--gap))] ml-[calc(-1*var(--gap))] mr-[calc(-1*var(--gap))]
        ${className ?? ""}
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-[clamp(240px,60vh,360px)] w-full object-cover rounded-none border-none"
        priority
      />
    </section>
  );
}
