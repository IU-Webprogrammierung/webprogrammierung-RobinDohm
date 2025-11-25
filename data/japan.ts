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
