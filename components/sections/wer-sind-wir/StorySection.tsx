import { Timeline } from "@/components/Timeline";
import { storyTimeline } from "@/data/wer-sind-wir";

export function StorySection() {
  return (
    <section id="story" className="py-custom text-text">
      <h2>Unsere Geschichte</h2>

      <p className="mb-4">
        Aus einem zufälligen Match wurde schnell mehr: erst lange Gespräche bis
        spät in die Nacht, dann das erste Treffen, der Umzug in den Norden und
        schließlich die Verlobung gefolgt von der Hochzeit und den Flitterwochen
        in Japan. Der Zeitstrahl zeigt die kleinen und großen Meilensteine auf
        unserem gemeinsamen Weg.
      </p>

      <Timeline items={storyTimeline} />
    </section>
  );
}
