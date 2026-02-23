"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/#home" },
  { label: "WETENSCHAP", href: "/#science" },
  { label: "RESULTATEN", href: "/#results" },
  { label: "OVER ONS", href: "/over-ons" },
  { label: "CONTACT", href: "/#contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (window.location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-transparent overflow-hidden">
      {/* Background Scientific Patterns */}
      <div className="absolute inset-0 z-[-1] opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="header-mycelium" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,20 Q30,10 50,40 T90,20 M20,80 Q40,60 60,90 T100,70" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="40" r="1" fill="white" />
            <circle cx="90" cy="20" r="0.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#header-mycelium)" />
        </svg>
      </div>

      {/* Scientific Corner Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none border-t border-r border-white/50 m-2" />
      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-5 pointer-events-none border-b border-l border-white/30 m-2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-2 relative">
        {/* Logo - Cropped to remove the two long mushrooms on the right */}
        <div className="flex items-center overflow-hidden w-[180px] md:w-[220px]">
          <img
            src="/Logo%20trans/FungiPower%20logo%20transparant.png"
            alt="FungiPower"
            className="h-14 md:h-16 w-auto object-left object-contain transition-all brightness-0 invert max-w-none"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-white text-xs font-black tracking-[0.15em] uppercase hover:opacity-70 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Request Pilot Button */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-white text-black px-8 py-3 text-xs font-black tracking-[0.15em] uppercase hover:bg-white/90 transition-all shadow-xl"
          >
            PROEF AANVRAGEN
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground text-sm font-bold tracking-widest uppercase py-3 hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-white px-6 py-3 text-xs font-black tracking-[0.15em] uppercase mt-4"
            >
              PROEF AANVRAGEN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
