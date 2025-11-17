import Link from "next/link";

const footerLinks = [
  { href: "/legacy/pages/impressum.html", label: "Impressum" },
  { href: "/legacy/pages/datenschutz.html", label: "Datenschutz" },
  { href: "/legacy/pages/cookies.html", label: "Cookies" },
] as const;

export function Footer() {
  return (
    <footer className="min-h-[114px] border-t border-line px-4 py-4 text-text">
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
