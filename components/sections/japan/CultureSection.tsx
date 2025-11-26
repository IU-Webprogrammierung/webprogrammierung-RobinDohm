import { ImageRail } from "@/components/ImageRail";
import { cultureContent } from "@/data/japan";

export function CultureSection() {
  return (
    <section id="jp-culture">
      <h2>{cultureContent.heading}</h2>
      {cultureContent.paragraphs.map((p, index) => (
        <p className="py-2" key={`jp-culture-paragraph-${index + 1}`}>
          {p}
        </p>
      ))}
      <ImageRail images={cultureContent.images} />
    </section>
  );
}
