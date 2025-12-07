import Image from "next/image";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-center text-text"
    >
      {/* Headline */}
      <h1 className="text-3xl font-bold">Seite nicht gefunden</h1>

      <p className="text-xl">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>

      {/* Japanisches Sprichwort */}
      <div className="text-text text-lg mt-4">
        <p>Wie ein japanisches Sprichwort sagt:</p>
        <p className="font-jp text-red-500 text-base ">
          七転び八起き
          <span className="font-sans text-text italic">
            - Siebenmal fallen, achtmal aufstehen.
          </span>
        </p>
      </div>

      {/* Bild */}
      <div className="w-full max-w-md mx-auto">
        <Image
          src="/img/404.avif"
          alt="Ein Mann der die Schultern zuckt und nicht weiß was passiert ist"
          width={333}
          height={500}
          priority
          className="mx-auto h-auto w-auto max-h-[500px] object-contain border-none shadow-none rounded-none"
        />
      </div>
    </main>
  );
}
