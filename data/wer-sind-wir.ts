import { TimelineItem } from "@/components/Timeline";

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

export type MomentsContent = {
  heading: string;
  images: { src: string; alt: string; width: number; height: number }[];
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

export const storyTimeline: TimelineItem[] = [
  {
    label: "2019 / Januar",
    description: "Wir lernen uns online kennen - über Overwatch (Videospiel).",
  },
  {
    label: "2019 / April",
    description: "Wir sind offiziell ein Paar.",
  },
  {
    label: "2020 / Mai",
    description: "Jessi zieht zu Robin in den Norden (Nähe Kiel).",
  },
  {
    label: "2021 / Juni",
    description: "Robin macht Jessi den Antrag. PS: Sie hat „JA“ gesagt!",
  },
  {
    label: "2023 / August",
    description: "Unsere Hochzeit.",
  },
  {
    label: "2024 / Juli",
    description: "Flitterwochen sind endlich angesagt: auf nach Japan!",
  },
  {
    label: "Und jetzt",
    description: "Wir schauen gemeinsam, was die Zukunft bringt.",
  },
];

export const momentsContent: MomentsContent = {
  heading: "Unsere Lieblingsmomente",
  images: [
    {
      src: "/img/wersindwir/moments_01.avif",
      alt: "Robin und Jessi mit Masken zu Corona auf der DoKomi",
      width: 303,
      height: 220,
    },
    {
      src: "/img/wersindwir/moments_02.avif",
      alt: "Jessi mit einem Papagei auf der Schulter",
      width: 303,
      height: 220,
    },
    {
      src: "/img/wersindwir/moments_03.avif",
      alt: "Robin und Jessi im Standesamt bei Ihrer Hochzeit",
      width: 303,
      height: 220,
    },
    {
      src: "/img/wersindwir/moments_04.avif",
      alt: "Jessi steht mit Kater Merlin im Arm draußen im Schnee",
      width: 303,
      height: 220,
    },
    {
      src: "/img/wersindwir/moments_05.avif",
      alt: "Robin und Jessi mit Weihnachtsmütze und Geweih vor einem Fernseher",
      width: 303,
      height: 220,
    },
    {
      src: "/img/wersindwir/moments_06.avif",
      alt: "Die Familie zu Weihnachten",
      width: 303,
      height: 220,
    },
    {
      src: "/img/wersindwir/moments_07.avif",
      alt: "Robin mit Kater Merlin auf dem Arm",
      width: 303,
      height: 220,
    },
    {
      src: "/img/wersindwir/moments_08.avif",
      alt: "Robin und Kater Kumo arbeiten gemeinsam am Computer",
      width: 303,
      height: 220,
    },
  ],
};
