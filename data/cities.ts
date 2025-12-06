export type CityHero = {
  imageSrc: string;
  imageAlt: string;
  imageSize: { width: number; height: number };
  title: string;
  titleAccent: string;
  subtitle: string;
};

export type CityContent = {
  slug: string;
  hero: CityHero;
};

export const cities: CityContent[] = [
  {
    slug: "tokyo",
    hero: {
      imageSrc: "/img/staedte/tokyo/hero.avif",
      imageAlt: "Ausblick aus dem Skytree über Tokyo",
      imageSize: { width: 1501, height: 900 },
      title: "Tokyo",
      titleAccent: "東京",
      subtitle: "Die größte Stadt der Welt. Hier pulsiert das Leben, Tag und Nacht.",
    },
  },
  {
    slug: "osaka",
    hero: {
      imageSrc: "/img/staedte/osaka/hero.avif",
      imageAlt: "Ein Blick auf den Tsūtenkaku in Osaka",
      imageSize: { width: 1150, height: 900 },
      title: "Osaka",
      titleAccent: "大阪",
      subtitle: "Die Hauptstadt der japanischen Küche. Essen, Spaß und Shopping.",
    },
  },
  {
    slug: "kyoto",
    hero: {
      imageSrc: "/img/staedte/kyoto/hero.avif",
      imageAlt: "Ein Überblick über Kyoto bei Nacht",
      imageSize: { width: 1350, height: 900 },
      title: "Kyoto",
      titleAccent: "京都",
      subtitle: "Die ehmalige Kaiserstadt Japans. Tradition und Moderne treffen hier aufeinander.",
    },
  },
  {
    slug: "kanazawa",
    hero: {
      imageSrc: "/img/staedte/kanazawa/hero.avif",
      imageAlt: "Der Eingang zum Bahnhof Kanazawa",
      imageSize: { width: 1351, height: 900 },
      title: "Kanazawa",
      titleAccent: "金沢",
      subtitle: "Die Stadt der Samurai",
    },
  },
  {
    slug: "hiroshima",
    hero: {
      imageSrc: "/img/staedte/hiroshima/hero.avif",
      imageAlt: "Überblick auf den Friedenspark in Hiroshima",
      imageSize: { width: 1429, height: 900 },
      title: "Hiroshima",
      titleAccent: "広島",
      subtitle:
        "Bekannt durch die Atombombe. Heute eine lebendige Stadt mit Geschichte und Frieden im Herzen.",
    },
  },
];

export const citySlugs = cities.map((c) => c.slug);

export const getCityBySlug = (slug: string) =>
  cities.find((city) => city.slug === slug);
