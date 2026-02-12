"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-2 border rounded-full px-3 py-1 text-sm">
      {[
        ["EN", "en"],
        ["हिं", "hi"],
        ["मर", "mr"],
      ].map(([label, code]) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2 py-1 rounded-full ${
            lang === code ? "bg-[#7A0C0C] text-white" : "text-slate-600"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
