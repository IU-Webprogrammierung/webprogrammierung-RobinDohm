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
          title: "Tag 14 - Es ist verdammt heiß",
          imageDesktop: {
            src: "/img/staedte/osaka/day_14.avif",
            alt: "Der Blick aus dem Hotelzimmer auf den Tsūtenkaku",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/osaka/day_14_mobile.avif",
            alt: "Der Blick aus dem Hotelzimmer auf den Tsūtenkaku",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Wir fuhren aus dem milden Klima Hiroshimas in das heiße Osaka mit dem Shinkansen. Unser Hotel lag dieses Mal in einem etwas abgelegenderen Viertel, weshalb wir vor Ort noch mit der U-Bahn einige Stadionen bewältigen mussten.",
            "Dort angekommen bezogen wir ein schönes Zimmer mit direkten Ausblick auf den Tsūtenkaku. Einzig das kleinste Badezimmer der Welt bereitete Robin große Probleme. Ein Besuch der Toilette sorgte somit immer für eine akrobatische Turnübung, da der Platz sehr begrenzt war. Daher verließen wir unser Zimmer schnell wieder und begaben uns ist die Hitze Osakas. Jessi verließ das Hotelzimmer dabei nicht mehr ohne Sonnencreme und einem UV-Schutz Sonnenschirm, den wir zuvor in Tokyo gekauft hatten.",
            "Auch in der letzten Stadt besuchten wir den Pokémon Store und zusätzlich den Nintendo Store um unseren inneren Fan zufriedenzustellen. Nach allen Tagen, welche wir bis zu diesem Zeitpunkt in Japan verbracht hatten fragten wir uns, wie wohl das Menü eines asiatischen MC Donalds ist. Dies probierten wir also kurzerhand zum Abendessen aus. Es gab viele ähnliche Gerichte, die wir auch von zu Hause kannten. Wir probierten jedoch alles aus, was für uns neu war. An die Coca Cola mit Eiscreme-Topping wagten wir uns zuerst nicht heran, diese stellte sich aber am Ende als sehr lecker heraus. Aber wir müssen ganz ehrlich sagen, bei den Nuggets haben wir die gute alte Süß-Saure Soße vermisst.",
          ],
        },
        {
          title: "Tag 15 - Unsere Foodtour",
          imageDesktop: {
            src: "/img/staedte/osaka/day_15.avif",
            alt: "Japanische Hähnchenspieße",
            width: 380,
            height: 285,
          },
          imageMobile: {
            src: "/img/staedte/osaka/day_15_mobile.avif",
            alt: "Japanische Hähnchenspieße",
            width: 540,
            height: 405,
          },
          paragraphs: [
            "Heute besuchten wir zu erst einen riesigen Don Quijote, welcher in der Nähe unseres Hotels lag. In diese Art von Laden kann man immer wieder reingehen, denn man findet immer etwas neues und interessantes. Nicht zuletzt auch kleine Souvenirs für Freunde und Familie.",
            "In Osaka erstreckt sich über eine lange Straße der Shinsekai Markt. Wir haben versucht das Ende zu finden, allerdings fehlte uns dazu die Zeit. Für den Abend war eine Food Tour geplant, denn Osaka gilt als die Stadt des guten Essens. Wie in unseren vorherigen Touren hatten wir auch ein letztes Mal Glück und wir waren die einzigen Teilnehmer.",
            "Mit unserem Guide, einer sehr nette ältere Dame, besichtigten wir diverse Restaurants. Zu Beginn gab es Takoyaki in einem kleinen Laden mit einem Michelin Stern. Takoyaki sind mit Oktopus gefüllte Teigbällchen. Sie waren sehr heiß, aber auch super lecker! Als nächstes führte unser Guide uns in ein kleines Restaurant, in dem am offenen Feuer diverse Kleinigkeiten für uns zubereitet wurden. Das dritte Restaurant servierte verschiedene Tempura-Gerichte. Von Fleisch bis zu Gemüse war alles dabei. Obwohl es in jedem Laden immer nur kleine Portionen gab, waren unsere Bäuche ab diese Punkt schon sehr voll. Doch ein letzter Halt passte definitiv noch hinein: der Nachtisch. Dazu gingen wir zu einem kleinen Stand, an dem es Taiykai gab. Dies ist Teig mit Bohnenpaste gefüllt und dann in einer Fischform gebacken. Ein würdiger Abschluss des Tages.",
          ],
        },
        {
          title: "Tag 16 - Postkarten & der Shinsekai Markt",
          imageDesktop: {
            src: "/img/staedte/osaka/day_16.avif",
            alt: "All unser Gepäck vorbereitet für den Rückflug",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/osaka/day_16_mobile.avif",
            alt: "All unser Gepäck vorbereitet für den Rückflug",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "An unserem letzten Tag in Japan wollten wir Postkarten an Familie und Freunde schreiben. Das war gar nicht so einfach, denn die Postkarten, die wir als normal erachten, gibt es kaum in Japan. Wir konnten ein paar ähnliche Karten finden und abschicken.",
            "Da wir am Vortag nicht viel Zeit für den Shinsekai Markt gehabt haben, versuchten wir an diesem Tag das Ende zu erreichen. Wir gingen an sehr vielen Geschäften vorbei, aber nach einiger Zeit und schmerzenden Füßen beschlossen wir, den Rückweg anzutreten. Da dies unser letzter Tag in Japan war und wir am nächsten Tag mit dem Flugzeug wieder in die Heimat flogen, sortierten wir im Hotel all unsere gesammelten Souvenirs. Am Ende konnten wir einen ganzen Koffer alleine nur mit Mitbringseln füllen.",
            "Den Rest des Abends verbrachten wir mit der Vorbereitung für unseren Rückflug von Osaka nach Tokyo und von Tokyo über Abudabi nach München. Dazu haben wir unsere Koffer noch einmal umsortiert, damit wir beide circa gleich schwere Koffer hatten. Haben alle Kassenbons für den Zoll vorbereitet und sind anschließend sehr zeitnahe ins Bett gegangen um fit für unsere lange lange Heimreise zu sein.",
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
          title: "Tag 7 - Der erste Restaurantbesuch",
          imageDesktop: {
            src: "/img/staedte/kyoto/day_7.avif",
            alt: "Omuraisu mit einem Fleischtopping",
            width: 380,
            height: 285,
          },
          imageMobile: {
            src: "/img/staedte/kyoto/day_7_mobile.avif",
            alt: "Omuraisu mit einem Fleischtopping",
            width: 540,
            height: 405,
          },
          paragraphs: [
            "An diesem Tag verabschiedeten wir uns von Kanazawa und fuhren mit dem Shinkansen nach Kyoto. Nach unserem Checkin am Hotel, erkundeten wir die Umgebung.",
            "Dabei entdeckten wir ein kleines Restaurant, in welchem es Omuraisu gab. Ein Gericht, das wir schon immer einmal probieren wollten. Omuraisu ist ein fluffiges Omlette, welches mit Tomatenreis gefüllt wird und oftmals mit Ketchup beschriftet wird (je nach Art des Restaurants). Da wir nun das erste mal in einem richtigen Restaurant aßen, mussten wir uns an gewisse Regeln halten. In Japan sucht man sich in den Restaurant keinen Platz, denn man wird platziert. Als nächstes bekamen wir ein Feuchttuch, mit welchem wir uns die Hände säuberten. Wenn man sein Essen gewählt hat, wartet man nicht wie in Deutschland, dass der Kellner wieder zum Tisch zurückkehrt. Man hebt den Arm und ruft laut 'sumimasen', was so viel bedeutet wie 'Entschuldigen Sie bitte'. Am Ende eines Restaurantbesuches wird zudem meist nicht am Tisch selbst, sondern an einem gesonderten Tresen am Eingang gezahlt. In Japan gibt man außerdem kein Trinkgeld, dies wird als unhöflich empfunden. Wir haben uns vor unserem Besuch im Restaurant über viele der Benimmregeln schlau gemacht, um niemanden zu verärgern.",
            "Anschließend haben wir uns wieder dem Shopping gewidmet und einige Läden rund um unser Hotel erkundschaftet. Richtung Abend haben wir uns einige Snacks im Kombini in der Nähe gekauft und sind anschließend in unser Hotel um uns für den nächsten Tag vorzubereiten.",
          ],
        },
        {
          title: "Tag 8 - Unser Bento-Kochkurs",
          imageDesktop: {
            src: "/img/staedte/kyoto/day_8.avif",
            alt: "Ein traditionelles Bento in der Bento-Box",
            width: 380,
            height: 285,
          },
          imageMobile: {
            src: "/img/staedte/kyoto/day_8_mobile.avif",
            alt: "Ein traditionelles Bento in der Bento-Box",
            width: 540,
            height: 405,
          },
          paragraphs: [
            "Dieser Tag stand ganz im Zeichen des japanischen Essens. Wir hatten uns einen Bento-Kochkurs in der Nähe unseres Hotels gebucht.",
            "In einer kleinen Gruppe mit anderen Touristen, wurden wir in einer Küche von drei japanischen Hausfrauen zur Zubereitung eines traditionellen Bentos angeleitet. Zu Beginn bereiteten wir einen 'Gomaae' zu. Das ist Salat aus Spinat mit einer Sesam Soße. Als nächstes wurde uns gezeigt, wie wir ganz einfach eine Teriyaki Soße zubereiten, um Teriyaki Hühnchen zu machen. Es ging weiter mit einem 'gerolltem Ei'. Dieses wird in einer speziellen eckigen Pfanne zubereitet. Tempura darf natürlich in keinem Bento fehlen. Sehr traditionell wurde auch noch Miso Suppe und Sushi zubereitet. waren alle kleineren Komponenten fertig, wurden sie in einer speziellen Bento-Box angerichtet. Die Miso Suppe wurde dazu gegessen.",
            "Den Rest des Tages verbrachten wir damit, in den Shopping Centern nach Kochutensilien Ausschau zu halten, um unser neu erworbenes Wissen auch zu Hause anwenden zu können. Wir fanden die spezielle eckige Pfanne und Kochstäbchen. Das sind besonders lange Stäbchen, mit denen man sich beim Kochen nicht die Hände verbrennt. Auch fanden wir einen Zooladen, aus dem wir, als begeisterte Katzenbesitzer, ein paar Souvenirs für unsere Katzen mitbrachten.",
          ],
        },
        {
          title: "Tag 9 - Eine Reise quer durch die Stadt",
          imageDesktop: {
            src: "/img/staedte/kyoto/day_9.avif",
            alt: "Ein Einblick in den Nishi Hongan-ji Tempel",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/kyoto/day_9_mobile.avif",
            alt: "Ein Einblick in den Nishi Hongan-ji Tempel",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Unser erster Tagespunkt für den Tag, war die Besichtigung eines buddhistischen Tempels in der nähe unseres Hotels, der den ältesten Ginko-Baum der Welt beherbergen sollte.",
            "Dort angekommen wirkte alles ruhig und dennoch leicht protzig, da viele Elemente der Tempel mit Gold verziert worden sind. Nach der Besichtigung erfuhren wir, dass ein Nintendo Store in Kyoto eröffnet haben soll. Als Fans machten wir uns natürlich auf den Weg diesen zu besuchen. Unsere Reise führte uns nach diesem Besuch zu dem großen und beeindruckenden Nishiki Markt. Dies ist ein riesiger Markt mit allen möglichen kleinen Läden und Cafés/Restaurants. Wer handgemachte japanische Waren sucht, ob Lebensmittel oder Non-Food-Ware, ist dort genau richtig.",
            "Da die Reise nach Japan unsere Flitterwochen waren, wollten wir ein sehr besonderes Andenken mit nach Hause nehmen. In einem Laden wählten wir Essstäbchen aus, welche dann mit unseren jeweiligen Namen und Hochzeitsdatum graviert wurden. Des weiteren gab es einen Laden, in dem auf Wunsch Ringe hergestellt wurden. Wir konnten dabei zusehen und uns einen eigenen Ring nach unseren Wünschen herstellen lassen. Ein besonderes Highlight an diesem Tag war das Wagyu grillen. In einem Restaurant konnten wir selbständig Fleisch über einem Kohlegrill zubereiten. Zum Abschluss spazierten wir durch den Kyoto Gyoen National Garden. Am Ende des Tages sind wir über 20 km gelaufen!",
          ],
        },
        {
          title: "Tag 10 - Zurück zum Nishiki Markt",
          imageDesktop: {
            src: "/img/staedte/kyoto/day_10.avif",
            alt: "Ein Café, dass aussieht als ob es gezeichet wurde",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/kyoto/day_10_mobile.avif",
            alt: "Ein Café, dass aussieht als ob es gezeichet wurde",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Da wir über die bisherigen Tage bereits sehr viele Souvenirs gekauft hatten, brauchten wir mehr Platz. Daher wollten wir uns an diesem Tag zusätzliche Koffer besorgen. Weil uns der Nishiki Market bereits am vorherigen Tag gefallen hatte, wollten wir dort unser Glück versuchen.",
            "Allerdings taten uns vom Vortag noch so die Füße weh, dass wir ein Taxi nahmen. Auf dem Markt probierten wir ein paar handgemachte Spezialitäten wir Dangos und Daifukus. Wir hatten von einem guten Teeladen gehört und so besuchten wir einen von Kyotos ältesten Teeläden, um Matcha-Pulver zu kaufen. Die Besitzer, ein älteres Paar, waren sehr nette Menschen, die uns gerne und gut zum Tee und Tee-Bechern beraten haben. Auf unserem Weg über den Markt entdeckten wir ein interessantes kleines Café. Der Innenraum war komplett in schwarz-weiß gehalten und alles wirkte so, als wäre es in 2D gezeichnet worden.",
            "Leider hatten wir zu dem Zeitpunkt noch keine Koffer gefunden die uns gefallen hatten, daher fuhren wir mit dem Taxi zurück und gingen anschließend vom Hotel aus richtung des Bahnhofs Kyoto wo es viele Einkaufszentren gab. Dort schlenderten wir schließlich solange durch diverse Läden bis wir unsere Koffer gefunden hatten. Einen knallgelben Pikachu Koffer für Robin und einen weißen Miffy Koffer für Jessi.",
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
          title: "Tag 5 - Kanazawa bei Nacht",
          imageDesktop: {
            src: "/img/staedte/kanazawa/day_5.avif",
            alt: "Ein Geisha Viertel in Kanazawa bei Nacht",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/kanazawa/day_5_mobile.avif",
            alt: "Ein Geisha Viertel in Kanazawa bei Nacht",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Eine kurze Fahrt mit dem Shinkansen, dem schnellsten Zug Japans von Tokyo führte uns nach Kanazawa. Bei der Ankunft in Kanazawa wurden wir sofort von dem imposanten Bahnhofstor überrascht, welches alleine schon einen Besuch wert ist.",
            "Mit einem kurzen Fußmarsch erreichten wir unser zentral gelegenes Hotel. Nach dem Einchecken und einem kurzen Kombini-Abendessen, ging es für uns nach draußen, um eine geführte Nachtwanderung durch Kanazawa zu erleben. Auch hier hatten wir Glück, denn wir waren wieder die einzigen Teilnehmer an diesem Abend. So hatten wir die Möglichkeit, uns in Ruhe mit unserem Guide zu unterhalten und Fragen zu stellen.",
            "Kanazwa ist eine Stadt, in der die meisten alten Gebäude noch erhalten sind. Unsere Tour führte uns weg von den belebten Straßen und rein in kleine alte Seitengassen. Wir fanden es erstaunlich, wie viel Samurai-Geschichte noch bis zum heutigen Tagen in den Mauern der Grundstücke, den Häusern und sogar den Gehwegen erhalten geblieben ist. Wir haben erfahren, dass so genannte Noren (eine Art farbiger Vorhang vor einem Restaurant) Auskunft über die Beliebtheit eines Restaurant gaben. Denn waren die Noren im Eingang schmutzig, war das Restaurant beliebt, weil zufriedenen Gäste sich nach ihrem Essen an diesen die Hände abwischten. Also je schmutziger die Noren, desto besser.",
          ],
        },
        {
          title: "Tag 6 - Das Teehaus im Garten",
          imageDesktop: {
            src: "/img/staedte/kanazawa/day_6.avif",
            alt: "Matcha Tee und Tee-Süßigkeit in einem Teehaus in Kanazawa",
            width: 380,
            height: 285,
          },
          imageMobile: {
            src: "/img/staedte/kanazawa/day_6_mobile.avif",
            alt: "Matcha Tee und Tee-Süßigkeit in einem Teehaus in Kanazawa",
            width: 540,
            height: 405,
          },
          paragraphs: [
            "Nach einer aufregenden Nacht ging es für uns zurück zum Bahnhof, um unsere Shinkansen Tickets für die Weiterreise zu buchen. Danach schlenderten wir durch die Stadt und entdeckten einen wunderschönen Park.",
            "Mitten im Park stand ein kleines Teehaus. Wir haben uns hinein gesetzt und eine Schale kalten Matcha-Tee genossen mit einer dazugehörigen Tee-Süßigkeit. In einem Teehaus zieht man zuerst die Schuhe aus. Danach geht man in einen großen Raum, in dem man sich entweder auf eine der Tatami-Matten setzt oder sich eine der Bänke aussucht. Als nächstes wird der Tee serviert und im Anschluss die Tee-Süßigkeit. Der Tee wird traditionell in 3 Zügen ausgetrunken. Die Teesüßigkeit wird mit einem Holzstäbchen zerteilt und dazu gegessen. Während des Aufenthalts in dem Teehaus herrscht Ruhe. Während unseres Besuchs dort hatten wir einen wundervollen Ausblick auf den anliegenden Garten.",
            "Kanazawa ist zudem die Stadt des Blattgoldes. An jeder Ecke gibt es verschiedene Waren, welche mit Blattgold verziert sind, zu kaufen. Wir haben das Softeis mit Blattgold ausprobiert. Nur das Eis macht den Geschmack aus, jedoch war es für uns eine lustige Erfahrung. Abschließend bummelten wir noch ein wenig durch die Stadt für ein wenig Shopping und das Pokémon-Center.",
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
          title: "Tag 11 - Viele Koffer und schlechtes Wetter",
          imageDesktop: {
            src: "/img/staedte/hiroshima/day_11.avif",
            alt: "Ein Brunnen zum Händewaschen mit einer Drachenfigur die Wasser spukt",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/hiroshima/day_11_mobile.avif",
            alt: "Ein Brunnen zum Händewaschen mit einer Drachenfigur die Wasser spukt",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Wir verlassen unser Hotel mit vier Koffern in Kyoto und machen uns auf den Weg nach Hiroshima. Wir fahren dabei wieder mit dem Shinkansen, dieses mal ist es die längste Fahrt unserer Japanreise.",
            "Das Wetter in Hiroshima war sehr regnerisch. Keine 40 Grad und Sonne mehr, sondern bedrückender Regen. Uns schien dies aufgrund der Geschichte der Stadt irgendwie passend. Da wir an einem Wochenende in Hiroshima ankamen war das Gedränge um ein Taxi sehr groß und wir mit unseren 4 Koffern konnten leider nicht zusammen in ein Taxi steigen, da die Autos in Japan sehr klein sind. Wir mussten also warten, bis zwei Taxis bereit waren uns zum Hotel zu fahren, denn Fußläufig war dies nicht zu erreichen.",
            "Angekommen am Hotel, machten wir uns zum Checkin im 14ten Stock, bezogen unser kleines, sehr feuchtes Zimmer und machten uns daran die Umgebung zu erkunden. Der Ausflug fiel aufgrund des Wetters sehr kurz aus und wir begnügten uns mit einem Abendessen aus dem Kombini und verbrachten den Rest des Abends im Hotelzimmer.",
          ],
        },
        {
          title: "Tag 12 - Bedrückende Stimmung",
          imageDesktop: {
            src: "/img/staedte/hiroshima/day_12.avif",
            alt: "Der Hiroshima Victims Memorial Cenotaph",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/hiroshima/day_12_mobile.avif",
            alt: "Der Hiroshima Victims Memorial Cenotaph",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Wir wollten nun den Friedenspark und das Peace Memorial Museum besichtigen, welche keine 5 Minuten zu Fuß von unserem Hotel entfernt lagen.",
            "Nach dem Eintritt in das Museum wurde uns beiden sofort klar, dass wir noch nie im Leben ein so bedrückendes Museum besichtigt haben. Es schildert sehr genau die Verläufe des 6. Augusts 1945 aus der Sicht der Stadtbewohner. Sowie auch die Ereignisse die dazu geführt haben, dass die Atombombe auf die Stadt abgeworfen wurde. Wir konnten eine Menge Ausstellungsstücke, welche von jenem Tag aufbewahrt wurden betrachten. Jedoch hatten wir kaum Zeit uns alles in Ruhe durchzulesen, denn man wurde von den Menschenmassen, welche zu Besuch waren mitgezogen. Außerhalb des Hiroshima Peace Memorial Museum befindet sich das Hiroshima Peace Denkmal mit der Friedensflamme. Wir konnten beobachten, wie einige Japaner Blumen an das Denkmal legten und sich verbeugten. Wir besuchten alle Denkmäler im Friedenspark Hiroshima.",
            "Nach einer sehr informativen jedoch sehr bedrückenden Erkundung der Denkmäler besichtigten wir ein Kaufhaus, um die Stimmung zu heben. Speziell besuchten wir, wie bisher in jeder Stadt, das Pokémon Center. Wir hielten auch an einem kleine Café. Wir schlossen den Tag mit Okonomiaki essen ab. Dies ist ein Pfannkuchen, welcher mit Nudeln und gewünschten Toppings auf einer großen heißen Herdplatte serviert wird.",
          ],
        },
        {
          title: "Tag 13 - Hotelaufenthalt dank Krankheit",
          imageDesktop: {
            src: "/img/staedte/hiroshima/day_13.avif",
            alt: "Okonomiaki mit Lauchzwiebeltopping",
            width: 380,
            height: 330,
          },
          imageMobile: {
            src: "/img/staedte/hiroshima/day_13_mobile.avif",
            alt: "Okonomiaki mit Lauchzwiebeltopping",
            width: 540,
            height: 620,
          },
          paragraphs: [
            "Heute ging es Jessi leider sehr schlecht, weshalb wir unseren Tag im Hotel verbrachten. Daher hier auch ein Foto vom Abendessen des Vortags...",
            "Während Jessi schlief um sich zu erholen, hat sich Robin mit den Souvinirs beschäftigt die wir beiden bis zu dem Zeitpunkt gekauft hatten. Auch einige japanische TV-Shows wurden sich angesehen und diese sind für europäische Verhältnisse sehr verrückt gewesen.",
            "Das Highlight des Tages, trotz Krankheit, waren jedoch die japanischen Werbungen, welche mit einer massiven Übertriebenheit Produkte präsentieren, dass wir uns zwischenzeitlich vor lachen kaum halten konnten. Abends gingen wir noch schnell zum Kombini um die Ecke, um ein Abendessen für uns im Hotelzimmer zu organisieren.",
          ],
        },
      ],
    },
  },
];

export const citySlugs = cities.map((c) => c.slug);

export const getCityBySlug = (slug: string) =>
  cities.find((city) => city.slug === slug);
