"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { FadeIn, GoldButton } from "./ui";
import { useRef } from "react";

interface HeroProps {
    onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll();

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center font-sans"
        >
            {/* Parallax background */}
            <motion.div
                style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="/theroadto/cover-hero.jpg"
                    alt="PlantiPower Road to Wimbledon"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 cinematic-gradient z-20" />
            </motion.div>

            {/* Content */}
            <div className="relative z-30 text-center px-6 max-w-7xl">
                <FadeIn direction="down">
                    <div className="flex flex-col items-center justify-center gap-4 mb-2 pt-4 md:pt-12">
                        <img
                            src="/theroadto/logo-rtw.png"
                            alt="PlantiPower Logo"
                            className="h-16 md:h-32 object-contain mt-4 md:mt-6"
                        />
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[1px] w-12 bg-wimbledon-gold" />
                            <span className="text-wimbledon-gold text-lg font-bold tracking-[0.6em] uppercase font-display">
                                {CONTENT.hero.badge}
                            </span>
                            <div className="h-[1px] w-12 bg-wimbledon-gold" />
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="relative">
                        <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-brutal leading-[0.95] mb-8 gold-text-gradient uppercase py-2 break-words">
                            ROAD TO
                            <br />
                            WIMBLEDON
                        </h1>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className="text-lg md:text-2xl font-light text-off-white/80 max-w-3xl mx-auto mb-6 leading-relaxed font-serif italic">
                        {CONTENT.hero.subheadline}
                    </p>
                    <span className="text-wimbledon-gold text-2xl font-bold tracking-[0.8em] uppercase mb-12 block">
                        DE ROAD TO WIMBLEDON
                    </span>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <GoldButton onClick={() => onScrollTo("investering")}>
                            {CONTENT.hero.cta}
                        </GoldButton>
                        <button
                            onClick={() => onScrollTo("verhaal")}
                            className="flex items-center gap-3 text-white uppercase tracking-widest text-xs font-bold hover:text-wimbledon-gold transition-colors group"
                        >
                            {CONTENT.hero.ctaSecondary}
                            <svg
                                className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </FadeIn>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
                onClick={() => onScrollTo("verhaal")}
            >
                <svg
                    className="w-8 h-8 text-wimbledon-gold opacity-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </motion.div>
        </section>
    );
}
