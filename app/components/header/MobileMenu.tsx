import Link from "next/link";
import { NavLink, activeClasses, cityLinks, primaryLinks } from "./navConfig";

type Props = {
  isActive: (link: NavLink) => boolean;
  closeMobile: () => void;
  closeCity: () => void;
};

// Mobiles Menü ausgelagert, um den Header kompakter zu halten
export function MobileMenu({ isActive, closeMobile, closeCity }: Props) {
  return (
    <div className="md:hidden">
      <div
        className="fixed inset-0 z-40"
        aria-hidden="true"
        onClick={closeMobile}
      />
      <nav
        id="mobile-menu"
        aria-label="Mobiles Menue"
        className="fixed min-h-dvh inset-x-0 top-22 z-50 mx-auto rounded-card border border-line bg-surface px-6 py-8 shadow-shadow"
      >
        <ul className="space-y-2 text-2xl font-bold max-w-48 flex flex-col items-center justify-center text-center mx-auto">
          {primaryLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => {
                  closeMobile();
                  closeCity();
                }}
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
                    onClick={() => {
                      closeMobile();
                      closeCity();
                    }}
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
              onClick={() => {
                closeMobile();
                closeCity();
              }}
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
  );
}
