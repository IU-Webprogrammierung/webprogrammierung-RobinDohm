import type { ReactNode } from "react";
import Image from "next/image";

export type SplitSectionProps = {
  id: string;
  title: ReactNode;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  reverse?: boolean;
  priority?: boolean;
  headingLevel?: "h1" | "h2";
};

export function SplitSection({
  id,
  title,
  paragraphs,
  image,
  reverse = false,
  priority = false,
  headingLevel = "h2",
}: SplitSectionProps) {
  const HeadingTag = headingLevel === "h1" ? "h1" : "h2";

  return (
    // 2-Spalten Layout (Text/Bild)
    <section id={id} className="grid gap-6 md:grid-cols-2 md:items-center">
      <div
        className={[
          "mx-auto max-w-152 space-y-4",
          reverse ? "md:order-last" : "md:order-first",
        ].join(" ")}
      >
        {/* Überschrift dynamisch, rest einfach Paragraphen */}
        <HeadingTag>{title}</HeadingTag>
        {paragraphs.map((content, idx) => (
          <p key={idx}>{content}</p>
        ))}
      </div>
      {/* Bild wandert je nach reverse auf die andere Seite */}
      <Image
        className={[
          reverse ? "md:order-first" : "md:order-last",
          "order-last",
        ].join(" ")}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
      />
    </section>
  );
}
