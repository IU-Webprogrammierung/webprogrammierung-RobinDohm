export const itineraryStops = [
  {
    title: "Auf Wiedersehen Deutschland. Hallo Japan - Tag 1",
    description:
      "Von Kiel nach Tokyo. Ankunft am Mittag, Check-in im Hotel und erste Erkundung.",
  },
  {
    title: "Tokyo, die größte Stadt der Welt - Tag 2 - 4",
    description:
      "Vom Tokyo Skytree über Akihabara und den Kawaguchi-See bis zum Ginza Viertel.",
  },
  {
    title: "Kanazawa, Samurai und Blattgold - Tag 5 - 6",
    description:
      "Die Geschichte der Samurai erleben und das berühmte Blattgold verspeisen.",
  },
  {
    title: "Kyoto, die alte Hauptstadt - Tag 7 - 10",
    description:
      "Traditionen und Tempel treffen auf Moderne. Inklusive Bento-Kochkurs.",
  },
  {
    title: "Hiroshima, die traurige Geschichte - Tag 11 - 13",
    description:
      "Atombombe, Frieden, Okonomiyaki und leider ein Krankheitstag.",
  },
  {
    title: "Osaka, wo Kulinarik lebendig wird - Tag 14 - 16",
    description:
      "Essen, Essen, Essen. Und noch mehr Essen. Dazu ein wenig Shopping.",
  },
  {
    title: "Mata Ne Japan. Zurück nach Hause! - Tag 17",
    description:
      "Inlandsflug nach Tokyo und Rückflug nach Deutschland inklusive langer Bahnfahrt.",
  },
] as const;

export const cityPins = [
  {
    name: "Tokyo",
    href: "/staedte/tokyo",
    position: { x: "65%", y: "68%" },
  },
  {
    name: "Kanazawa",
    href: "/staedte/kanazawa",
    position: { x: "46%", y: "62%" },
  },
  {
    name: "Kyoto",
    href: "/staedte/kyoto",
    position: { x: "42%", y: "70%" },
  },
  {
    name: "Osaka",
    href: "/staedte/osaka",
    position: { x: "40%", y: "73%" },
  },
  {
    name: "Hiroshima",
    href: "/staedte/hiroshima",
    position: { x: "22%", y: "75%" },
  },
] as const;
