"use client";

import { Linkedin, Twitter, Youtube, Instagram, Monitor, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const footerLinks = {
  product: [
    { label: "Wetenschap", href: "/#science" },
    { label: "Resultaten", href: "/#results" },
    { label: "Over Ons", href: "/over-ons" },
    { label: "Contact", href: "/#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://nl.linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
];

export const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <footer className="bg-slate-950 text-white py-16 relative overflow-hidden border-t border-slate-800">
      {/* Decorative Brand Accent - Subtle mycelium in footer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,20 Q30,10 50,40 T90,20" stroke="white" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/images/fungipower-logo-new.png"
              alt="FungiPower"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            />
            <p className="text-sm font-medium leading-relaxed text-white/90">
              Maximaliseren van paddenstoelenopbrengsten door wetenschappelijk onderbouwde biologische verbetering.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Navigatie</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-white hover:text-[#FFD166] hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-sm font-bold text-white hover:text-[#FFD166] hover:translate-x-1 inline-block transition-all text-left"
                >
                  Proef Aanvragen
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Contact</h4>
            <ul className="space-y-3 font-bold text-sm text-white">
              <li>
                <a href="mailto:info@fungipower.bio" className="hover:text-[#FFD166] transition-colors">info@fungipower.bio</a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Venlo,Nederland" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD166] transition-colors">Venlo, Nederland</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Platform</h4>
            <ul className="space-y-3 font-bold text-sm text-white">
              <li>
                <a href="/praktijkvoorbeelden" className="hover:text-[#FFD166] transition-colors flex items-center gap-2">Casussen <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-sm uppercase tracking-wider text-white/70">Bèta</span></a>
              </li>
              <li>
                <a href="/dosering-calculator" className="hover:text-[#FFD166] transition-colors flex items-center gap-2">Calculator <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-sm uppercase tracking-wider text-white/70">Bèta</span></a>
              </li>
              <li>
                <a href="/sector-inzichten" className="hover:text-[#FFD166] transition-colors flex items-center gap-2">Inzichten <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-sm uppercase tracking-wider text-white/70">Bèta</span></a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6">Support</h4>
            <ul className="space-y-3 font-bold text-sm text-white">
              <li>
                <button onClick={() => scrollToSection("#contact")} className="hover:text-[#FFD166] transition-colors text-left">Product Support</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#contact")} className="hover:text-[#FFD166] transition-colors text-left">Pilot Aanvragen</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-xs font-bold text-white/70">
              © {new Date().getFullYear()} FungiPower B.V. Alle rechten voorbehouden.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#F58220] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Right section info & Theme Toggle */}
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/70">
              <span>FungiPower B.V. • Venlo</span>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  {theme === "dark" ? <Monitor className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                  {theme === "dark" ? "Light View" : "Performance View"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
