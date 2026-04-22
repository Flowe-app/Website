"use client";

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Features from "@/components/sections/Features";
import Compare from "@/components/sections/Compare";
import Challenges from "@/components/sections/Challenges";
import Updates from "@/components/sections/Updates";
import BetaCTA from "@/components/sections/BetaCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  useEffect(() => {
    // Shared intersection observer logic for .reveal class
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
            // Free compositor layer once animation is done
            const el = entry.target as HTMLElement;
            el.addEventListener(
              "transitionend",
              () => { el.style.willChange = "auto"; },
              { once: true }
            );
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Manifesto />
      <Features />
      <Compare />
      <Challenges />
      <Updates />
      <BetaCTA />
      <Footer />
    </>
  );
}
