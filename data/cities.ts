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

export type ExperienceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Experience = {
  title: string;
  paragraphs: string[];
  imageDesktop: ExperienceImage;
  imageMobile: ExperienceImage;
};

export type CityExperience = {
  title: string;
  experiences: Experience[];
};

export type CityContent = {
  slug: string;
  hero: CityHero;
  overview: CityOverview;
  experience: CityExperience;
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
    experience: {
      title: "Unsere Erlebnisse",
      experiences: [
        {
          title: "Tag 1 - Ankunft & erster Eindruck",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_1.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_1_mobile.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Nach einem 15-stündigem Flug kamen wir am 04.07.24 um 13 Uhr (Ortszeit) am Narita Flughafen in Tokyo an. Nachdem wir unser Gepäck in Empfang genommen hatten, kümmerten wir uns um den Umtausch von Euro zu Yen. Anschließend, haben wir uns Tickets für einen Bus in Richtung unseres ersten Hotels gekauft.",
            "Dort angekommen, atmeten wir nach unserem langen Flug etwas auf und machten uns frisch. Der Unterschied des Klimas von Deutschland zu Japan war stark zu spüren. Mit einer Tageshöchsttemperatur von 38°C und einer Luftfeuchtigkeit von 80%, war dieser Sommer der heißeste Sommer, den Japan bis zu diesem Zeitpunkt erlebt hatte. Eine kurze Dusche und das Ausprobieren der kuriosen japanischen Toiletten war also ein Muss. Danach erkundeten wir die Umgebung unseres Hotels.",
            "So bekamen wir direkt am ersten Abend einen guten Eindruck von Tokyos blühendem Nachtleben. Angestellte, welche sich noch mit Kollegen auf ein Feierabendbier oder Abendessen in einem der vielen Restaurants trafen. Unser Abendessen nahmen wir in dem kleinen Restaurant unseres Hotels ein. Nach der langen Reise nach Tokyo und einem aufregenden Tag fielen wir wie Steine ins Bett.",
          ],
        },
        {
          title: "Tag 2 - Ein Besuch im Skytree",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_2.avif",
            alt: "Pokémon Dekoration im Tokyo Skytree",
            width: 380,
            height: 285,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_2_mobile.avif",
            alt: "Pokémon Dekoration im Tokyo Skytree",
            width: 540,
            height: 405,
          },
          paragraphs: [
            "Der nächste Tag begann mit einem Frühstück, welches aus Onigiri (Reisbällchen) und Limonade aus dem 7-Eleven gegenüber unseres Hotels bestand. Da der Tokyo Skytree nur einen Steinwurf von unserem Hotel entfernt war, stand er für unseren 2. Tag ganz oben auf der To-Do Liste.",
            "Dort angekommen fährt man mit einem Fahrstuhl bis nach ganz oben auf die Aussichtsplattformen. Der Ausblick vom höchsten Punkt ist wirklich einmalig und trotz der Höhe und einer klaren Aussicht, ist der Rand der Stadt nicht zu sehen. Doch der Skytree hat nicht nur seine Aussicht zu bieten. Auch ein kleines Restaurant und Deko mit Fotopoints zum Thema Pokémon waren den Besuch wert. Für ganz Mutige gibt es sogar einen Glasfußboden. Diesen haben wir jedoch aufgrund der Höhenangst von Jessi nicht betreten.",
            "Den Skytree umgebend erstreckt sich eine kleine Einkaufsmeile mit vielen kleinen Geschäften. Dabei haben wir einen super Shop für Studio Ghibli Fans gefunden. Später am Tag haben wir uns an Tokyos Metro System herangewagt und sind nach Akihabara gefahren. Dort besichtigten wir einen sehr beliebten Laden: Don Quijote. Es lässt sich dort alles mögliche finden und kaufen. Von 50 Sorten KitKat und andern Snacks bis zu Kleidung und Fan-Artikeln ist alles dabei. Unser Abend endete wie er begonnen hatte, mit einem leckeren Abendessen aus dem Kombini.",
          ],
        },
        {
          title: "Tag 3 - Unser Ausflug zum Kawaguchi-See",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_3.avif",
            alt: "Ein Blick durch ein Torii auf einen Tempel",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_3_mobile.avif",
            alt: "Ein Blick durch ein Torii auf einen Tempel",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Für den 3. Tag stand eine Tages-Tour zum Kawaguchi-See auf dem Plan. Ursprünglich hatten wir eine Gruppen-Tour gebucht. Dafür sollten wir erst zur Tokyo-Station kommen, um dort in einen Reisebus zu steigen. Doch wir hatten Glück und wir waren an diesem Tag die einzigen Leute für diese Tour.",
            "Also holte uns unser Guide direkt am Hotel mit einem Auto ab. Wir bekamen also eine Privat-Tour. Zu Beginn wurden wir an einem kleinen Park abgesetzt, von welchem aus man den Mount Fuji sehr schön im Blick hatte, ohne große Menschenmassen überblicken zu müssen. Auch konnte man im Park die Schreine der 7 Glücksgötter Japans besichtigen. Diese waren überall am Wegrand verteil. Als nächstes ging es in einen kleinen Garten in der Nähe des Sees. Das selbstgemachte Softeis, dass man dort bekommen konnte war sensationell lecker.",
            "Danach fragte uns unser Guide ob er uns abseits der geplanten Route seinen Lieblingsort zeigen dürfte, was wir natürlich bejahten. Dies war der Kitaguchi Hongu Fuji Sengen Schrein. Dieser hat uns sehr beeindruckt und ist zu einem unserer Lieblingserlebnisse geworden. Zum Abschluss unseres Tagesausflugs ging es zum Kagamiike-Teich. Dies ist ein Weltkulturerbe, denn in dem Teich spiegelt sich der heilige Berg: Mount Fuji.",
          ],
        },
        {
          title: "Tag 4 - Shopping, wir kommen!",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_4.avif",
            alt: "Ein ruhigerer Einkaufsstraßenzug in Tokyo",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_4_mobile.avif",
            alt: "Ein ruhigerer Einkaufsstraßenzug in Tokyo",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Tag 4 war ein reiner Shopping-Tag im Ginza-Viertel. Hier konnten wir uns in sehr vielen, nahe beieinander stehenden, Kaufhäusern umschauen. Von Pokémon-Center bis Uniqlo war alles dabei.",
            "Kleidung kaufen in Japan ist jedoch gar nicht so einfach, denn die Kleidergrößen stimmen nicht mit den uns bekannten Größen überein. Als Beispiel: eine japanische Größe M ist sehr viel kleiner als eine deutsche Größe M. Ein paar Souvenirs besorgten wir auch an diesem Tag. Zum Beispiel einen erlesenen japanischen Whiskey für einen Kenner aus der Familie.",
            "Ein reiner Shopping-Tag war für uns eine willkommene Abwechselung. Denn gegen die drückende Hitze waren die Klimatisierten Shopping-Center eine wahre Wohltat. Mit einem Einkaufsbummel kamen wir jedoch auch an diesem Tag auf eine ordentliche Schrittzahl.",
          ],
        },
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
    experience: {
      title: "Unsere Erlebnisse",
      experiences: [
        {
          title: "Tag 1 - Ankunft & erster Eindruck",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_1.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_1_mobile.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Nach einem 15-stündigem Flug kamen wir am 04.07.24 um 13 Uhr (Ortszeit) am Narita Flughafen in Tokyo an. Nachdem wir unser Gepäck in Empfang genommen hatten, kümmerten wir uns um den Umtausch von Euro zu Yen. Anschließend, haben wir uns Tickets für einen Bus in Richtung unseres ersten Hotels gekauft.",
            "Dort angekommen, atmeten wir nach unserem langen Flug etwas auf und machten uns frisch. Der Unterschied des Klimas von Deutschland zu Japan war stark zu spüren. Mit einer Tageshöchsttemperatur von 38°C und einer Luftfeuchtigkeit von 80%, war dieser Sommer der heißeste Sommer, den Japan bis zu diesem Zeitpunkt erlebt hatte. Eine kurze Dusche und das Ausprobieren der kuriosen japanischen Toiletten war also ein Muss. Danach erkundeten wir die Umgebung unseres Hotels.",
            "So bekamen wir direkt am ersten Abend einen guten Eindruck von Tokyos blühendem Nachtleben. Angestellte, welche sich noch mit Kollegen auf ein Feierabendbier oder Abendessen in einem der vielen Restaurants trafen. Unser Abendessen nahmen wir in dem kleinen Restaurant unseres Hotels ein. Nach der langen Reise nach Tokyo und einem aufregenden Tag fielen wir wie Steine ins Bett.",
          ],
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
    experience: {
      title: "Unsere Erlebnisse",
      experiences: [
        {
          title: "Tag 1 - Ankunft & erster Eindruck",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_1.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_1_mobile.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Nach einem 15-stündigem Flug kamen wir am 04.07.24 um 13 Uhr (Ortszeit) am Narita Flughafen in Tokyo an. Nachdem wir unser Gepäck in Empfang genommen hatten, kümmerten wir uns um den Umtausch von Euro zu Yen. Anschließend, haben wir uns Tickets für einen Bus in Richtung unseres ersten Hotels gekauft.",
            "Dort angekommen, atmeten wir nach unserem langen Flug etwas auf und machten uns frisch. Der Unterschied des Klimas von Deutschland zu Japan war stark zu spüren. Mit einer Tageshöchsttemperatur von 38°C und einer Luftfeuchtigkeit von 80%, war dieser Sommer der heißeste Sommer, den Japan bis zu diesem Zeitpunkt erlebt hatte. Eine kurze Dusche und das Ausprobieren der kuriosen japanischen Toiletten war also ein Muss. Danach erkundeten wir die Umgebung unseres Hotels.",
            "So bekamen wir direkt am ersten Abend einen guten Eindruck von Tokyos blühendem Nachtleben. Angestellte, welche sich noch mit Kollegen auf ein Feierabendbier oder Abendessen in einem der vielen Restaurants trafen. Unser Abendessen nahmen wir in dem kleinen Restaurant unseres Hotels ein. Nach der langen Reise nach Tokyo und einem aufregenden Tag fielen wir wie Steine ins Bett.",
          ],
        },
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
    experience: {
      title: "Unsere Erlebnisse",
      experiences: [
        {
          title: "Tag 1 - Ankunft & erster Eindruck",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_1.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_1_mobile.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Nach einem 15-stündigem Flug kamen wir am 04.07.24 um 13 Uhr (Ortszeit) am Narita Flughafen in Tokyo an. Nachdem wir unser Gepäck in Empfang genommen hatten, kümmerten wir uns um den Umtausch von Euro zu Yen. Anschließend, haben wir uns Tickets für einen Bus in Richtung unseres ersten Hotels gekauft.",
            "Dort angekommen, atmeten wir nach unserem langen Flug etwas auf und machten uns frisch. Der Unterschied des Klimas von Deutschland zu Japan war stark zu spüren. Mit einer Tageshöchsttemperatur von 38°C und einer Luftfeuchtigkeit von 80%, war dieser Sommer der heißeste Sommer, den Japan bis zu diesem Zeitpunkt erlebt hatte. Eine kurze Dusche und das Ausprobieren der kuriosen japanischen Toiletten war also ein Muss. Danach erkundeten wir die Umgebung unseres Hotels.",
            "So bekamen wir direkt am ersten Abend einen guten Eindruck von Tokyos blühendem Nachtleben. Angestellte, welche sich noch mit Kollegen auf ein Feierabendbier oder Abendessen in einem der vielen Restaurants trafen. Unser Abendessen nahmen wir in dem kleinen Restaurant unseres Hotels ein. Nach der langen Reise nach Tokyo und einem aufregenden Tag fielen wir wie Steine ins Bett.",
          ],
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
    experience: {
      title: "Unsere Erlebnisse",
      experiences: [
        {
          title: "Tag 1 - Ankunft & erster Eindruck",
          imageDesktop: {
            src: "/img/staedte/tokyo/day_1.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/tokyo/day_1_mobile.avif",
            alt: "Pokémon Themed Getränkeautomat in Tokyo",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Nach einem 15-stündigem Flug kamen wir am 04.07.24 um 13 Uhr (Ortszeit) am Narita Flughafen in Tokyo an. Nachdem wir unser Gepäck in Empfang genommen hatten, kümmerten wir uns um den Umtausch von Euro zu Yen. Anschließend, haben wir uns Tickets für einen Bus in Richtung unseres ersten Hotels gekauft.",
            "Dort angekommen, atmeten wir nach unserem langen Flug etwas auf und machten uns frisch. Der Unterschied des Klimas von Deutschland zu Japan war stark zu spüren. Mit einer Tageshöchsttemperatur von 38°C und einer Luftfeuchtigkeit von 80%, war dieser Sommer der heißeste Sommer, den Japan bis zu diesem Zeitpunkt erlebt hatte. Eine kurze Dusche und das Ausprobieren der kuriosen japanischen Toiletten war also ein Muss. Danach erkundeten wir die Umgebung unseres Hotels.",
            "So bekamen wir direkt am ersten Abend einen guten Eindruck von Tokyos blühendem Nachtleben. Angestellte, welche sich noch mit Kollegen auf ein Feierabendbier oder Abendessen in einem der vielen Restaurants trafen. Unser Abendessen nahmen wir in dem kleinen Restaurant unseres Hotels ein. Nach der langen Reise nach Tokyo und einem aufregenden Tag fielen wir wie Steine ins Bett.",
          ],
        },
      ],
    },
  },
];

export const citySlugs = cities.map((c) => c.slug);

export const getCityBySlug = (slug: string) =>
  cities.find((city) => city.slug === slug);
