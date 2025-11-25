import Link from "next/link";

const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/cookies", label: "Cookies" },
] as const;

export function Footer() {
  return (
    <footer className="min-h-[114px] px-4 py-4 text-text">
      <nav
        className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4"
        aria-label="Footer"
      >
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="mt-6 text-center text-text">© 2025 Robin Dohm</p>
    </footer>
  );
}
