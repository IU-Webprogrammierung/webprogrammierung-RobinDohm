import Link from "next/link";
import { CityDropdown } from "./CityDropdown";
import { NavLink, activeClasses, linkBase, primaryLinks } from "./navConfig";

type Props = {
  cityOpen: boolean;
  cityActive: boolean;
  toggleCity: () => void;
  closeCity: () => void;
  isActive: (link: NavLink) => boolean;
};

// Desktop-Navigation
export function DesktopNav({
  cityOpen,
  cityActive,
  toggleCity,
  closeCity,
  isActive,
}: Props) {
  return (
    <nav
      className="hidden items-center gap-2 text-sm md:flex"
      aria-label="Hauptnavigation"
    >
      {primaryLinks.slice(0, 2).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeCity}
          className={`${linkBase} ${isActive(link) ? activeClasses : ""}`}
        >
          {link.label}
        </Link>
      ))}

      <CityDropdown
        cityOpen={cityOpen}
        cityActive={cityActive}
        toggleCity={toggleCity}
        closeCity={closeCity}
        isActive={isActive}
      />

      <Link
        href={primaryLinks[2].href}
        onClick={closeCity}
        className={`${linkBase} ${
          isActive(primaryLinks[2]) ? activeClasses : ""
        }`}
      >
        {primaryLinks[2].label}
      </Link>
    </nav>
  );
}
