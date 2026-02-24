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
          </pattern>
          <rect width="100%" height="100%" fill="url(#header-mycelium)" />
        </svg>
      </div>

      {/* Scientific Corner Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none border-t border-r border-white/50 m-2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4 relative">
        {/* Logo - Updated to new official version */}
        <div className="flex items-center overflow-hidden w-[200px] md:w-[250px]">
          <img
            src="/images/FungiPower Logo.png"
            alt="FungiPower"
            className="h-14 md:h-16 w-auto object-left object-contain transition-all brightness-0 invert transition-all duration-300 hover:scale-105 max-w-none"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-white/80 text-xs font-black tracking-[0.15em] uppercase hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Request Pilot Button - Integrated Lab-Tech Style */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative backdrop-blur-md bg-white/5 border border-white/20 text-white px-8 py-3 text-[10px] font-black tracking-[0.25em] uppercase hover:bg-white/10 transition-all overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <span className="relative z-10">PROEF AANVRAGEN</span>
              <div className="w-1 h-1 rounded-full bg-white opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* Subtle scientific accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 animate-fade-in shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-white/70 text-sm font-bold tracking-widest uppercase py-3 hover:text-white transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-white/10 border border-white/20 text-white px-6 py-4 text-[10px] font-black tracking-[0.2em] uppercase mt-4 text-center"
            >
              PROEF AANVRAGEN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
