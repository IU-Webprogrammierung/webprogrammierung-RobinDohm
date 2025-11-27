import Image from "next/image";
import { Person } from "@/data/wer-sind-wir";

export function PersonBlock({ person }: { person: Person }) {
  return (
    <article className="grid gap-4 md:gap-5 lg:gap-6">
      <h3 className="text-lg font-bold">{person.name}</h3>

      {/* Bild/Text-Block: mobil untereinander, ab md nebeneinander 
          reverseOnMd spiegelt die Reihenfolge */}
      <div
        className={`flex flex-col gap-4 md:gap-5 ${
          person.reverseOnMd ? "md:flex-row-reverse" : "md:flex-row"
        } md:items-center`}
      >
        <div className="w-full md:w-1/2 justify-items-center">
          <Image
            src={person.image.src}
            alt={person.image.alt}
            width={person.image.width}
            height={person.image.height}
            className={`h-auto w-max-[${person.image.width}]`}
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3 text-text">
          {person.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
