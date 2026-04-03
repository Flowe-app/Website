"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  darkNavbar?: boolean;
}

export default function LanguageSwitcher({ darkNavbar = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div 
      className={`relative flex items-center p-0.5 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 cursor-pointer w-[80px] h-[28px] overflow-hidden ${
        darkNavbar 
          ? "bg-black/10" 
          : "bg-white/20 shadow-sm"
      }`}
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
    >
      {/* Background Pill - The Glass Slide */}
      <motion.div
        className={`absolute h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-full z-0 border border-white/20 ${
          darkNavbar ? "bg-white/10" : "bg-white/60"
        }`}
        initial={false}
        animate={{ x: locale === "en" ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 450, damping: 35 }}
      />
      
      {/* Labels */}
      <div className="relative flex w-full justify-between items-center z-10 px-1">
        <span 
          className={`flex-1 text-center text-[9px] font-bold tracking-widest transition-colors duration-300 ${
            locale === "en" 
              ? (darkNavbar ? "text-white" : "text-slate-900") 
              : "text-slate-400/50"
          }`}
        >
          EN
        </span>
        <span 
          className={`flex-1 text-center text-[9px] font-bold tracking-widest transition-colors duration-300 ${
            locale === "es" 
              ? (darkNavbar ? "text-white" : "text-slate-900") 
              : "text-slate-400/50"
          }`}
        >
          ES
        </span>
      </div>
    </div>
  );
}
