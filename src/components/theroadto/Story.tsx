"use client";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { Section, FadeIn } from "./ui";

export default function Story() {
    return (
        <Section id="verhaal" className="relative">
            {/* Watermark */}
            <div className="absolute top-0 right-0 text-[20rem] font-brutal text-white/5 leading-none pointer-events-none select-none">
                STORY
            </div>

            <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto relative z-10">
                {/* Image column */}
                <div className="relative">
                    <FadeIn direction="right">
                        <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl group">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 1.5 }}
                                src="/theroadto/cover-hero.jpg"
                                alt="PlantiPower Road to Wimbledon Team"
                                className="w-full h-full object-cover transition-transform duration-1000 origin-center"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-8 left-8">
                                <div className="text-wimbledon-gold font-brutal text-8xl leading-none">
                                    01
                                </div>
                                <div className="text-white font-display font-bold uppercase tracking-[0.5em] text-lg mt-2">
                                    De Visionairs
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Corner decorations */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-wimbledon-gold/30" />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-wimbledon-gold/30" />

                    {/* Core values card */}
                    <div className="absolute -bottom-12 -right-12 w-56 h-fit bg-wimbledon-gold/10 backdrop-blur-xl border border-white/10 p-8 hidden md:block">
                        <div className="text-lg text-wimbledon-gold font-bold uppercase tracking-widest mb-6">
                            Kernwaarden
                        </div>
                        <div className="space-y-4">
                            {CONTENT.story.coreValues.map((val) => (
                                <div key={val} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-wimbledon-gold rounded-full" />
                                    <span className="text-sm text-white/80 uppercase tracking-widest font-medium">
                                        {val}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Text column */}
                <div className="space-y-12">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-[1px] bg-wimbledon-gold" />
                            <span className="text-wimbledon-gold text-2xl font-bold tracking-[0.8em] uppercase mb-8 block">
                                DE VISIONAIRS
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-[0.9] italic">
                            {CONTENT.story.title}
                        </h2>
                    </FadeIn>

                    <div className="space-y-8 text-off-white/70 text-xl leading-relaxed font-light font-serif">
                        {CONTENT.story.content.map((p, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <p>{p}</p>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="mt-16 relative p-12 glass-card border-l-0 border-r-4 border-r-wimbledon-gold italic text-2xl text-off-white/90 font-serif bg-white/[0.02]">
                            <span className="absolute -top-8 -left-4 text-8xl text-wimbledon-gold/20 font-serif">
                                "
                            </span>
                            {CONTENT.story.quote}
                            <div className="mt-6 text-sm font-display font-bold uppercase tracking-[0.3em] text-wimbledon-gold not-italic">
                                {CONTENT.story.quoteAuthor}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom callout */}
            <FadeIn delay={0.6}>
                <div className="max-w-7xl mx-auto mt-32 relative z-10">
                    <div className="glass-card p-12 border-t border-wimbledon-gold/20">
                        <div className="text-wimbledon-gold font-brutal text-lg tracking-[0.4em] uppercase mb-4">
                            {CONTENT.story.bottomCallout}
                        </div>
                        <p className="text-off-white/60 text-xl leading-relaxed max-w-4xl">
                            {CONTENT.story.bottomText}
                        </p>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
}
