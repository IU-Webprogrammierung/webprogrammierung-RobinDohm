export type NavLink = {
  href: string;
  label: string;
};

export const primaryLinks: NavLink[] = [
  { href: "/", label: "Start" },
  { href: "/japan", label: "Japan" },
  { href: "/wer-sind-wir", label: "Wer sind wir" },
];

export const cityLinks: NavLink[] = [
  { href: "/staedte/tokyo", label: "Tokyo" },
  { href: "/staedte/kanazawa", label: "Kanazawa" },
  { href: "/staedte/kyoto", label: "Kyoto" },
  { href: "/staedte/hiroshima", label: "Hiroshima" },
  { href: "/staedte/osaka", label: "Osaka" },
];

export const linkBase =
  "rounded-md px-3 py-1.5 transition-colors hover:text-primary no-underline";

export const activeClasses =
  "text-primary shadow-[inset_0_-2px_0_var(--color-primary)]";
