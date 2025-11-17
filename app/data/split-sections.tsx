import type { SplitSectionProps } from "../components/SplitSection";

export const splitSections: SplitSectionProps[] = [
  {
    id: "index-hero",
    title: (
      <>
        Unsere Flitterwochen durch Japan{" "}
        <span className="jp-seal" lang="ja" title="Reise">
          旅
        </span>
      </>
    ),
    headingLevel: "h1",
    paragraphs: [
      "Dies ist ein Reisebericht über unsere unvergesslichen Flitterwochen in Japan. Begleitet uns auf dieser spannenden Reise durch ein Land voller Kontraste, von der pulsierenden Metropole Tokyo bis zu den ruhigen Tempeln von Kyoto.",
      "Wir haben diesen Reisebericht erstellt, um unsere Erfahrungen zu teilen und eine besondere Erinnerung an unsere Flitterwochen zu schaffen.",
    ],
    image: {
      src: "/img/main/hero.avif",
      alt: "Jessi und Robin in Kanazawa auf einer Straße bei Nacht",
      width: 550,
      height: 413,
    },
    priority: true,
  },
  {
    id: "why-japan",
    title: "Wieso überhaupt Japan?",
    reverse: true,
    paragraphs: [
      "Wir sind mit Anime und Manga groß geworden, aber das ist nicht der Grund, warum wir Japan gewählt haben.",
      "Entscheidend war unsere ehrenamtliche Arbeit bei der DoKomi, Deutschlands größter Japan-Convention. Dort haben wir viele Kontakte zu Japanerinnen und Japanern geknüpft und Einblicke in Kultur und Alltag gewonnen.",
      "Besonders faszinieren uns Tee- und Tempelkulturen. Diese Traditionen werden trotz der enormen Modernität weiter gepflegt und haben bis heute einen festen Platz im japanischen Alltag.",
    ],
    image: {
      src: "/img/main/why.avif",
      alt: "Das Workshop-Team der DoKomi von Robin und Jessi",
      width: 550,
      height: 398,
    },
  },
  {
    id: "language",
    title: "Und die Sprache?",
    paragraphs: [
      "Jessi hat bereits mit dem Japanisch-Lernen begonnen und kann schon erstaunlich gut lesen, fühlt sich beim Sprechen aber noch unsicher.",
      "Robin schaut dagegen sprichwörtlich wie ein Schwein ins Uhrwerk. Lesen war gar nicht möglich und verstehen nur selten. Ein bisschen dank Anime konnte er aber einige Wörter und Phrasen erkennen.",
      "Trotzdem sind wir mit Englisch gut zurechtgekommen, auch weil Jessi an einigen Stellen auf Japanisch aushelfen konnte.",
      "Es ist also kein Problem, durch Japan zu reisen, wenn man die Sprache nicht beherrscht – auch wenn es natürlich hilft, ein paar Worte zu kennen.",
    ],
    image: {
      src: "/img/main/language.avif",
      alt: "Jessis Tablet mit ihren Japanisch-Unterlagen",
      width: 550,
      height: 414,
    },
  },
  {
    id: "preparation",
    title: "Wie habt ihr euch vorbereitet?",
    reverse: true,
    paragraphs: [
      "Am Anfang stand die große Frage: Was wollen wir in Japan eigentlich erleben? Nur eine Stadt entdecken oder das Land richtig bereisen? Wir haben verschiedene Routen skizziert und uns schließlich für eine Rundreise entschieden.",
      "Dann haben wir Reisebüros und viele Internetseiten durchforstet, denn komplett alles selbst zu organisieren wollten wir nicht.",
      "Gegen Gruppenreisen haben wir uns bewusst entschieden. Wir wollten unser eigenes Tempo und unser Ding machen.",
      "Gebucht haben wir am Ende bei einem Reiseveranstalter. Der Gesamtpreis lag bei rund 9.000 €.",
      "Direkt nach der Buchung kam die Reiseversicherung dazu, allerdings nicht die vom Veranstalter, weil sie uns zu teuer war.",
      "Außerdem haben wir sofort die Sitzplätze im Flugzeug reserviert. Bei über zehn Stunden Flug wollte ich unbedingt neben meiner Frau sitzen.",
      "Wir haben einen Packplan erstellt, getestet, wieder verworfen und erneut überarbeitet. Steckdosenadapter standen natürlich auch auf der Liste.",
      "Und dann hieß es nur noch warten, bis es endlich losgeht.",
    ],
    image: {
      src: "/img/main/preperation.avif",
      alt: "Zwei Koffer die auf dem Bett liegen und gerade gepackt werden",
      width: 548,
      height: 730,
    },
  },
];
