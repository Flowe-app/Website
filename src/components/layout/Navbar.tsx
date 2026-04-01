"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let overDarkSection = false;
      const headerOut = 80; // approximate height of header
      
      const darkElements = document.querySelectorAll<HTMLElement>('.manifesto, .beta-cta, footer');
      darkElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOut && rect.bottom >= 40) {
          overDarkSection = true;
        }
      });
      
      setIsDarkTheme(overDarkSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initially in case page is reloaded halfway down
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isDarkTheme ? 'theme-dark' : ''} transition-colors duration-300`}>
      <nav className="nav-container">
        <Link href="#" className="nav-logo flex items-center gap-2">
          <Image src="/logo-flowe.png" alt="Flowē Logo" width={28} height={28} className="object-contain" priority />
          <span>Flowē<span>.</span></span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#compare">Why Flowē</Link>
          </li>
          <li>
            <Link href="#updates">Updates</Link>
          </li>
          <li>
            <Link href="#beta" className="nav-cta">
              Join Beta →
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
