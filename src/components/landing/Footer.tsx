"use client";

import { Linkedin, Twitter, Youtube, Instagram, Monitor, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const footerLinks = {
  product: [
    { label: "Wetenschap", href: "#science" },
    { label: "Resultaten", href: "#results" },
    { label: "Schaalbaarheid", href: "#scalability" },
    { label: "Prijzen", href: "#scalability" },
  ],
  company: [
    { label: "Over Ons", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Pers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentatie", href: "#" },
    { label: "Sectoren", href: "#results" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
  ],
  legal: [
    { label: "Privacybeleid", href: "#" },
    { label: "Algemene Voorwaarden", href: "#" },
    { label: "Cookiebeleid", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
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
    <footer className="bg-footer text-footer-foreground py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/logo.png"
              alt="FungiPower"
              className="h-12 w-auto object-contain mb-4 invert mix-blend-screen opacity-80"
            />
            <p className="text-sm leading-relaxed opacity-70">
              Maximaliseren van paddenstoelenopbrengsten door wetenschappelijk onderbouwde biologische verbetering.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-foreground font-bold text-sm uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-bold text-sm uppercase tracking-wider mb-4">Bedrijf</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-bold text-sm uppercase tracking-wider mb-4">Bronnen</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-bold text-sm uppercase tracking-wider mb-4">Juridisch</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} FungiPower B.V. Alle rechten voorbehouden.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Certifications & Theme Toggle */}
            <div className="flex items-center gap-4 text-xs opacity-60">
              <span>ISO 9001</span>
              <span>•</span>
              <span>EU Biologisch Gecertificeerd</span>
              <span>•</span>
              <span>SKAL</span>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1 hover:text-primary transition-colors uppercase font-bold tracking-wider"
                >
                  {theme === "dark" ? <Monitor className="w-3 h-3" /> : <Zap className="w-3 h-3" />}
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
