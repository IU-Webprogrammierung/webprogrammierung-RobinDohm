type ControlButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
};

export function ControlButton({
  direction,
  onClick,
  disabled,
}: ControlButtonProps) {
  const isPrev = direction === "prev";
  const label = isPrev ? "Vorheriges Bild" : "Nächstes Bild";
  const title = isPrev ? "Zurück" : "Weiter";
  const symbol = isPrev ? "<" : ">";

  return (
    <button
      type="button"
      title={title}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={`
        hidden lg:block
        w-[42px] h-[42px]
        border border-line
        rounded-md
        text-xl font-bold
        items-center
        transition-[background-color,box-shadow,opacity] duration-200
        ${
          disabled
            ? "bg-gray-200 opacity-40 cursor-not-allowed shadow-none"
            : "bg-white cursor-pointer hover:border-accent hover:shadow-md"
        }
      `}
    >
      {symbol}
    </button>
  );
}
