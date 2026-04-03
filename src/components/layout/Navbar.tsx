"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>('.manifesto, .beta-cta, footer')
    );

    const observer = new IntersectionObserver(
      () => {
        // Recheck all tracked sections on any change
        const anyVisible = darkSections.some((el) => {
          const rect = el.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom >= 40;
        });
        setIsDarkTheme(anyVisible);
      },
      { threshold: [0, 0.1], rootMargin: "-40px 0px -40px 0px" }
    );

    darkSections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${isDarkTheme ? 'theme-dark' : ''} transition-colors duration-300`}>
      <nav className="nav-container">
        <Link href="#" className="nav-logo flex items-center gap-2">
          <Image src="/logo-flowe.png" alt="Flowē Logo" width={28} height={28} className="object-contain" priority />
          <span>Flowē<span>.</span></span>
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
          <ul className="nav-links">
            <li>
              <Link href="#features">{t.nav.features}</Link>
            </li>
            <li>
              <Link href="#compare">{t.nav.whyFlowe}</Link>
            </li>
            <li>
              <Link href="#updates">{t.nav.updates}</Link>
            </li>
          </ul>
          
          <LanguageSwitcher darkNavbar={isDarkTheme} />

          <Link href="#beta" className="nav-cta">
            {t.nav.joinBeta}
          </Link>
        </div>
      </nav>
    </header>
  );
}
