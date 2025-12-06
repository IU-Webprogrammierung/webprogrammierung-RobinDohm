// components/CityOverviewSection.tsx

import { StickyNote } from "@/components/StickyNote";

type CityInfoItem = {
  label: string;
  value: string;
};

type CityOverviewSectionProps = {
  id?: string;
  heading: string;
  paragraphs: string[];
  infoTitle: string;
  infoItems: CityInfoItem[];
  stickyRotate?: boolean; // steuert Rotation der Sticky Note
  className?: string;
};

export function CityOverviewSection({
  id = "city-overview",
  heading,
  paragraphs,
  infoTitle,
  infoItems,
  stickyRotate = true,
  className,
}: CityOverviewSectionProps) {
  return (
    <section id={id} className={`py-custom text-text ${className ?? ""}`}>
      {/* Titel */}
      <h2 className="mb-8">{heading}</h2>

      {/* Layout (Text + Info) */}
      <div className="grid gap-4 md:grid-cols-[2fr_minmax(0,1fr)] md:items-start md:gap-6">
        {/* Textblock */}
        <div className="space-y-3">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Kurzinfos */}
        <aside className="max-w-[18rem] mx-auto mt-2 md:-mt-4">
          <StickyNote rotate={stickyRotate} className="px-4 py-3">
            <h3 className="my-4 text-2xl font-semibold text-left">
              {infoTitle}
            </h3>

            <ul className="list-none space-y-1 pl-4 text-left">
              {infoItems.map((item, i) => (
                <li key={i}>
                  <strong>{item.label}:</strong> <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </StickyNote>
        </aside>
      </div>
    </section>
  );
}
