import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Search, X, ArrowRight } from "lucide-react";
import { searchIndex, SearchResult } from "../data/searchIndex";
import { useLanguage } from "../context/LanguageContext";

const categoryColors: Record<string, string> = {
  Page: "bg-blue-100 text-blue-700",
  Program: "bg-purple-100 text-purple-700",
  Campaign: "bg-orange-100 text-orange-700",
  News: "bg-green-100 text-green-700",
  Publication: "bg-yellow-100 text-yellow-700",
  Job: "bg-pink-100 text-pink-700",
};

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Ctrl+K to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setResults([]);
      setActiveIndex(0);
    }
  }, [open]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setActiveIndex(0);
      return;
    }
    const q = query.toLowerCase();
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8));
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    navigate(result.path);
    setOpen(false);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      handleSelect(results[activeIndex]);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-input bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted transition-colors"
        aria-label="Open search"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">{t("search.hint")}</span>
        <span className="sm:hidden">Search</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[2000] flex items-start justify-center pt-[10vh] px-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Search panel */}
          <div
            className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-4 py-3 border-b">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("search.placeholder")}
                className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-muted-foreground border rounded px-1.5 py-0.5 hover:bg-muted"
              >
                Esc
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <ul className="max-h-[60vh] overflow-y-auto py-2">
                {results.map((result, i) => (
                  <li key={result.path}>
                    <button
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        i === activeIndex ? "bg-muted" : "hover:bg-muted/50"
                      }`}
                      onClick={() => handleSelect(result)}
                      onMouseEnter={() => setActiveIndex(i)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium text-sm text-foreground truncate">
                            {result.title}
                          </span>
                          <span
                            className={`shrink-0 text-xs px-1.5 py-0.5 rounded-full font-medium ${
                              categoryColors[result.category] ?? "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {result.category}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {result.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query && results.length === 0 && (
              <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                {t("search.noResults")}
              </div>
            )}

            {!query && (
              <div className="px-4 py-6 text-center text-muted-foreground text-sm">
                Start typing to search across all pages, campaigns, news, and jobs.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
