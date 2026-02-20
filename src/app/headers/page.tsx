"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { label: "HOME", href: "#" },
    { label: "WETENSCHAP", href: "#" },
    { label: "RESULTATEN", href: "#" },
    { label: "CONTACT", href: "#" },
];

// VARIANT 1: Energetic Orange Gradient (Premium Agritech feel)
const OrangeHeader = () => {
    return (
        <header className="w-full bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FFD700] p-[1px] shadow-2xl">
            <div className="bg-black/90 backdrop-blur-md w-full">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-6">
                    <img src="/Logo%20trans/FungiPower%20Logo.svg" alt="FungiPower" className="h-16 w-auto" />
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="text-[#FFA500] text-xs font-black tracking-widest hover:text-white transition-colors uppercase">
                                {link.label}
                            </a>
                        ))}
                        <button className="bg-[#FFA500] text-black px-8 py-3 text-xs font-black tracking-widest uppercase hover:bg-white transition-all rounded-full shadow-lg shadow-orange-500/20">
                            PROEF AANVRAGEN
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

// VARIANT 2: Industrial Modern (Glassmorphism with Orange accents)
const MinimalHeader = () => {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
                <img src="/Logo%20trans/FungiPower%20Logo.svg" alt="FungiPower" className="h-10 w-auto" />
                <nav className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-white/70 text-[10px] font-bold tracking-[0.2em] hover:text-[#FFA500] transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <button className="flex items-center gap-2 group text-[#FFA500] text-[10px] font-black tracking-[0.2em] uppercase">
                    PILOT REQUEST <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </header>
    );
};

export default function HeadersPage() {
    return (
        <div className="min-h-screen bg-[#0A0F0A] py-20 px-8 flex flex-col gap-20">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic">Header Concepten</h1>
                <p className="text-white/40 max-w-xl mx-auto italic">Hieronder wat verschillende stijlen. Merk op hoe we oranje kunnen gebruiken zonder de high-end agritech uitstraling te verliezen.</p>
            </div>

            <section className="space-y-8">
                <h2 className="text-primary text-[10px] font-black tracking-[0.3em] uppercase opacity-50 text-center">Optie 1: Energetic Industrial (Oranje Gradient Accenten)</h2>
                <div className="relative h-40 bg-zinc-900/50 rounded-3xl flex items-center justify-center overflow-hidden border border-white/5">
                    <OrangeHeader />
                </div>
            </section>

            <section className="space-y-8">
                <h2 className="text-primary text-[10px] font-black tracking-[0.3em] uppercase opacity-50 text-center">Optie 2: Floating Minimalist (Ultra High-End)</h2>
                <div className="relative h-40 bg-zinc-900/50 rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 pb-20">
                    <MinimalHeader />
                </div>
            </section>

            <div className="flex justify-center mt-20">
                <button
                    onClick={() => window.location.href = "/"}
                    className="text-white/20 hover:text-white transition-colors text-[10px] font-black tracking-[0.2em] underline"
                >
                    TERUG NAAR DE LIVE PAGINA
                </button>
            </div>
        </div>
    );
}
