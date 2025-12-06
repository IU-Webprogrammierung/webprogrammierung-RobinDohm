import { ReactNode } from "react";

type StickyNoteProps = {
  children: ReactNode;
  className?: string;
  rotate?: boolean;
};

// Einfache Sticky-Note (gelb, leicht rotiert (optional))
export function StickyNote({
  children,
  className = "",
  rotate = true,
}: StickyNoteProps) {
  return (
    <div
      className={`bg-sticky text-text font-handwritten shadow-stickynote font-semibold text-center text-2xl md:text-xl px-4 py-3 ${
        rotate ? "rotate-2" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
