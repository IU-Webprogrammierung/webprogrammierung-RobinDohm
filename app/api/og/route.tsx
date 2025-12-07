import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const COLORS = {
  bg: "#6bb3ea",
  card: "#ffffff",
  text: "#171717",
  accentA: "#c81d25",
  accentB: "#a11219",
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title")?.slice(0, 80) ?? "Japan Reiseblog";
  const subtitle =
    searchParams.get("subtitle")?.slice(0, 120) ??
    "Die Eindrücke eines Paares bei Ihrer Reise durch Japan.";

  const notoSans = await fetch(
    new URL("/fonts/Noto_Sans/NotoSans-Bold.ttf", req.url)
  ).then((res) => res.arrayBuffer());

  // Logo (AVIF wird nicht unterstützt, daher PNG verwenden)
  const logoUrl = new URL("/img/logo-og.png", req.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: COLORS.bg,
        }}
      >
        <div
          style={{
            width: 1080,
            height: 510,
            background: COLORS.card,
            borderRadius: 32,
            boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
            padding: 40,
            display: "flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 12,
              background: `linear-gradient(180deg, ${COLORS.accentA}, ${COLORS.accentB})`,
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 40,
              width: "100%",
            }}
          >
            <div
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <img
                src={logoUrl}
                alt="Logo"
                width={360}
                height={82}
                style={{
                  objectFit: "contain",
                  marginBottom: 16,
                }}
              />

              <h1
                style={{
                  margin: 0,
                  fontFamily: "NotoSans",
                  fontSize: 48,
                  lineHeight: 1.1,
                  color: COLORS.text,
                }}
              >
                {title}
              </h1>

              <p
                style={{
                  margin: 0,
                  fontFamily: "NotoSans",
                  fontSize: 24,
                  lineHeight: 1.4,
                  color: "#444",
                }}
              >
                {subtitle}
              </p>
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 30% 30%, ${COLORS.accentA}, ${COLORS.accentB})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 80,
                  fontFamily: "NotoSans",
                }}
              >
                日本
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [
        {
          name: "NotoSans",
          data: notoSans,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
