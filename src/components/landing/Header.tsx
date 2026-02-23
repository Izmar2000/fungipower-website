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
    <header className="relative z-50 w-full bg-white border-b border-gray-100 overflow-hidden">
      {/* Background Scientific Patterns */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="header-mycelium" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,20 Q30,10 50,40 T90,20 M20,80 Q40,60 60,90 T100,70" stroke="black" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="40" r="1" fill="black" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#header-mycelium)" />
        </svg>
      </div>

      {/* Scientific Corner Accents - More subtle for white theme */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none border-t border-r border-black m-2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4 relative">
        {/* Logo - Cropped to remove the two long mushrooms on the right */}
        <div className="flex items-center overflow-hidden w-[180px] md:w-[220px]">
          <img
            src="/Logo%20trans/FungiPower%20logo%20transparant.png"
            alt="FungiPower"
            className="h-14 md:h-16 w-auto object-left object-contain transition-all transition-all duration-300 hover:scale-105 max-w-none"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-black/70 text-xs font-black tracking-[0.15em] uppercase hover:text-black transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Request Pilot Button - HubSpot style */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#FF5C35] text-white px-8 py-3 text-xs font-black tracking-[0.15em] uppercase hover:bg-[#e04e2a] transition-all shadow-xl"
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
