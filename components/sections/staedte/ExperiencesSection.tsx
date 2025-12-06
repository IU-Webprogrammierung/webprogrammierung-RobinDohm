import { Experience } from "@/data/cities";
import Image from "next/image";

type ExperiencesSectionProps = {
  id?: string;
  heading: string;
  experiences: Experience[];
  className?: string;
};

type ExperienceArticleProps = {
  experience: Experience;
  isEven: boolean;
};

function ExperienceArticle({ experience, isEven }: ExperienceArticleProps) {
  const desktopFloatClasses = isEven
    ? "md:float-right md:ml-4 md:mr-0"
    : "md:float-left md:mr-4 md:ml-0";

  return (
    <article className='mb-8 after:content-[""] after:block after:clear-both'>
      <h3 className="mb-2 text-lg font-bold">{experience.title}</h3>

      {/* Desktop-/Tablet-Bild: vor dem Text, für Umfluss, nur ab md sichtbar */}
      <Image
        src={experience.imageDesktop.src}
        alt={experience.imageDesktop.alt}
        width={experience.imageDesktop.width}
        height={experience.imageDesktop.height}
        aria-hidden="true"
        className={`
          hidden
          md:block md:h-auto md:w-[clamp(260px,42%,380px)] md:mb-3
          ${desktopFloatClasses}
        `}
      />

      {/* Textabsätze */}
      {experience.paragraphs.map((p, i) => (
        <p key={i} className="mb-3">
          {p}
        </p>
      ))}

      {/* Mobile-Bild: nach dem Text, ohne Float, nur bis md sichtbar */}
      <Image
        src={experience.imageMobile.src}
        alt={experience.imageMobile.alt}
        width={experience.imageMobile.width}
        height={experience.imageMobile.height}
        className="
          mt-3 block h-auto mx-auto
          md:hidden
        "
      />
    </article>
  );
}

export function ExperiencesSection({
  id = "experiences",
  heading,
  experiences,
  className,
}: ExperiencesSectionProps) {
  return (
    <section id={id} className={`py-custom text-text ${className ?? ""}`}>
      <h2 className="mb-4">{heading}</h2>

      <div>
        {experiences.map((experience, index) => (
          <ExperienceArticle
            key={experience.title ?? index}
            experience={experience}
            isEven={index % 2 === 1} // jedes 2. Erlebnis: Bild rechts
          />
        ))}
      </div>
    </section>
  );
}
