export type Person = {
  name: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  paragraphs: string[];
  reverseOnMd?: boolean;
};

export const people: Person[] = [
  {
    name: "Robin",
    image: {
      src: "/img/wersindwir/robin.avif",
      alt: "Portrait von Robin",
      width: 494,
      height: 494,
    },
    paragraphs: [
      "Ich bin Robin, 30 Jahre alt, ausgebildeter Fachinformatiker für Systemintegration, ehemaliger Soldat der Marinesicherung und inzwischen Student sowie selbstständig mit meinem eigenen IT-Systemhaus. Ich liebe Katzen, besonders meinen Kater Merlin, der mich seit über zwölf Jahren begleitet. An Japan faszinieren mich vor allem die Tempel, ihre Feste und die alten Geschichten der Götter.",
      "Meine Lieblingsmomente in Japan waren die atemberaubende Aussicht vom Tokyo Skytree und die beeindruckende Pünktlichkeit der Bahnen. Und natürlich Pokémon, sie sind einfach überall in Japan zu finden und machen das Land für Fans wie mich noch ein Stück magischer.",
    ],
  },
  {
    name: "Jessi",
    image: {
      src: "/img/wersindwir/jessi.avif",
      alt: "Portrait von Jessi",
      width: 494,
      height: 494,
    },
    paragraphs: [
      "Ich bin Jessi, 27 Jahre alt, Bachelor of Science in Ökotrophologie und arbeite inzwischen bei Robin im Unternehmen im Büro. Ich liebe Katzen, das Kochen und die japanische Sprache. Außerdem habe ich eine große Schwäche für Cozy Games wie Animal Crossing oder Story of Seasons. An Japan fasziniert mich besonders die Stadt Tokio, so groß und lebendig, und trotzdem erstaunlich still und sauber.",
      "In Japan waren meine Lieblingsmomente die Besuche in den Pokémon Centern, im Nintendo Store und, ganz besonders, der Bento-Kochkurs. Ich als Zelda-Fan bin besonders bei den Nintendo Stores auf meine Kosten gekommen und habe einige Souvenirs mitgebracht.",
    ],
    reverseOnMd: true,
  },
];

export const banner = {
  src: "/img/wersindwir/banner.avif",
  alt: "Robin und Jessi als Brautpaar Hand in Hand in baumbestandener Allee vor einer historischen Location",
  width: 1150,
  height: 359,
};
