interface LanguageSwitcherProps {
  currentLocale: "fr" | "en";
  frenchPath: string;
  englishPath: string;
}

export default function LanguageSwitcher({
  currentLocale,
  frenchPath,
  englishPath,
}: LanguageSwitcherProps) {
  const linkClass =
    "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition";
  const activeClass = "bg-zinc-900 text-white";
  const inactiveClass = "bg-zinc-100 text-zinc-600 hover:bg-zinc-200";

  return (
    <nav
      aria-label="Language selection"
      className="flex items-center gap-1 self-start rounded-full border border-zinc-200 bg-white p-1 shadow-sm"
    >
      <a
        href={frenchPath}
        hrefLang="fr-FR"
        className={`${linkClass} ${
          currentLocale === "fr" ? activeClass : inactiveClass
        }`}
        aria-current={currentLocale === "fr" ? "page" : undefined}
      >
        FR
      </a>
      <a
        href={englishPath}
        hrefLang="en-US"
        className={`${linkClass} ${
          currentLocale === "en" ? activeClass : inactiveClass
        }`}
        aria-current={currentLocale === "en" ? "page" : undefined}
      >
        EN
      </a>
    </nav>
  );
}
