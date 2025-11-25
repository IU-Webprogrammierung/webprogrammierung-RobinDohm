import Image from "next/image";
import Link from "next/link";

// Logo ausgelagert, damit Header schlanker bleibt
export function HeaderLogo() {
  return (
    <Link href="/" aria-label="Startseite" className="inline-flex items-center">
      <Image
        src="/img/logo.avif"
        alt="Logo von JPBlog"
        width={632}
        height={142}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}
