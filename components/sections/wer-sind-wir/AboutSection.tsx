import { PersonBlock } from "@/components/PersonBlock";
import { people } from "@/data/wer-sind-wir";

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-custom text-text">
      <h2>Über uns</h2>

      <p>
        Wir sind zwei Seelen, die sich online gefunden haben, obwohl wir beide
        immer gesagt hatten, dass es dumm sei, im Internet nach Liebe zu suchen.
        Doch das Schicksal wollte es anders. Aus einer zufälligen Begegnung
        wurde eine gemeinsame Geschichte, aus Freundschaft wurde Liebe und aus
        Liebe entstand unsere Leidenschaft fürs Reisen. Besonders Japan hat es
        uns angetan, mit seiner Kultur, seiner Ruhe und seinem Zauber in jedem
        Detail.
      </p>

      <div className="mt-6 space-y-8 md:space-y-6">
        {people.map((person) => (
          <PersonBlock key={person.name} person={person} />
        ))}
      </div>
    </section>
  );
}
