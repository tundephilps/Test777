"use client";
import setLanguageValue from "@/actions/set-language-action";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";
import { languages } from "./header-data";

export const LanguageSelector = () => {
  const currentLocale = useLocale();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isPending, startTransition] = useTransition();

  const currentLanguage =
    languages.find((l) => l.code === currentLocale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setShowLangDropdown(false);

    startTransition(async () => {
      await setLanguageValue(langCode);
      window.location.reload();
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowLangDropdown(!showLangDropdown)}
        disabled={isPending}
        className={`bg-[#0a1f2d] rounded-lg px-2.5 py-1.5 text-sm flex items-center gap-1.5 min-w-[68px] justify-center ${
          isPending ? "opacity-60" : ""
        }`}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <span className="text-xs font-medium">
          {currentLanguage.code.toUpperCase()}
        </span>
      </button>

      {showLangDropdown && (
        <div className="absolute right-0 top-full mt-2 bg-[#0a1f2d] border border-gray-700 rounded-lg shadow-lg z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={isPending}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 hover:bg-[#0d2535] text-sm ${
                lang.code === currentLocale ? "bg-[#0d2535]" : ""
              } ${isPending ? "opacity-50" : ""}`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.name}</span>
              {lang.code === currentLocale && (
                <span className="ml-auto text-green-400 text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
