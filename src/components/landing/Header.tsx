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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-7xl bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 transition-all duration-500 overflow-hidden">
      {/* Subtle Internal Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Refined Background Pattern - Very Subtle */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="capsule-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#capsule-grid)" />
        </svg>
      </div>

      <div className="px-6 md:px-10 flex items-center justify-between py-3 relative">
        {/* Logo - Compact & Integrated */}
        <a href="/" className="flex items-center relative group">
          <img
            src="/images/fungipower-logo-3.png"
            alt="FungiPower"
            className="h-8 md:h-10 w-auto object-left object-contain transition-all brightness-0 invert duration-500 group-hover:scale-[1.05] max-w-none"
          />
        </a>

        {/* Desktop Navigation - Tight & Elegant */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.label === "HOME" ? "/#home" : link.href)}
              className="relative text-white/80 text-[9px] font-black tracking-[0.2em] uppercase hover:text-white transition-all group py-2 whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F58220] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* Request Pilot Button - Integrated Capsule Style */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative bg-[#F58220] text-white px-6 py-2.5 rounded-lg text-[9px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all shadow-lg flex items-center gap-3 ml-4"
          >
            <span className="relative z-10">PROEF AANVRAGEN</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-1" />
          </button>
        </nav>

        {/* Mobile Menu Button - Minimalist */}
        <button
          className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu - Integrated into Capsule */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.label === "HOME" ? "/" : link.href)}
                className="text-white/80 text-sm font-black tracking-[0.2em] uppercase transition-all text-left hover:text-white hover:pl-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-[#F58220] text-white px-6 py-4 rounded-xl text-[10px] font-black tracking-[0.3em] uppercase text-center shadow-lg"
            >
              PROEF AANVRAGEN
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
