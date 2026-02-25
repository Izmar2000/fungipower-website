"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "WETENSCHAP", href: "/#science" },
  { label: "RESULTATEN", href: "/#results" },
  { label: "OVER ONS", href: "/over-ons" },
  { label: "CONTACT", href: "/#contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 z-[110] w-full transition-all duration-500 ease-in-out ${scrolled ? "shadow-2xl" : ""
        }`}
      style={{
        background: scrolled ? `linear-gradient(90deg, #F58220 0%, #D71920 100%)` : `none`,
      }}
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-30 transition-all duration-500 ease-in-out ${scrolled ? "py-4" : "py-8"}`}>

        {/* Logo - Normal & Clean */}
        <a href="/" className="flex items-center relative group z-50">
          <img
            src="/images/fungipower-logo-3.png"
            alt="FungiPower"
            className={`w-auto object-left object-contain transition-all brightness-0 invert duration-500 group-hover:scale-[1.05] ${scrolled ? "h-10 md:h-14 lg:h-16" : "h-16 md:h-20 lg:h-24"
              }`}
          />
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
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
                onClick={() => scrollToSection(link.href)}
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
