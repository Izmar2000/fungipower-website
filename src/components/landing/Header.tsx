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
    <header className="fixed top-0 left-0 z-[100] w-full bg-black/95 backdrop-blur-3xl border-b border-white/5 transition-all duration-300 shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4 relative">
        {/* Logo - Premium Placement */}
        <a href="/" className="flex items-center relative group">
          <img
            src="/images/fungipower-logo-3.png"
            alt="FungiPower"
            className="h-10 md:h-12 lg:h-14 w-auto object-left object-contain transition-all brightness-0 invert duration-500 group-hover:scale-[1.05] max-w-none"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.label === "HOME" ? "/#home" : link.href)}
              className="relative text-white/90 text-[10px] font-black tracking-[0.25em] uppercase hover:text-white transition-all group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-50" />
            </button>
          ))}

          {/* Request Pilot Button - Ultra Premium Lab-Tech */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative bg-[#F58220] text-white px-8 py-3 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-[#F58220] transition-all overflow-hidden border border-[#F58220]"
          >
            <div className="flex items-center gap-3">
              <span className="relative z-10">PROEF AANVRAGEN</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            </div>
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
        <div className="lg:hidden fixed inset-0 top-[calc(100%)] bg-black/98 backdrop-blur-2xl border-t border-white/10 animate-fade-in shadow-2xl h-screen">
          <nav className="flex flex-col p-8 gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.label === "HOME" ? "/" : link.href)}
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
