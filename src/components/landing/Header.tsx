"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
    <header className="relative z-50 w-full bg-transparent overflow-hidden border-b border-white/5">
      {/* Top Metadata Bar - Scientific Grade Touch */}
      <div className="w-full bg-black/20 backdrop-blur-sm border-b border-white/5 py-1 px-6 md:px-12 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[8px] font-black text-white/40 tracking-[0.3em] uppercase">System Active</span>
          </div>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-[8px] font-black text-white/40 tracking-[0.3em] uppercase hidden sm:block">FungiPower OS v2.4.0</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[8px] font-black text-white/40 tracking-[0.3em] uppercase">Ref: SC-240-FP</span>
        </div>
      </div>

      {/* Background Scientific Patterns - Elevated and Dynamic */}
      <div className="absolute inset-0 z-[-1] opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="animate-pulse" style={{ animationDuration: '8s' }}>
          <pattern id="header-mycelium-lux" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M10,20 Q40,10 60,50 T110,30 M30,100 Q60,80 80,110 T140,90"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              className="animate-mycelium-slow"
            />
            <circle cx="60" cy="50" r="1.5" fill="white" className="opacity-50" />
            <circle cx="110" cy="30" r="1" fill="white" className="opacity-30" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#header-mycelium-lux)" />
        </svg>
      </div>

      {/* Architectural Logo Pendant */}
      <div className="absolute top-0 left-[6%] md:left-[8%] w-[1px] h-32 bg-gradient-to-b from-white to-transparent opacity-20 z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-6 md:py-8 relative">
        {/* Logo - Premium Placement with Pendant Effect */}
        <div className="flex items-center relative group">
          {/* Scientific Frame around logo on hover */}
          <div className="absolute -inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none" />
          <img
            src="/images/fungipower-logo-3.png"
            alt="FungiPower"
            className="h-20 md:h-24 lg:h-28 w-auto object-left object-contain transition-all brightness-0 invert duration-500 group-hover:scale-[1.02] max-w-none"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="relative text-white/90 text-[10px] font-black tracking-[0.25em] uppercase hover:text-white transition-all group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-50" />
            </button>
          ))}

          {/* Request Pilot Button - Ultra Premium Lab-Tech */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative bg-white text-black px-10 py-4 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center gap-4">
              <span className="relative z-10">PROEF AANVRAGEN</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            </div>
            {/* Gloss Highlight */}
            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[150%]" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 text-white border border-white/10 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-2xl border-t border-white/10 animate-fade-in shadow-2xl h-screen">
          <nav className="flex flex-col p-8 gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-white text-lg font-black tracking-[0.3em] uppercase py-2 border-l-2 border-transparent hover:border-white pl-4 transition-all text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-white text-black px-8 py-6 text-[12px] font-black tracking-[0.4em] uppercase mt-12 text-center"
            >
              PROEF AANVRAGEN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
