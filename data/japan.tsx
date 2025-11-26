import { ReactNode } from "react";

export type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GeoContent = {
  heading: string;
  paragraphs: string[];
  facts: string[];
  image: Image;
};

export type CultureContent = {
  heading: string;
  paragraphs: string[];
  images: Image[];
};

export type FoodContent = {
  heading: string;
  note: string;
  paragraphs: ReactNode[];
  images: Image[];
};

export type RisksBlockChartSeries = {
  name: string;
  data: number[];
  yAxis?: "primary" | "secondary";
};

export type RisksBlockChart = {
  type: "bar" | "line";
  xLabels: string[];
  series: RisksBlockChartSeries[];
};

export type RisksBlock = {
  title: string;
  paragraphs: string[];
  chart: RisksBlockChart;
};

export type RisksContent = {
  heading: string;
  intro: string[];
  blocks: RisksBlock[];
};

export const geoContent: GeoContent = {
  heading: "Geografie & Natur",
  paragraphs: [
    "Japan besteht aus vier Hauptinseln und zahlreichen kleineren Inseln. Die Landschaft reicht von Küstenebenen und Reisterrassen über Vulkanketten bis zu dichten Wäldern.",
    "Das Klima variiert stark: schneereiche Winter im Norden, subtropische Bedingungen im Süden. Besonders beliebt sind Frühling und Herbst.",
    "Viele Berge sind vulkanischen Ursprungs, darunter der Fuji, und weite Teile des Landes sind bewaldet. Heiße Quellen, Nationalparks und eindrucksvolle Küsten zeigen die Vielfalt, die Japan trotz dichter Besiedlung bewahrt.",
  ],
  facts: [
    "Land: Besteht aus 14.125 Inseln",
    "Hauptinseln: Hokkaido, Honshu, Shikoku, Kyushu",
    "Höchster Berg: Fuji-san (3.776 m)",
    "Erdbeben & Vulkane: Pazifischer Feuerring",
    "Klimazonen: subarktisch bis subtropisch",
    "Einwohneranzahl: 127.753.041 (Stand: 2024)",
    "Landesgröße: 377.975 km²",
    "Größte Religionen: Shintoismus und Buddhismus",
  ],
  image: {
    src: "/img/japan/geo.avif",
    alt: "Höhenkarte von Japan",
    width: 571,
    height: 620,
  },
};

export const cultureContent: CultureContent = {
  heading: "Kultur & Gesellschaft",
  paragraphs: [
    "Viele Alltagsregeln sind unausgesprochen, aber überall präsent. Schuhe aus in Wohnungen, leises bzw. kein Telefonieren in Zügen, ordentliches Anstehen und Mülltrennung nach festen Werten. Konbini sind rund um die Uhr da für Snacks, Tickets, Überweisungen und kleine Einkäufe. Das macht den Alltag erstaunlich bequem und geordnet.",
    "Höflichkeit zeigt sich in Sprache und Gestik. Verbeugen, höfliche Anreden und kleine Aufmerksamkeiten signalisieren Respekt. Geschenke nach einer Reise, sogenannte Omiyage, sind üblich und werden oft mit regionalen Süßigkeiten erfüllt. Pünktlichkeit ist selbstverständlich, vor allem im Nahverkehr.",
    "Traditionen bleiben sichtbar. Frühlingshanami, Sommerfeste mit Laternen, die rote Laubfärbung im Herbst und der Neujahrsbesuch im Schrein strukturieren das Jahr. Tempel und Schreine sind nicht nur Sehenswürdigkeiten, sondern Orte, an denen Rituale in den Alltag gehören.",
    "Gleichzeitig ist Japan hochmodern. Digitale Bezahlung verbreitet sich, doch Bargeld bleibt wichtig. Popkultur prägt Stadtviertel und Medien, während Cafés, Izakaya und kleine Familienbetriebe den sozialen Treffpunkt bilden. So entsteht eine Mischung aus Technik, Ritualen und Gemeinschaft, die man im Straßenbild und selbst in kleinen Nachbarschaften spürt.",
  ],
  images: [
    {
      src: "/img/japan/culture_01.avif",
      alt: "Japanischer Schrein mit Mount Fuji im Hintergrund",
      width: 391,
      height: 220,
    },
    {
      src: "/img/japan/culture_02.avif",
      alt: "Burganlage der Stadt Kanazawa",
      width: 391,
      height: 220,
    },
    {
      src: "/img/japan/culture_03.avif",
      alt: "Japanischer Tempel im Wald",
      width: 391,
      height: 220,
    },
    {
      src: "/img/japan/culture_04.avif",
      alt: "Electric Town im Stadtteil Akihabara in Tokio",
      width: 391,
      height: 220,
    },
    {
      src: "/img/japan/culture_05.avif",
      alt: "Gebäude der Firma Fujiya im Stadtteil Ginza in Tokio",
      width: 391,
      height: 220,
    },
  ],
};

