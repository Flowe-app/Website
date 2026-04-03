"use client";

import React, { createContext, useContext, useState } from "react";
import { en, es, Translations } from "@/lib/translations";

type Locale = "en" | "es";

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("flowe-locale");
    if (saved === "en" || saved === "es") return saved;
    return navigator.language.startsWith("es") ? "es" : "en";
  });

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("flowe-locale", newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = locale === "es" ? es : en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
