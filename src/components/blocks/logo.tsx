/**
 * Znak marki: trzy nachodzące koła. Odwzorowany wektorowo, więc jest ostry
 * w każdej skali i można go przebarwić pod jasny lub ciemny pasek.
 *
 * Na ciemnym tle kontrast niesie jasne koło u góry, na jasnym — ciemne po lewej.
 */
export function LogoMark({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const gora = variant === "light" ? "#FFEAE0" : "#C99A8D";
  const lewo = variant === "light" ? "#C99A8D" : "#372824";
  const prawo = "#FF6556";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g opacity="0.85">
        <circle cx="50" cy="32" r="29" fill={gora} />
        <circle cx="30" cy="68" r="29" fill={lewo} />
        <circle cx="70" cy="68" r="29" fill={prawo} />
      </g>
    </svg>
  );
}

/** Pełny lockup: znak + nazwa pracowni. */
export default function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark
        variant={variant}
        className="h-9 w-9 shrink-0 transition-transform duration-500 ease-out group-hover:scale-105 sm:h-10 sm:w-10"
      />
      <span className="leading-tight">
        <span className="block font-display text-lg tracking-wide sm:text-xl">
          Pracownia psychoterapii
        </span>
        <span className="block font-sans text-[10px] uppercase tracking-[0.24em] opacity-75 sm:text-[11px]">
          Ewa Zając-Łękawa
        </span>
      </span>
    </span>
  );
}