export const foodContent: FoodContent = {
  heading: "Kulinarik",
  note: "Osaka ist die Metropole der japanischen Küche.",
  paragraphs: [
    <>
      Japans Küche - oft als <em>washoku</em> bezeichnet - setzt auf
      Saisonalität, klare Aromen und ein gutes Gleichgewicht zwischen Reis,
      Gemüse, Fisch und kleinen Beilagen. Vieles ist schlicht angerichtet, die
      Details stecken in Brühen, Dashi und feinen Marinaden. Schon ein einfaches
      Mittagsmenü wirkt durch Textur und Temperaturwechsel überraschend
      komplett.
    </>,
    <>
      Regional unterscheiden sich Stil und Schwerpunkt spürbar: Hokkaido ist
      berühmt für Meeresfrüchte und cremige Misosuppen, in Kansai (mit Osaka und
      Kyoto) dominiert ein eleganter Dashi-Geschmack, Hiroshima ist bekannt für
      mehrlagiges Okonomiyaki, Kyushu für kräftige Suppen und Grillgerichte. In
      Großstädten sitzen viele Läden nur zehn bis zwanzig Gäste - Anstehen
      gehört dazu.
    </>,
    <>
      Osaka gilt als „Japans Bauch“: Streetfood wie Takoyaki und Okonomiyaki,
      enge Gassen voller Izakaya und Ramen-Shops - hier versteht man unter Essen
      nicht nur Nahrungsaufnahme, sondern Vergnügen. Unsere Empfehlung: gerade
      abends rechtzeitig reservieren oder Geduld fürs Warten mitbringen.
    </>,

    <>
      <strong>Ramen</strong> ist eine Welt für sich: Shōyu (klar,
      sojasaucenbasiert), Miso (reich und herzhaft), Shio (leicht, salzbasiert)
      und Tonkotsu (opulent, aus Schweineknochen) sind die großen Stile.
      Bestellt wird oft am Automaten - Ticket ziehen, Platz nehmen, Schüssel
      kommt zügig. Toppings wie Chāshū, Ajitama, Nori oder Frühlingszwiebeln
      variieren je nach Hausstil.
    </>,
    <>
      <strong>Yakitori</strong> steht für gegrillte Spieße, meist Hähnchen in
      vielen Schnitten: Schenkel, Herz, Haut, Leber, aber auch Gemüse wie
      Shishitō oder Shiitake. Gewürzt wird mit Salz (<em>shio</em>) oder einer
      süß-herzhaften Sauce (<em>tare</em>). Kleine Theken, Rauch aus dem
      Holzkohlegrill und ein kaltes Getränk - das ist die typische
      Feierabend-Stimmung, vom Stehgrill bis zur gemütlichen Eckkneipe.
    </>,
    <>
      Für längere Abende sind <strong>Izakaya</strong> ideal: kleine Teller zum
      Teilen, vom Sashimi bis zu frittierten Klassikern. Üblich ist eine kleine
      Vorspeise (<em>otōshi</em>) pro Person. Die Karte wechselt mit der Saison;
      fragt nach Empfehlungen des Tages - oft sind es genau die Gerichte, die
      man sonst übersehen hätte.
    </>,

    <>
      <strong>Mochi</strong> und andere <em>wagashi</em> (traditionelle
      Süßigkeiten) spielen mit Reismehl, Bohnenpaste und saisonalen Aromen. Von
      weichen Daifuku bis zu formschönen Nerikiri - vieles passt perfekt zu
      grünem Tee. Auf der Straße sind Taiyaki, Dorayaki oder Matcha-Softice
      schnelle Lieblinge.
    </>,
    <>
      Frühstück ist oft kleiner gehalten: Reis, Miso-Suppe, gegrillter Fisch und
      ein Stück Tamagoyaki sind klassische Bestandteile; Cafés bieten moderne
      Varianten mit Toast, Salat und Kaffee. Wer früh loszieht, wird mit
      Bäckereien und Konbinis glücklich - Onigiri, Sandwiches und heiße Getränke
      gibt es rund um die Uhr.
    </>,
    <>
      Beim Bezahlen sind IC-Karten und Mobile-Payment verbreitet, doch Bargeld
      bleibt praktisch - besonders in kleinen Läden. Ein freundliches
      „Sumimasen“ beim Bestellen und ein leises „Gochisōsama deshita“ beim Gehen
      passen immer. So wird Essen in Japan zur entspannten Mischung aus Ritual,
      Neugier und Entdecken.
    </>,
  ],
  images: [
    {
      src: "/img/japan/food_01.avif",
      alt: "Eine Schüssel mit Ramen",
      width: 360,
      height: 260,
    },
    {
      src: "/img/japan/food_02.avif",
      alt: "Yakitori (gegrillte Hähnchenspieße)",
      width: 360,
      height: 240,
    },
    {
      src: "/img/japan/food_03.avif",
      alt: "Mochi (japanische Reiskuchen, Süßigkeiten)",
      width: 360,
      height: 260,
    },
  ],
};

