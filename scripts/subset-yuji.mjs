// Erstelle eine .woff2 Datei mir nur den benötigten Glyphen für optimierte Ladezeiten
import { readFile, writeFile } from "node:fs/promises";
import subsetFont from "subset-font";

const GLYPHS = "旅日本東京金沢京都広島大阪";

const INPUT = "public/fonts/Yuji_Boku/YujiBoku-Regular.woff2";
const OUTPUT = "public/fonts/Yuji_Boku/YujiBoku-Subset.woff2";

async function main() {
  console.log("Lese Original-Font:", INPUT);
  const fontBuffer = await readFile(INPUT);

  console.log("Erzeuge Subset für Glyphs:", GLYPHS);
  const subsetBuffer = await subsetFont(fontBuffer, GLYPHS, {
    targetFormat: "woff2",
  });

  console.log("Schreibe Subset-Font nach:", OUTPUT);
  await writeFile(OUTPUT, subsetBuffer);

  console.log("Fertig ✅");
}

main().catch((err) => {
  console.error("Fehler beim Subsetten:", err);
  process.exit(1);
});
