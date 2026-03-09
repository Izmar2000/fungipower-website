"use client";
import { CONTENT } from "@/lib/content";
import { Section, FadeIn } from "./ui";
import EuropeMap from "./EuropeMap";

export default function Route() {
    return (
        <Section id="route" className="bg-black/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
                    <div className="lg:col-span-5">
                        <FadeIn>
                            <div className="text-wimbledon-gold font-brutal text-6xl sm:text-8xl mb-4 opacity-20">
                                02
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 md:mb-8 gold-text-gradient italic leading-none">
                                DE
                                <br />
                                {CONTENT.route.title}
                            </h2>
                            <p className="text-lg md:text-xl mb-8 md:mb-12 leading-relaxed opacity-70">
                                {CONTENT.route.description}
                            </p>

                            <div className="space-y-4">
                                {CONTENT.route.countries.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between py-4 border-b border-white/5 group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-6">
                                            <span className="text-wimbledon-gold font-display font-bold text-xs opacity-50">
                                                0{i + 1}
                                            </span>
                                            <span className="text-white font-display font-bold uppercase tracking-widest group-hover:text-wimbledon-gold transition-colors">
                                                {item.name}
                                            </span>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-7">
                        <FadeIn direction="left">
                            <EuropeMap />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </Section>
    );
}
