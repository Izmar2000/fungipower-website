"use client";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { Section, FadeIn, GoldButton } from "./ui";

interface PartnersProps {
    onScrollTo: (id: string) => void;
}

export default function Partners({ onScrollTo }: PartnersProps) {
    return (
        <Section id="partners" className="bg-black relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wimbledon-gold rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-wimbledon-purple rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[1px] bg-wimbledon-gold" />
                            <span className="text-wimbledon-gold text-2xl font-bold tracking-[0.8em] uppercase mb-8 block">
                                STRATEGISCHE PARTNERS
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-9xl font-display font-bold italic leading-none gold-text-gradient whitespace-pre-line">
                            {CONTENT.benefits.title}
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="text-right">
                            <p className="text-off-white/40 max-w-sm ml-auto uppercase tracking-[0.5em] text-lg font-bold leading-relaxed mb-6">
                                {CONTENT.benefits.subtitle}
                            </p>
                            <div className="flex justify-end gap-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-1 bg-wimbledon-gold/20" />
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Benefits grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {CONTENT.benefits.items.map((benefit, i) => (
                        <FadeIn key={benefit.id} delay={i * 0.1}>
                            <div className="p-16 bg-black group hover:bg-wimbledon-gold transition-all duration-700 cursor-pointer relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <div className="text-9xl font-brutal leading-none">
                                        0{benefit.id}
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 border border-wimbledon-gold/30 rounded-full flex items-center justify-center mb-12 group-hover:border-wimbledon-green/30 transition-colors">
                                        <svg
                                            className="w-5 h-5 text-wimbledon-gold group-hover:text-wimbledon-green transition-colors"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold mb-8 text-white group-hover:text-wimbledon-green uppercase tracking-tight transition-colors leading-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-off-white/50 group-hover:text-wimbledon-green/80 leading-relaxed transition-colors text-lg font-light">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Visibility on the Buzz */}
                <div className="mt-40 grid lg:grid-cols-2 gap-24 items-center overflow-x-clip max-w-full">
                    <FadeIn>
                        <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-2 italic uppercase">
                            {CONTENT.benefits.visibility.title}
                        </h3>
                        <p className="text-wimbledon-gold/60 text-lg uppercase tracking-[0.3em] mb-12 font-bold">
                            {CONTENT.benefits.visibility.note}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {CONTENT.benefits.visibility.spots.map((spot, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-5 glass-card border-l-2 border-l-wimbledon-gold/30 hover:border-l-wimbledon-gold transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-wimbledon-gold font-brutal text-[10px] opacity-40">
                                            {spot.id < 10 ? `0${spot.id}` : spot.id}
                                        </span>
                                        <div className="text-sm text-white/40 font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                                            Sponsor Plek
                                        </div>
                                    </div>
                                    <div className={`text-xs font-bold uppercase tracking-widest ${spot.name ? "text-wimbledon-gold" : "text-white/20"}`}>
                                        {spot.name || "Nog beschikbaar"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="relative aspect-square max-w-[90vw] md:max-w-none rounded-full border border-wimbledon-gold/30 p-12 flex items-center justify-center bg-black/40 shadow-[0_0_80px_rgba(197,160,89,0.15)] mt-12 md:mt-0 overflow-clip">
                            {/* Compass Outer Ring */}
                            <div className="absolute inset-0 border-[6px] border-wimbledon-gold/40 border-dashed rounded-full animate-[spin_120s_linear_infinite]" />
                            <div className="absolute inset-4 border border-wimbledon-gold/20 rounded-full" />

                            {/* Compass Needles */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] fill-wimbledon-gold">
                                    <path d="M50,0 L55,45 L100,50 L55,55 L50,100 L45,55 L0,50 L45,45 Z" />
                                </svg>
                            </div>

                            {/* Compass Points: Venlo (Left) */}
                            <div className="absolute top-1/2 left-2 lg:-left-12 -translate-y-1/2 flex flex-col items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-black/80 border border-wimbledon-gold/50 flex items-center justify-center text-wimbledon-green backdrop-blur-md shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-wimbledon-gold">
                                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                                    </svg>
                                </div>
                                <span className="text-wimbledon-gold font-brutal uppercase text-base tracking-widest drop-shadow-md">Venlo</span>
                            </div>

                            {/* Compass Points: London (Right) */}
                            <div className="absolute top-1/2 right-2 lg:-right-12 -translate-y-1/2 flex flex-col items-center gap-3">
                                <span className="text-wimbledon-gold font-brutal uppercase text-base tracking-widest drop-shadow-md">Londen</span>
                                <div className="w-14 h-14 rounded-full bg-black/80 border border-wimbledon-gold/50 flex items-center justify-center text-wimbledon-green backdrop-blur-md shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-wimbledon-gold">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M6 5.3a9 9 0 0 1 0 13.4" />
                                        <path d="M18 5.3a9 9 0 0 0 0 13.4" />
                                    </svg>
                                </div>
                            </div>

                            {/* Top/Bottom generic markers */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-6 bg-wimbledon-gold/50 rounded-full" />
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-6 bg-wimbledon-gold/50 rounded-full" />

                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className="text-wimbledon-gold font-brutal text-7xl md:text-8xl mb-2 drop-shadow-[0_0_20px_rgba(197,160,89,0.6)]">
                                    {CONTENT.benefits.visibility.exclusiveCount}
                                </div>
                                <div className="text-white font-display font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm text-balance">
                                    {CONTENT.benefits.visibility.exclusiveLabel}
                                </div>
                                <button
                                    onClick={() => onScrollTo("contact")}
                                    className="mt-10 px-8 py-4 bg-wimbledon-gold text-wimbledon-green font-bold uppercase tracking-[0.2em] text-[10px] cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300 rounded-sm shadow-xl"
                                >
                                    {CONTENT.benefits.visibility.reserveCta}
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Marquee */}
                <div className="mt-40">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span className="text-white/20 text-[8px] font-bold tracking-[0.8em] uppercase">
                                {CONTENT.benefits.marqueeLabel}
                            </span>
                        </div>
                        <div className="relative flex overflow-x-hidden border-y border-white/5 py-12">
                            <div className="animate-marquee flex whitespace-nowrap gap-24 items-center">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                                    >
                                        <div className="w-12 h-12 bg-white/10 rounded-full" />
                                        <span className="text-2xl font-brutal text-white tracking-tighter">
                                            PARTNER_0{i}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-24 items-center py-12">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div
                                        key={i + 10}
                                        className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                                    >
                                        <div className="w-12 h-12 bg-white/10 rounded-full" />
                                        <span className="text-2xl font-brutal text-white tracking-tighter">
                                            PARTNER_0{i}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
