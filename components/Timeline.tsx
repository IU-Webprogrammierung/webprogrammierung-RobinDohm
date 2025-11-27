export type TimelineItem = {
  label: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={`w-full flex justify-center ${className ?? ""}`}>
      <ol className="max-w-full list-none p-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="relative mb-3 pl-9 leading-snug"
            >
              {/* Punkt */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-2
                  top-1
                  h-4
                  w-4
                  rounded-full
                  border-2
                  border-primary
                  bg-surface
                  shadow-timeline
                "
              />

              {/* Linie zum nächsten Punkt */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[0.95rem]
                    top-[1.3rem]
                    -bottom-3
                    w-0.5
                    bg-line
                  "
                />
              )}

              <strong className="block">{item.label}</strong>
              <span className="block text-text/85">{item.description}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
