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

export interface FoodContent {
  heading: string;
  note: string;
  paragraphs: ReactNode[];
  images: Image[];
}

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
