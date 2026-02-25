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
    <header className="fixed top-0 left-0 z-[110] w-full transition-all duration-300 overflow-hidden group border-b border-white/10">
      {/* Scientific Glass Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl z-0" />

      {/* Top Protocol Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 z-20" />

      {/* High-Visibility Mycelium Network Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        <svg width="100%" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <g stroke="#F58220" strokeWidth="1" fill="none">
            {/* Main Primary Connections */}
            <path d="M-50 40 Q150 10 300 45 T600 20 T900 55 T1250 30" />
            <path d="M100 80 Q250 100 400 40 T700 85 T1100 25" />
            <path d="M400 -10 Q500 40 450 90" strokeWidth="0.5" />
            <path d="M850 90 Q800 30 950 -10" strokeWidth="0.5" />
          </g>

          {/* Active Genetic Nodes */}
          <g fill="#F58220" filter="url(#node-glow)">
            <circle cx="300" cy="45" r="2.5" className="animate-pulse" />
            <circle cx="600" cy="20" r="2" />
            <circle cx="900" cy="55" r="3" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <circle cx="150" cy="10" r="1.5" />
            <circle cx="400" cy="40" r="2" />
            <circle cx="700" cy="85" r="2.5" />
            <circle cx="1100" cy="25" r="1.5" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4 relative z-30">

        {/* Logo - Normal & Clean */}
        <a href="/" className="flex items-center relative group">
          <img
            src="/images/fungipower-logo-3.png"
            alt="FungiPower"
            className="h-10 md:h-14 lg:h-16 w-auto object-left object-contain transition-all brightness-0 invert duration-500 group-hover:scale-[1.05]"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.label === "HOME" ? "/#home" : link.href)}
              className="relative text-white/80 text-[10px] font-black tracking-[0.2em] uppercase hover:text-white transition-all group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F58220] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <button
            onClick={() => scrollToSection("#contact")}
            className="group relative bg-[#F58220] text-white px-8 py-3 rounded-md text-[10px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-3"
          >
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
