export type GeoContent = {
  heading: string;
  paragraphs: string[];
  facts: string[];
  image: { src: string; alt: string; width: number; height: number };
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

export type CultureContent = {
  heading: string;
  paragraphs: string[];
  images: { src: string; alt: string }[];
};

export const cultureContent: CultureContent = {
  heading: "Kultur & Gesellschaft",
  paragraphs: [
    "Viele Alltagsregeln sind unausgesprochen, aber überall präsent. Schuhe aus in Wohnungen, leises bzw. kein Telefonieren in Zügen, ordentliches Anstehen und Mülltrennung nach festen Werten. Konbini sind rund um die Uhr da für Snacks, Tickets und kleine Einkäufe.",
    "Höflichkeit zeigt sich in Sprache und Gestik. Verbeugen, höfliche Anreden und kleine Aufmerksamkeiten signalisieren Respekt. Omiyage (Reisemitbringsel) sind üblich. Pünktlichkeit ist selbstverständlich, vor allem im Nahverkehr.",
    "Traditionen bleiben sichtbar: Hanami, Sommerfeste, rote Laubfärbung im Herbst und der Neujahrsbesuch im Schrein strukturieren das Jahr. Gleichzeitig ist Japan hochmodern – digitale Bezahlung verbreitet sich, doch Bargeld bleibt wichtig.",
    "Popkultur prägt Stadtviertel und Medien, während Cafés, Izakaya und kleine Familienbetriebe den sozialen Treffpunkt bilden. So entsteht eine Mischung aus Technik, Ritualen und Gemeinschaft.",
  ],
  images: [
    {
      src: "/img/japan/culture_01.avif",
      alt: "Japanischer Schrein mit Mount Fuji im Hintergrund",
    },
    { src: "/img/japan/culture_02.avif", alt: "Burganlage der Stadt Kanazawa" },
    { src: "/img/japan/culture_03.avif", alt: "Japanischer Tempel im Wald" },
    {
      src: "/img/japan/culture_04.avif",
      alt: "Electric Town im Stadtteil Akihabara in Tokio",
    },
    {
      src: "/img/japan/culture_05.avif",
      alt: "Gebäude der Firma Fujiya im Stadtteil Ginza in Tokio",
    },
  ],
};
