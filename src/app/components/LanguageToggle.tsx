import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-md border border-input overflow-hidden text-sm font-medium">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1.5 transition-colors ${
          language === "en"
            ? "bg-primary text-white"
            : "bg-white text-muted-foreground hover:bg-muted"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("am")}
        className={`px-2.5 py-1.5 transition-colors ${
          language === "am"
            ? "bg-primary text-white"
            : "bg-white text-muted-foreground hover:bg-muted"
        }`}
        aria-label="Switch to Amharic"
      >
        አማ
      </button>
    </div>
  );
}
