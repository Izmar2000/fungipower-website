"use client";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { Section, FadeIn, Card } from "./ui";

export default function Campaign() {
    return (
        <Section id="campagne" className="relative overflow-x-hidden">
            {/* Background watermark */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[30rem] font-brutal text-white/5 leading-none pointer-events-none select-none -rotate-90">
                BUZZ
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Intro */}
                <FadeIn>
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-wimbledon-gold text-4xl font-bold tracking-[0.8em] uppercase mb-12 block">
                            {CONTENT.campaign.sectionLabel}
                        </span>
                        <p className="text-off-white/60 text-xl leading-relaxed">
                            {CONTENT.campaign.intro}
                        </p>
                    </div>
                </FadeIn>

                {/* ID Buzz + text */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 md:mb-32">
                    {/* Bus image */}
                    <div className="order-2 lg:order-1">
                        <FadeIn direction="right">
                            <div className="relative p-1 bg-gradient-to-br from-wimbledon-gold/40 to-transparent rounded-xl mt-8 md:mt-20">
                                <div className="relative aspect-[4/3] rounded-xl group bg-white/5 border border-wimbledon-gold/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                                        <div
                                            className="absolute inset-0 bg-[url('/theroadto/Achtergrond_buzz.png')] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-wimbledon-green/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <img
                                                src="/theroadto/vw-bus.png"
                                                alt="VW ID Buzz PlantiPower"
                                                className="w-full h-auto max-w-full relative z-10 transition-transform duration-700 hover:scale-105 translate-y-6 md:translate-y-8 translate-x-0 md:translate-x-4"
                                                style={{
                                                    filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.8)) drop-shadow(0 10px 20px rgba(197, 160, 89, 0.2))"
                                                }}
                                            />
                                            {/* Shadow underneath */}
                                            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/60 blur-3xl rounded-full -z-10" />
                                        </div>
                                    </div>

                                    {/* Pulsing sponsor spots */}
                                    <div className="absolute inset-0 pointer-events-none z-30">
                                        {[
                                            { top: "50%", left: "5%", delay: 0 },
                                            { top: "55%", right: "2%", delay: 0.5 },
                                            { bottom: "10%", left: "35%", delay: 1 },
                                        ].map((pos, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.5, 1, 0.5],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: pos.delay,
                                                }}
                                                className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-wimbledon-gold shadow-[0_0_30px_#C5A059]"
                                                style={{
                                                    top: "top" in pos ? pos.top : undefined,
                                                    bottom: "bottom" in pos ? (pos as { bottom: string }).bottom : undefined,
                                                    left: "left" in pos ? pos.left : undefined,
                                                    right: "right" in pos ? (pos as { right: string }).right : undefined,
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-wimbledon-gold/40 rounded-full animate-ping" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="absolute top-4 md:top-6 right-4 md:right-6 px-4 md:px-6 py-2 md:py-3 bg-wimbledon-gold text-wimbledon-green text-sm md:text-base font-brutal uppercase tracking-widest rounded-sm shadow-2xl z-40 transform hover:scale-110 transition-transform">
                                        {CONTENT.campaign.idBuzz.sponsorTag}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2">
                        <FadeIn direction="left">
                            <div className="flex items-center gap-4 mb-4 md:mb-6">
                                <div className="w-2 h-2 bg-wimbledon-gold rounded-full animate-pulse" />
                                <span className="text-wimbledon-gold font-bold tracking-[0.6em] uppercase text-xl">
                                    {CONTENT.campaign.idBuzz.tagline}
                                </span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-8xl font-brutal mb-6 md:mb-8 uppercase leading-[0.9] gold-text-gradient whitespace-pre-line">
                                {CONTENT.campaign.idBuzz.title}
                            </h2>
                            <p className="text-xl md:text-2xl text-off-white/70 leading-relaxed mb-8 md:mb-12 font-light italic font-serif">
                                {CONTENT.campaign.idBuzz.description}
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                {CONTENT.campaign.idBuzz.spots.map((item) => (
                                    <div
                                        key={item.key}
                                        className="p-6 glass-card text-center group hover:border-wimbledon-gold/50 transition-colors"
                                    >
                                        <div className="w-5 h-5 text-wimbledon-gold mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity text-center font-brutal text-xs">
                                            ★
                                        </div>
                                        <div className="text-white font-display font-bold text-[10px] uppercase tracking-widest">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Campaign budget note */}
                <FadeIn>
                    <div className="mb-12 md:mb-20 glass-card p-6 md:p-8 border-l-4 border-l-wimbledon-gold max-w-3xl mx-auto text-center">
                        <p className="text-off-white/70 text-base md:text-lg font-serif italic leading-relaxed">
                            {CONTENT.campaign.budget}
                        </p>
                    </div>
                </FadeIn>

                {/* Exposure cards */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-12">
                    {CONTENT.campaign.exposure.map((item, i) => (
                        <Card
                            key={i}
                            index={i}
                            iconKey={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
