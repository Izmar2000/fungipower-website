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
    <header className="fixed top-0 left-0 z-[110] w-full transition-all duration-300 overflow-hidden group">
      {/* High-Tech Technical Interface Layer */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-3xl z-0" />

      {/* Bottom Interface Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-20" />

      {/* Precision UI Markers */}
      <div className="absolute top-4 left-4 z-20 hidden xl:block">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
          <span className="text-[6px] font-black tracking-[0.3em] text-white/40 uppercase">System: Operational</span>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-20 hidden xl:block">
        <span className="text-[6px] font-black tracking-[0.3em] text-white/40 uppercase">FP-Protocol: v4.2.0</span>
      </div>

      {/* Top Precision Scan Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-100 z-30" />

      {/* High-Visibility Mycelium Network Interface */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-50">
        <svg width="100%" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <filter id="header-glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <g stroke="#F58220" strokeWidth="1.5" fill="none" filter="url(#header-glow)">
            <path d="M-50 20 Q150 -10 300 30 T600 10 T900 40 T1250 15" />
            <path d="M100 60 Q250 80 400 20 T700 65 T1100 10" strokeWidth="0.8" opacity="0.6" />
          </g>

          {/* Active Genetic Markers */}
          <g fill="#F58220">
            <circle cx="300" cy="30" r="2" />
            <circle cx="600" cy="10" r="1.5" />
            <circle cx="900" cy="40" r="2.5" className="animate-pulse" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-5 relative z-30">

        {/* HUD Corner Brackets */}
        <div className="absolute top-0 left-6 w-4 h-4 border-l border-t border-white/20 hidden md:block" />
        <div className="absolute top-0 right-6 w-4 h-4 border-r border-t border-white/20 hidden md:block" />
        <div className="absolute bottom-0 left-6 w-4 h-4 border-l border-b border-white/20 hidden md:block" />
        <div className="absolute bottom-0 right-6 w-4 h-4 border-r border-b border-white/20 hidden md:block" />

        {/* Logo Section */}
        <a href="/" className="flex items-center relative group">
          <img
            src="/images/fungipower-logo-3.png"
            alt="FungiPower"
            className="h-10 md:h-12 lg:h-14 w-auto object-left object-contain transition-all brightness-0 invert duration-500 group-hover:scale-[1.02]"
          />
        </a>

        {/* Technical Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.label === "HOME" ? "/#home" : link.href)}
              className="relative text-white/60 text-[9px] font-black tracking-[0.3em] uppercase hover:text-white transition-all group py-2"
            >
              <span className="flex items-center gap-2">
                <span className="w-1 h-px bg-primary/40 group-hover:w-3 transition-all" />
                {link.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative h-12 px-8 bg-primary text-white text-[9px] font-black tracking-[0.3em] uppercase transition-all overflow-hidden flex items-center gap-3"
          >
            {/* Visual Button Detail */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/40" />

            <span className="relative z-10">PROEF AANVRAGEN</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[120] bg-black/95 backdrop-blur-3xl animate-fade-in flex flex-col justify-center items-center pointer-events-auto">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-white p-4">
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.label === "HOME" ? "/" : link.href)}
                className="text-white text-2xl font-black tracking-widest uppercase hover:text-[#F58220] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#F58220] text-white px-10 py-5 rounded-xl text-[12px] font-black tracking-[0.3em] uppercase shadow-2xl mt-4"
            >
              PROEF AANVRAGEN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
