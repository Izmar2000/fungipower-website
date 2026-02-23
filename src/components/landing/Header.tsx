"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

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
    <header className="relative z-50 w-full group">
      {/* Premium Glassmorphism & Mycelium Background Layer */}
      <div className="absolute inset-x-0 top-0 h-full backdrop-blur-xl bg-black/10 border-b border-white/5 transition-all duration-700 group-hover:bg-black/20">
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-header">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <pattern id="mycelium-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M10,10 Q30,40 50,20 T90,50 M110,80 Q80,110 50,90 T10,110"
                stroke="white"
                strokeWidth="0.75"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />
              <circle cx="50" cy="20" r="1.5" fill="white" filter="url(#glow-header)" />
              <circle cx="90" cy="50" r="1" fill="white" />
              <circle cx="10" cy="110" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mycelium-grid)" />

          {/* Large decorative organic curves */}
          <path
            d="M-10,40 Q150,10 300,50 T600,30 T900,60"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            className="opacity-20 animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </svg>
      </div>

      {/* Top Scanline effect - Very subtle */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo - Premium Pendant / Flag Design */}
        <div className="relative z-50">
          <div className="bg-white px-6 pb-8 pt-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-b-[2rem] w-[200px] md:w-[260px] flex flex-col items-center transform transition-all duration-500 hover:pb-12 group/logo">
            <img
              src="/images/fungipower-logo-3.png"
              alt="FungiPower"
              className="w-full h-auto object-contain transition-all duration-500 group-hover/logo:scale-105"
            />
            {/* Subtle industrial anchor element */}
            <div className="mt-4 w-8 h-1 bg-gray-100 rounded-full group-hover:w-12 transition-all" />
          </div>
          {/* Scientific connection 'wire' from top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-white/20" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 py-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-white/80 text-xs font-black tracking-[0.15em] uppercase hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}

          {/* Request Pilot Button - Integrated Lab-Tech Style */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative backdrop-blur-md bg-white/5 border border-white/20 text-white px-8 py-3 text-[10px] font-black tracking-[0.25em] uppercase hover:bg-white/10 transition-all overflow-hidden whitespace-nowrap"
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
                className="text-white/70 text-sm font-bold tracking-widest uppercase py-3 hover:text-white transition-colors text-left whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-white/10 border border-white/20 text-white px-6 py-4 text-[10px] font-black tracking-[0.2em] uppercase mt-4 text-center whitespace-nowrap"
            >
              PROEF AANVRAGEN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
