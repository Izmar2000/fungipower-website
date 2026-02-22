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
    <header className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo%20trans/FungiPower%20Logo.svg"
            alt="FungiPower"
            className="h-24 md:h-[120px] w-auto object-contain transition-all brightness-0 invert"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-white text-xs font-black tracking-[0.15em] uppercase hover:opacity-70 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Request Pilot Button */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-black text-white px-8 py-3 text-xs font-black tracking-[0.15em] uppercase hover:bg-black/80 transition-all shadow-xl"
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
