"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const primaryLinks: NavLink[] = [
  { href: "/", label: "Start" },
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

const linkBase =
  "rounded-md px-3 py-1.5 transition-colors hover:text-primary no-underline";
const activeClasses =
  "text-primary shadow-[inset_0_-2px_0_var(--color-primary)]";

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

const HamburgerIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export function Header() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const normalize = (value: string) =>
    value === "/" ? "/" : value.replace(/\/$/, "");

  const isActive = (link: NavLink) => {
    const target = normalize(pathname);
    const candidate = normalize(link.href);
    if (candidate === "/") {
      return target === "/";
    }
    return target.startsWith(candidate);
  };

  const cityActive = cityLinks.some(isActive);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="bg-muted">
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-surface border-line md:hidden"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="sr-only">
              {mobileOpen ? "Menü schließen" : "Menü öffnen"}
            </span>
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40"
            aria-hidden="true"
            onClick={closeMobile}
          />
          <nav
            id="mobile-menu"
            aria-label="Mobiles Menü"
            className="fixed min-h-dvh inset-x-0 top-22 z-50 mx-auto rounded-card border border-line bg-surface px-6 py-8 shadow-shadow"
          >
            <ul className="space-y-2 text-2xl font-bold max-w-48 flex flex-col items-center justify-center text-center mx-auto">
              {primaryLinks.slice(0, 2).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={`block rounded-md px-3 py-2 transition-colors hover:text-primary no-underline ${
                      isActive(link) ? activeClasses : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <span className="text-2xl font-bold text-text">Städte</span>
                <ul className="mt-2 pl-2 text-lg font-semibold">
                  {cityLinks.map((city) => (
                    <li key={city.href}>
                      <Link
                        href={city.href}
                        onClick={closeMobile}
                        className={`block rounded-md px-3 py-1 transition-colors hover:text-primary no-underline ${
                          isActive(city) ? activeClasses : ""
                        }`}
                      >
                        {city.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <Link
                  href={primaryLinks[2].href}
                  onClick={closeMobile}
                  className={`block rounded-md px-3 py-1 transition-colors hover:text-primary no-underline ${
                    isActive(primaryLinks[2]) ? activeClasses : ""
                  }`}
                >
                  {primaryLinks[2].label}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
