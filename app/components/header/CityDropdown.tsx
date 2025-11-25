import Link from "next/link";
import { ChevronDown } from "./Icons";
import { NavLink, activeClasses, cityLinks, linkBase } from "./navConfig";

type Props = {
  cityOpen: boolean;
  cityActive: boolean;
  toggleCity: () => void;
  closeCity: () => void;
  isActive: (link: NavLink) => boolean;
};

// Dropdown für Städte
export function CityDropdown({
  cityOpen,
  cityActive,
  toggleCity,
  closeCity,
  isActive,
}: Props) {
  return (
    <details className="relative" open={cityOpen}>
      <summary
        className={`flex cursor-pointer items-center appearance-none ${linkBase} ${
          cityActive ? activeClasses : ""
        }`}
        aria-haspopup="true"
        onClick={(e) => {
          e.preventDefault();
          toggleCity();
        }}
      >
        Städte
        <ChevronDown />
      </summary>
      <ul className="absolute left-0 top-full z-20 mt-2 min-w-32 rounded-md border border-line bg-surface p-2 shadow-lg">
        {cityLinks.map((city) => (
          <li key={city.href}>
            <Link
              href={city.href}
              onClick={closeCity}
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
  );
}
