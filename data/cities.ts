export type CityHero = {
  imageSrc: string;
  imageAlt: string;
  imageSize: { width: number; height: number };
  title: string;
  titleAccent: string;
  subtitle: string;
};

export type CityOverview = {
  heading: string;
  paragraphs: string[];
  infoTitle: string;
  infoItems: { label: string; value: string }[];
};

export type CityContent = {
  slug: string;
  hero: CityHero;
  overview: CityOverview;
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
      subtitle:
        "Die größte Stadt der Welt. Hier pulsiert das Leben, Tag und Nacht.",
    },
    overview: {
      heading: "Überblick über Tokyo",
      paragraphs: [
        "Tokyo ist ein Schmelztiegel aus Moderne und Tradition. Zwischen glänzenden Wolkenkratzern, ruhigen Schreinen und unzähligen Restaurants pulsiert eine Stadt, die nie schläft und doch überall kleine Oasen der Ruhe bietet.",
        "Hier treffen alte Handwerkskünste auf Hightech, jahrhundertealte Tempel auf futuristische Architektur. Jeder Stadtteil hat seinen eigenen Charakter von Shibuya bis Asakusa, von Akihabara bis Ueno.",
      ],
      infoTitle: "Kurzinfos",
      infoItems: [
        { label: "Einwohner", value: "ca. 14 Mio." },
        { label: "Präfektur", value: "Tokyo-to" },
        { label: "Bekannt für", value: "Technik, Mode, Popkultur" },
        { label: "Besonderheiten", value: "Die größte Stadt der Welt" },
      ],
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
      subtitle:
        "Die Hauptstadt der japanischen Küche. Essen, Spaß und Shopping.",
    },
    overview: {
      heading: "Überblick über Osaka",
      paragraphs: [
        "Osaka ist eine der größten Metropolen Japans und bekannt für ihre offene, lebendige und humorvolle Atmosphäre. Im Gegensatz zum eher traditionellen Kyoto wirkt Osaka modern, laut, bunt und sehr nah am Alltag der Menschen. Die Stadt gilt als Handelszentrum mit langer Geschichte und wird oft als „Küche Japans“ bezeichnet.",
        "Besonders beliebt sind Viertel wie Dōtonbori mit seinen Leuchtreklamen und Straßenständen, sowie Osaka Castle, das von einem großen Park umgeben ist. Auch das Hafenviertel mit dem Aquarium Kaiyūkan und die Umeda Sky Building-Plattform bieten eindrucksvolle Eindrücke. Osaka vermittelt ein Gefühl von Energie, Vielfalt und Genuss, ideal für alle, die Japan von seiner lebensfrohen Seite kennenlernen möchten.",
      ],
      infoTitle: "Kurzinfos",
      infoItems: [
        { label: "Einwohner", value: "ca. 2.7 Mio" },
        { label: "Präfektur", value: "Osaka-fu" },
        {
          label: "Bekannt für",
          value: "Straßenessen, Unterhaltung, Dōtonbori",
        },
        {
          label: "Besonderheiten",
          value: "wird häufig „Küche Japans“ genannt",
        },
      ],
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
      subtitle:
        "Die ehmalige Kaiserstadt Japans. Tradition und Moderne treffen hier aufeinander.",
    },
    overview: {
      heading: "Überblick über Kyoto",
      paragraphs: [
        "Kyoto war über Jahrhunderte die kaiserliche Hauptstadt Japans und gilt bis heute als kulturelles Herz des Landes. In Stadtteilen wie Gion oder Higashiyama begegnet man traditioneller Architektur, schmalen Gassen und historischen Stadthäusern, in denen einst Händlerinnen, Adelige und Geishas lebten und arbeiteten. Die Atmosphäre wirkt ruhig und ehrwürdig, fast so, als würde die Vergangenheit noch immer mitschwingen.",
        "Besucherinnen und Besucher können dort alte Tempelanlagen, Schreine und Gärten erkunden und dabei die tiefe Verbindung zwischen Natur, Religion und Alltagskultur spüren. Zusammen mit Orten wie dem Kiyomizu-dera, dem Fushimi Inari und dem Kaiserpalast vermittelt Kyoto ein lebendiges Bild der japanischen Traditionen und ihrer Bedeutung für das heutige Japan.",
      ],
      infoTitle: "Kurzinfos",
      infoItems: [
        { label: "Einwohner", value: "ca. 1.45 Mio." },
        { label: "Präfektur", value: "Kyoto-fu" },
        {
          label: "Bekannt für",
          value: "Tempel, Schreine, traditionelle Kultur",
        },
        { label: "Besonderheiten", value: "ehemalige Kaiserstadt Japans" },
      ],
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
    overview: {
      heading: "Überblick über Kanazawa",
      paragraphs: [
        "Kanazawa war einst eine bedeutende Samurai-Hochburg während der Edo-Zeit. Besonders im Nagamachi-Viertel sieht man noch heute die alten Lehmmauern, engen Gassen und traditionellen Residenzen, in denen Samurai-Familien lebten. Die Atmosphäre wirkt ruhig, aber gleichzeitig stolz und geschichtsträchtig.",
        "Besucher können dort alte Herrenhäuser besichtigen, Rüstungen und Alltagsgegenstände der Krieger sehen und ein Gefühl für ihre Lebensweise bekommen. Zusammen mit dem Kenroku-en Garten und dem Schloss Kanazawa vermittelt die Stadt ein authentisches Bild des japanischen Adels und seiner Werte.",
      ],
      infoTitle: "Kurzinfos",
      infoItems: [
        { label: "Einwohner", value: "ca. 460.000" },
        { label: "Präfektur", value: "Ishikawa" },
        {
          label: "Bekannt für",
          value: "Samurai-Viertel, Kenroku-en Garten, Blattgold",
        },
        {
          label: "Besonderheiten",
          value: "Eines der am besten erhaltenen Samurai-Viertel Japans",
        },
      ],
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
    overview: {
      heading: "Überblick über Hiroshima",
      paragraphs: [
        "Hiroshima ist heute eine moderne, lebendige Stadt, die sich eindrucksvoll neu aufgebaut hat. Nach der Zerstörung im Jahr 1945 entstand hier ein Ort, der nicht nur für Geschichte steht, sondern vor allem für Hoffnung, Frieden und Zukunft. Breite Straßen, offene Plätze und klare Stadtplanung prägen das Stadtbild.",
        "Besonders bewegend ist der Besuch des Friedensparks mit dem Atombomben-Dom und dem Friedensmuseum. Sie erinnern an die Ereignisse des Zweiten Weltkriegs und setzen ein eindringliches Zeichen für eine friedlichere Welt. Gleichzeitig bietet Hiroshima viele Grünflächen, regionale Küche wie Okonomiyaki und Zugang zur Insel Miyajima mit dem berühmten roten Torii.",
      ],
      infoTitle: "Kurzinfos",
      infoItems: [
        { label: "Einwohner", value: "ca. 1.2 Mio." },
        { label: "Präfektur", value: "Hiroshima-ken" },
        {
          label: "Bekannt für",
          value: "Friedenspark, Atombomben-Dom, Okonomiyaki",
        },
        {
          label: "Besonderheiten",
          value: "Symbolstadt für Frieden und Wiederaufbau",
        },
      ],
    },
  },
];

export const citySlugs = cities.map((c) => c.slug);

export const getCityBySlug = (slug: string) =>
  cities.find((city) => city.slug === slug);
