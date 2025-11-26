import Image from "next/image";

import { StickyNote } from "@/components/StickyNote";
import { foodContent } from "@/data/japan";

export function FoodSection() {
  const [foodImg1, foodImg2, foodImg3] = foodContent.images;
  return (
    <section id="jp-food" className="py-custom text-text">
      <h2>{foodContent.heading}</h2>

      <div className="grid auto-rows-min gap-4 space-y-4 items-center md:grid-cols-3 lg:grid-cols-12">
        {/* Textblock 1 */}
        <div className="space-y-3 md:col-span-2 lg:col-span-8 lg:col-start-1">
          {foodContent.paragraphs.slice(0, 3).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Bild 1 + Sticky Note */}
        <div className="relative md:col-span-1 lg:col-span-4 lg:col-start-9">
          <StickyNote className="w-[95%] -mb-6 mx-auto md:w-auto md:mx-0 md:absolute md:-top-14 md:right-0 md:max-w-[180px]">
            {foodContent.note}
          </StickyNote>
          <Image
            src={foodImg1.src}
            alt={foodImg1.alt}
            width={foodImg1.width}
            height={foodImg1.height}
            className="w-full h-auto"
          />
        </div>

        {/* Textblock 2 */}
        <div className="space-y-3 md:col-span-2 md:row-start-2 lg:col-span-8 lg:col-start-5 lg:row-start-2">
          {foodContent.paragraphs.slice(3, 6).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Bild 2 */}
        <div className="md:col-span-1 md:row-start-2 lg:col-span-4 lg:col-start-1 lg:row-start-2">
          <Image
            src={foodImg2.src}
            alt={foodImg2.alt}
            width={foodImg2.width}
            height={foodImg2.height}
            className="w-full h-auto"
          />
        </div>

        {/* Textblock 3 */}
        <div className="space-y-3 md:col-span-2 md:row-start-3 lg:col-span-8 lg:col-start-1 lg:row-start-3">
          {foodContent.paragraphs.slice(6, 9).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Bild 3 */}
        <div className="md:col-span-1 md:row-start-3 lg:col-span-4 lg:col-start-9 lg:row-start-3">
          <Image
            src={foodImg3.src}
            alt={foodImg3.alt}
            width={foodImg3.width}
            height={foodImg3.height}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