export const risksContent: RisksContent = {
  heading: "Naturgewalten & Herausforderungen",
  intro: [
    "Japan liegt am Rand des Pazifischen Feuerrings. Das bedeutet, es gibt regelmäßig Erdbeben, starke Stürme und aktive Vulkane. Viele Menschen fragen sich deshalb, ob Reisen oder Leben dort gefährlich ist.",
    "Die gute Nachricht ist, dass Japan sehr gut vorbereitet ist. Häuser und Brücken sind flexibel gebaut, Warn Apps informieren schnell und in Schulen sowie Firmen wird das Verhalten im Notfall geübt. Dadurch passieren trotz häufiger Ereignisse vergleichsweise wenige schwere Unfälle.",
    "Im Alltag helfen klare Routinen. Ruhe bewahren, Türen öffnen, Gas ausschalten, sich kurz schützen und dann geordnet ins Freie gehen. So bleibt das Leben planbar, auch in einem Land mit sehr aktiver Natur.",
  ],
  blocks: [
    {
      title: "Häufigkeit & Opfer von Naturkatastrophen",
      paragraphs: [
        "In Japan kommen Naturereignisse sehr häufig vor. Erdbeben werden täglich gemessen, Taifune ziehen in manchen Jahren mehrfach über die Inseln und Vulkane sind aktiv. Für Außenstehende klingt das bedrohlich, doch die Zahlen zu Verletzten und Todesfällen bleiben im Vergleich oft gering.",
        "Dafür gibt es klare Gründe. Gebäude sind erdbebensicher, Straßen und Brücken werden regelmäßig geprüft und Warnsysteme sind gut ausgebaut. Übungen in Schulen und Betrieben machen Abläufe vertraut. Menschen wissen, wie sie sich verhalten sollen, und Behörden leiten Evakuierungen schnell ein. So trifft hohe Ereignishäufigkeit auf eine gut vorbereitete Gesellschaft, was die Folgen deutlich reduziert.",
      ],
      chart: {
        type: "bar",
        xLabels: ["Japan"],
        series: [
          {
            name: "Erdbeben (Anzahl pro Jahr)",
            data: [55000],
            yAxis: "primary",
          },
          {
            name: "Todesopfer (2000–2025)",
            data: [18384],
            yAxis: "secondary",
          },
        ],
      },
    },
    {
      title: "Das Land der Hundertjährigen und der Arbeit",
      paragraphs: [
        "Japan hat eine der höchsten Lebenserwartungen der Welt. Viele Menschen werden sehr alt und bleiben lange aktiv. Ernährung mit viel Fisch und Gemüse, regelmäßige Vorsorge und Bewegung im Alltag tragen dazu bei. Auch ein gutes Gesundheitssystem und ein hohes Sicherheitsniveau spielen eine Rolle.",
        "Gleichzeitig ist die Arbeitskultur sehr anspruchsvoll. Pünktlichkeit, Pflichtgefühl und lange Tage im Büro sind in vielen Branchen normal. Karriere und Verantwortung stehen oft an erster Stelle. Viele pendeln weit und verbringen wenig Zeit zu Hause. Unternehmen und Politik fördern zwar mehr Ausgleich, doch Veränderungen brauchen Zeit.",
        "Die Geburtenrate ist sehr niedrig. Viele Paare verschieben Familiengründungen oder entscheiden sich dagegen, weil Arbeit und Betreuung schwer zu vereinbaren sind. Das führt zu einer schnell alternden Gesellschaft und belastet Arbeitsmarkt und Sozialsysteme. Japan sucht daher Wege, Familie und Beruf besser zusammenzubringen und junge Familien stärker zu unterstützen.",
      ],
      chart: {
        type: "line",
        xLabels: [
          "1950",
          "1955",
          "1960",
          "1965",
          "1970",
          "1975",
          "1980",
          "1985",
          "1990",
          "1995",
          "2000",
          "2005",
          "2010",
          "2015",
          "2018",
          "2020",
          "2021",
          "2022",
          "2025",
          "2030",
          "2040",
          "2050",
        ],
        series: [
          {
            name: "Geburtenrate (Kinder je Frau)",
            data: [
              3.62, 2.35, 1.98, 2.09, 2.04, 1.92, 1.74, 1.74, 1.51, 1.41, 1.35,
              1.25, 1.36, 1.42, 1.3, 1.21, 1.22, 1.23, 1.26, 1.29, 1.31, 1.33,
            ],
            yAxis: "primary",
          },
          {
            name: "Anteil 65+ in %",
            data: [
              4.9, 5.2, 5.74, 6.3, 7.06, 8.2, 9.07, 10.6, 12.16, 14.0, 17.44,
              20.5, 23.1, 26.92, 28.0, 29.56, 29.8, 29.9, 29.99, 30.5, 32.7,
              36.82,
            ],
            yAxis: "secondary",
          },
        ],
      },
    },
  ],
};
