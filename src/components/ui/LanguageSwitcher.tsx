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
      className={`relative flex items-center p-1 rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer w-[100px] h-[34px] overflow-hidden ${
        darkNavbar 
          ? "bg-black/20" 
          : "bg-white/30 shadow-[0_4px_12px_rgba(31,38,135,0.07)]"
      }`}
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
    >
      {/* Background Pill - The Glass Slide */}
      <motion.div
        className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full z-0 border border-white/40 shadow-sm ${
          darkNavbar ? "bg-white/20" : "bg-white/80"
        }`}
        initial={false}
        animate={{ x: locale === "en" ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 450, damping: 35 }}
      />
      
      {/* Labels */}
      <div className="relative flex w-full justify-between items-center z-10">
        <span 
          className={`flex-1 text-center text-[10px] font-black tracking-widest transition-colors duration-300 ${
            locale === "en" 
              ? (darkNavbar ? "text-white" : "text-slate-900") 
              : (darkNavbar ? "text-white/40" : "text-slate-500/60")
          }`}
        >
          EN
        </span>
        <span 
          className={`flex-1 text-center text-[10px] font-black tracking-widest transition-colors duration-300 ${
            locale === "es" 
              ? (darkNavbar ? "text-white" : "text-slate-900") 
              : (darkNavbar ? "text-white/40" : "text-slate-500/60")
          }`}
        >
          ES
        </span>
      </div>
    </div>
  );
}
