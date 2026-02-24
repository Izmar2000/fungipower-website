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
    <header className="fixed top-0 left-0 z-[110] w-full pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex justify-end pt-8">

        {/* THE SCIENTIFIC MONOLITH - Architectural Logo Element */}
        <div className="absolute top-0 left-6 md:left-12 pointer-events-auto z-50">
          <a href="/" className="relative flex flex-col items-center group">
            {/* The Monolith Body - High-end Glassmorphism */}
            <div className="w-24 md:w-32 lg:w-40 bg-black/60 backdrop-blur-3xl border-x border-b border-white/10 pt-16 pb-12 shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative transition-all duration-700 overflow-hidden">
              {/* Internal Technical Grid (Subtle) */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="monolith-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#monolith-grid)" />
                </svg>
              </div>

              {/* Side Accent Line - Scientific Look */}
              <div className="absolute top-1/4 left-0 w-1 h-1/2 bg-gradient-to-b from-[#F58220] to-transparent opacity-80" />

              {/* Deployment Data - Minimalist Detail */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
                <span className="text-[6px] font-black text-white tracking-[0.4em] uppercase">FP-PRECISION</span>
                <div className="w-4 h-[1px] bg-white" />
              </div>

              {/* The Logo - Prominent & Large */}
              <div className="px-5 md:px-8 relative z-10 transition-transform duration-700 group-hover:scale-105">
                <img
                  src="/images/fungipower-logo-3.png"
                  alt="FungiPower"
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>

              {/* Terminal Shadow Effect at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Architectural Brace - Instead of strings */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/20" />
          </a>
        </div>

        {/* Floating Capsule - Deep Impact Navigation */}
        <div className="pointer-events-auto bg-black/80 backdrop-blur-3xl rounded-xl border border-white/5 transition-all duration-500 shadow-2xl flex items-center px-12 py-3 mr-0 overflow-hidden">
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.label === "HOME" ? "/#home" : link.href)}
                className="relative text-white/70 text-[10px] font-black tracking-[0.2em] uppercase hover:text-white transition-all group py-2 whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F58220] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <button
              onClick={() => scrollToSection("#contact")}
              className="group relative bg-[#F58220] text-white px-8 py-3 rounded-md text-[10px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-3 ml-6"
            >
              <span className="relative z-10">PROEF AANVRAGEN</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            </button>
          </nav>

          {/* Mobile Menu Button Container */}
          <button
            className="lg:hidden p-2 text-white/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
