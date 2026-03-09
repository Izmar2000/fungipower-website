"use client";
import { CONTENT } from "@/lib/content";
import { Section, FadeIn, GoldButton } from "./ui";

interface InvestmentProps {
    onScrollTo: (id: string) => void;
}

export default function Investment({ onScrollTo }: InvestmentProps) {
    return (
        <Section id="investering" className="relative overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.08] mix-blend-luminosity">
                    <div className="absolute inset-0 bg-[url('/theroadto/cover-hero.jpg')] bg-cover bg-center bg-fixed" />
                    <div className="absolute inset-0 bg-gradient-to-t from-wimbledon-green via-wimbledon-green/95 to-wimbledon-green" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-6xl md:text-9xl font-brutal mb-4 uppercase gold-text-gradient">
                        {CONTENT.investment.sectionLabel.toUpperCase()}
                    </h2>
                </FadeIn>

                {/* Equal partners note */}
                <FadeIn delay={0.1}>
                    <p className="text-off-white/50 max-w-2xl mx-auto mb-16 text-lg font-serif italic leading-relaxed">
                        {CONTENT.investment.allEqual}
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12 items-center text-left">
                    <FadeIn direction="right">
                        <div className="space-y-8">
                            <h3 className="text-4xl font-display font-bold italic">
                                {CONTENT.investment.whyTitle}
                            </h3>
                            <p className="text-xl text-off-white/60 leading-relaxed">
                                {CONTENT.investment.whyText}
                            </p>
                            <div className="space-y-4">
                                {CONTENT.investment.breakdown.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 text-white font-display font-bold uppercase tracking-[0.2em] text-sm"
                                    >
                                        <div className="w-2 h-2 bg-wimbledon-gold rounded-full" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-off-white/40 text-sm font-serif italic leading-relaxed border-l-2 border-wimbledon-gold/30 pl-4">
                                {CONTENT.investment.budgetNote}
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left">
                        <div className="glass-card p-16 border-t-8 border-t-wimbledon-gold text-center">
                            <span className="text-wimbledon-gold text-2xl font-bold tracking-[0.8em] uppercase mb-8 block">
                                WAARDEAANBOD
                            </span>
                            <div className="text-8xl md:text-9xl font-brutal mb-4">
                                {CONTENT.investment.price}
                            </div>
                            <div className="text-off-white/40 uppercase tracking-widest text-xs mb-12">
                                {CONTENT.investment.period}
                            </div>
                            <GoldButton
                                className="w-full"
                                onClick={() => onScrollTo("contact")}
                            >
                                {CONTENT.investment.cta}
                            </GoldButton>
                            <div className="mt-8 text-sm text-off-white/30 uppercase tracking-widest font-bold text-center">
                                {CONTENT.investment.limit}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
