export function SkipLink() {
  return (
    <a
      href="#main"
      className="
        sr-only
        focus:not-sr-only
        focus:fixed
        focus:left-2
        focus:top-2
        focus:z-2000
        focus:rounded
        focus:bg-black
        focus:px-3
        focus:py-2
        focus:text-white
        focus:outline
        focus:outline-offset-2
        focus:outline-focus
      "
    >
      Zum Inhalt springen
    </a>
  );
}
