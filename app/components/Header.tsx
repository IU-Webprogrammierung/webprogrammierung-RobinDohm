"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DesktopNav } from "./header/DesktopNav";
import { HeaderLogo } from "./header/HeaderLogo";
import { MobileMenu } from "./header/MobileMenu";
import { CloseIcon, HamburgerIcon } from "./header/Icons";
import { NavLink, cityLinks } from "./header/navConfig";

export function Header() {
  // Pfad aus Next, um aktive Links zu markieren
  const pathname = usePathname() || "/";
  // State für Mobile-Menü und Städte-Dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

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
  const closeCity = () => setCityOpen(false);
  const toggleCity = () => setCityOpen((prev) => !prev);

  // Scroll-Lock nur wenn Mobile-Menü offen ist
  useEffect(() => {
    if (!mobileOpen) return;
    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;

    body.dataset.lockScrollY = String(scrollY);
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    html.style.overflowY = "scroll";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setCityOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      const y = parseInt(body.dataset.lockScrollY || "0", 10) || 0;
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      html.style.overflowY = "";
      window.scrollTo(0, y);
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // Bricht Menü/Drodown ab, wenn Viewport auf Desktop wechselt
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMobileOpen(false);
        setCityOpen(false);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <header className="bg-muted">
        <div className="mx-auto flex items-center justify-between gap-4 px-4 py-3">
          {/* Logo */}
          <HeaderLogo />

          {/* Navigation für den Desktop */}
          <DesktopNav
            cityOpen={cityOpen}
            cityActive={cityActive}
            toggleCity={toggleCity}
            closeCity={closeCity}
            isActive={isActive}
          />

          {/* Button für Mobiles Menü (öffnen/schließen) */}
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

      {/* Navigation für Mobile */}
      {mobileOpen && (
        <MobileMenu
          isActive={isActive}
          closeMobile={closeMobile}
          closeCity={closeCity}
        />
      )}
    </>
  );
}
