"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  match?: readonly string[];
};

const primaryLinks: NavLink[] = [
  { href: "/", label: "Start", match: ["/"] },
  { href: "/japan", label: "Japan" },
  { href: "/wer-sind-wir", label: "Wer sind wir" },
];

const cityLinks: NavLink[] = [
  { href: "/staedte/tokyo", label: "Tokyo" },
  { href: "/staedte/kanazawa", label: "Kanazawa" },
  { href: "/staedte/kyoto", label: "Kyoto" },
  { href: "/staedte/hiroshima", label: "Hiroshima" },
  { href: "/staedte/osaka", label: "Osaka" },
];

const ChevronDown = () => (
  <svg
    aria-hidden="true"
    className="ml-2 h-3 w-3 text-text/80"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1l6 6 6-6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Header() {
  const pathname = usePathname() || "/";

  const normalize = (value: string) =>
    value === "/" ? "/" : value.replace(/\/$/, "");

  const isActive = (link: NavLink) => {
    const target = normalize(pathname);
    const matchers = link.match ?? [link.href];
    return matchers.some((matcher) => target.startsWith(normalize(matcher)));
  };

  const linkBase =
    "rounded-md px-3 py-1.5 transition-colors hover:text-primary no-underline";
  const activeClasses =
    "bg-muted text-primary shadow-[inset_0_-2px_0_var(--color-primary)]";

  const cityActive = cityLinks.some(isActive);

  return (
    <header className=" bg-muted">
      <div className="mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          aria-label="Startseite"
          className="inline-flex items-center"
        >
          <Image
            src="/img/logo.avif"
            alt="Logo von JPBlog"
            width={632}
            height={142}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-2 text-sm md:flex"
          aria-label="Hauptnavigation"
        >
          {primaryLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${linkBase} ${isActive(link) ? activeClasses : ""}`}
            >
              {link.label}
            </Link>
          ))}

          <details className="relative">
            <summary
              className={`flex cursor-pointer items-center appearance-none ${linkBase} ${
                cityActive ? activeClasses : ""
              }`}
              aria-haspopup="true"
            >
              Städte
              <ChevronDown />
            </summary>
            <ul className="absolute left-0 top-full z-20 mt-2 min-w-32 rounded-md border border-line bg-surface p-2 shadow-lg">
              {cityLinks.map((city) => (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className={`block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted hover:text-primary no-underline ${
                      isActive(city) ? activeClasses : ""
                    }`}
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <Link
            href={primaryLinks[2].href}
            className={`${linkBase} ${
              isActive(primaryLinks[2]) ? activeClasses : ""
            }`}
          >
            {primaryLinks[2].label}
          </Link>
        </nav>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Menü öffnen"
        >
          <span className="sr-only">Menü öffnen</span>
          <span className="block h-0.5 w-5 bg-text shadow-shadow" />
        </button>
      </div>
    </header>
  );
}
