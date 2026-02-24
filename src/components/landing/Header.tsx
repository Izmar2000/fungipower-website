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
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex justify-end pt-6">

        {/* LOGO PENDANT - The Hanging Flag (Desktop & Mobile) */}
        <div className="absolute top-0 left-6 md:left-12 pointer-events-auto z-50">
          <a href="/" className="relative flex flex-col items-center group">
            {/* The Flag Body */}
            <div className="w-20 md:w-28 lg:w-36 bg-black border-x border-b border-white/10 pt-12 pb-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative transition-all duration-500 group-hover:pb-14">
              {/* Internal Texture */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 pointer-events-none" />

              {/* The Logo */}
              <div className="px-4 md:px-6 relative z-10 transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/images/fungipower-logo-3.png"
                  alt="FungiPower"
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>

              {/* Lab-Tech Detail Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-white/40 to-transparent" />
            </div>

            {/* Hanging Wires */}
            <div className="absolute top-0 left-3 w-px h-12 bg-white/10" />
            <div className="absolute top-0 right-3 w-px h-12 bg-white/10" />
          </a>
        </div>

        {/* Floating Capsule - Navigation Only */}
        <div className="pointer-events-auto bg-black/40 backdrop-blur-3xl rounded-2xl border border-white/10 transition-all duration-500 flex items-center px-4 md:px-10 py-3 ml-20 md:ml-32 lg:ml-0 overflow-hidden">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.label === "HOME" ? "/#home" : link.href)}
                className="relative text-white/80 text-[10px] font-black tracking-[0.2em] uppercase hover:text-white transition-all group py-2 whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F58220] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <button
              onClick={() => scrollToSection("#contact")}
              className="group relative bg-[#F58220] text-white px-8 py-2.5 rounded-lg text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all shadow-lg flex items-center gap-3 ml-4"
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
