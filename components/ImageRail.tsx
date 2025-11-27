"use client";

import Image from "next/image";
import { useRef, useState, useEffect, KeyboardEvent } from "react";
import { ControlButton } from "./imagerail/ControlButton";

type ImageRailItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageRailProps = {
  images: ImageRailItem[];
  className?: string;
  title?: string;
};

export function ImageRail({ images, className, title }: ImageRailProps) {
  // Referenz auf das Scroll-Container-Element
  const stripRef = useRef<HTMLDivElement | null>(null);

  // Steuert, ob die Control-Buttons anklickbar sind
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Steuerung zur Anzeige der Beschreibung von Bildern via Keyboard Fokus
  const [hasFocus, setHasFocus] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * Aktualisiert den Enabled/Disabled-Status der Buttons anhand der
   * aktuellen Scroll-Position.
   * - Wenn wir ganz links sind -> Prev disabled
   * - Wenn wir ganz rechts sind -> Next disabled
   */
  const updateButtons = (strip: HTMLDivElement) => {
    const maxScrollLeft = strip.scrollWidth - strip.clientWidth;
    const scrollLeft = strip.scrollLeft;
    const threshold = 2; // kleiner Puffer, um Rundungsfehler bei float-Werten zu vermeiden

    setCanPrev(scrollLeft > threshold);
    setCanNext(scrollLeft < maxScrollLeft - threshold);
  };

  /**
   * Berechnet, wie weit wir beim Klick auf einen Button scrollen sollen.
   * Basis: Breite der ersten Karte + Grid-Gap.
   */
  const computeStep = () => {
    const strip = stripRef.current;
    if (!strip) return 300; // Fallbackwert

    const first = strip.children[0] as HTMLElement | undefined;
    if (!first) return 300;

    // Gap aus den Styles holen
    const style = window.getComputedStyle(strip);
    const gap = parseFloat(style.columnGap || style.gap || "0") || 0;

    // tatsächliche Breite des ersten Bildes + Gap
    return first.getBoundingClientRect().width + gap;
  };

  /**
   * Scrollt die Leiste um genau einen Schritt nach links oder rechts.
   * - dir = 1  -> nach rechts
   * - dir = -1 -> nach links
   * Die Zielposition wird auf 0 bzw. maxScrollLeft begrenzt,
   * damit wir nie über das Ende hinausschießen.
   */
  const scrollByDir = (dir: -1 | 1) => {
    const strip = stripRef.current;
    if (!strip) return;

    const step = computeStep();
    const maxScrollLeft = strip.scrollWidth - strip.clientWidth;

    let target = strip.scrollLeft + dir * step;
    if (target < 0) target = 0;
    if (target > maxScrollLeft) target = maxScrollLeft;

    strip.scrollTo({ left: target, behavior: "smooth" });

    // Da smooth scroll asynchron ist, werden die Buttons
    // mit kleinem Delay aktualisiert.
    window.setTimeout(() => updateButtons(strip), 220);
  };

  /**
   * Fokus auf den Container setzt das erste Bild als "aktiv":
   */
  const handleFocus = () => {
    if (!images.length) return;

    setHasFocus(true);

    const target = itemRefs.current[activeIndex];
    if (target) {
      // Beim Fokus auf den Container das zuletzt aktive Bild wieder ins Zentrum holen
      target.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  /**
   * Verlust des Fokus auf den Container oder die Bilder setzt den State zurück
   */
  const handleBlur = () => {
    setTimeout(() => {
      const strip = stripRef.current;
      if (!strip) return;

      const active = document.activeElement;
      if (!strip.contains(active)) {
        // Fokus ist wirklich außerhalb der Rail -> nur Fokus-Flag zurücksetzen
        setHasFocus(false);
      }
    }, 0);
  };

  /**
   * Keyboard-Steuerung (Barrierefreiheit):
   * - Pfeil rechts -> nach rechts scrollen (falls möglich)
   * - Pfeil links  -> nach links scrollen (falls möglich)
   * Das funktioniert, wenn der Strip fokussiert ist (tabIndex={0}).
   */
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();

    const dir = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = Math.min(
      Math.max(activeIndex + dir, 0),
      images.length - 1
    );

    if (nextIndex === activeIndex) return;

    setActiveIndex(nextIndex);

    const target = itemRefs.current[nextIndex];
    if (target) {
      // Bild in Sicht scrollen, Fokus bleibt auf dem Strip
      target.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  /**
   * useEffect:
   * - Beim Mount (und wenn sich die Anzahl der Bilder ändert) wird
   *   einmalig der Button-Status berechnet.
   * - Bei Fenster-Resize wird die Scroll-Situation neu bewertet,
   *   damit die Buttons auch bei Layoutänderungen korrekt sind.
   */
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const onResize = () => updateButtons(strip);
    updateButtons(strip);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [images.length]);

  // Wenn es keine Bilder gibt, braucht die Komponente nichts rendern.
  if (!images.length) return null;

  /**
   * Wrapper:
   * - Wenn ein Titel vorhanden ist, wird ein <section> verwendet, da es sich dann
   *   um einen klar definierten thematischen Block handelt.
   * - Wenn kein Titel angegeben ist, verwenden wir ein <div>, um eine Section ohne
   *   Überschrift zu vermeiden (das wäre semantisch inkorrekt).
   * - Hintergrund: Auf der Japan-Seite wird die ImageRail innerhalb einer anderen
   *   Section eingesetzt ohne Titel. Daher muss der Wrapper dynamisch gewählt werden.
   */
  type WrapperTag = "section" | "div";
  const Wrapper: WrapperTag = title ? "section" : "div";

  return (
    <Wrapper
      className={`mt-3 flex flex-col gap-2 ${className ?? ""}`}
      aria-label={title ?? "Bildleiste mit horizontal scrollbaren Bildern"}
    >
      {title && <h2>{title}</h2>}
      <div
        className={`
        flex items-center gap-2
      `}
        role="region"
        aria-roledescription="Karussell"
      >
        {/* Prev-Button */}
        <ControlButton
          direction="prev"
          onClick={() => scrollByDir(-1)}
          disabled={!canPrev}
        />

        {/* Strip - tabIndex={0} sorgt für einen fokusierbaren Container -> Keyboardsteuerung */}
        <div
          ref={stripRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onScroll={(e) => updateButtons(e.currentTarget)}
          className="flex-1 grid grid-flow-col auto-cols-[40%] lg:auto-cols-[30%] gap-2 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus:ring-2 focus:ring-focus rounded-md"
          aria-label="Bilder mit Links/Rechts scrollen"
        >
          {images.map((img, index) => (
            <div
              key={img.src ?? index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              tabIndex={-1}
              className="relative snap-start group overflow-hidden rounded"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
              />

              {/* Overlay: fährt von unten rein */}
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 bg-white/65 px-3 py-2 text-base font-semibold text-text backdrop-blur-[2px] transition-transform duration-200 ${
                  hasFocus && activeIndex === index
                    ? "translate-y-0"
                    : "translate-y-full"
                } ${
                  hasFocus
                    ? ""
                    : "group-hover:translate-y-0 group-focus-within:translate-y-0"
                }`}
              >
                {img.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Next-Button */}
        <ControlButton
          direction="next"
          onClick={() => scrollByDir(1)}
          disabled={!canNext}
        />
      </div>
    </Wrapper>
  );
}
