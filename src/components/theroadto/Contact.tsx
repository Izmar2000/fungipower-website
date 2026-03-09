"use client";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/content";
import { Section, FadeIn } from "./ui";

export default function Contact() {
    return (
        <Section id="contact" className="bg-black min-h-screen">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left: headline + stats */}
                    <div>
                        <FadeIn>
                            <div className="text-wimbledon-gold font-brutal text-[15rem] leading-none opacity-10 mb-8 select-none">
                                JOIN
                            </div>
                            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-[0.9] italic gold-text-gradient">
                                {CONTENT.contact.headline}
                            </h2>
                            <span className="text-wimbledon-gold text-2xl font-bold tracking-[0.8em] uppercase mb-12 block">
                                WORD PARTNER
                            </span>
                            <p className="text-off-white/60 text-xl leading-relaxed mb-12 font-light">
                                {CONTENT.contact.subtext}
                            </p>
                        </FadeIn>

                        <div className="grid grid-cols-3 gap-8 mb-16">
                            {CONTENT.contact.stats.map((stat, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="p-6 glass-card text-center">
                                        <div className="text-lg md:text-xl lg:text-2xl font-brutal text-white mb-2 tracking-tight whitespace-nowrap">
                                            {stat.value}
                                        </div>
                                        <div className="text-wimbledon-gold font-bold tracking-[0.6em] uppercase text-lg mb-4">
                                            {stat.label}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* Right: contact details */}
                    <div className="space-y-8">
                        <FadeIn direction="left">
                            <div className="glass-card p-6 md:p-12">
                                <h3 className="text-xs uppercase tracking-[0.5em] font-bold text-wimbledon-gold mb-12">
                                    {CONTENT.contact.contactLabel}
                                </h3>
                                <div className="space-y-12">
                                    {CONTENT.contact.contacts.map((contact, i) => (
                                        <div key={i} className="group">
                                            <h4 className="text-3xl font-display font-bold text-white mb-4 italic group-hover:text-wimbledon-gold transition-colors">
                                                {contact.name}
                                            </h4>
                                            <div className="flex flex-col md:flex-row gap-8">
                                                <a
                                                    href={`mailto:${contact.email}`}
                                                    className="flex items-center gap-3 text-off-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                                                >
                                                    <svg
                                                        className="w-4 h-4 text-wimbledon-gold shrink-0"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                        <polyline points="22,6 12,13 2,6" />
                                                    </svg>
                                                    {contact.email}
                                                </a>
                                                <a
                                                    href={`tel:${contact.phone.replace(/\\s/g, "")}`}
                                                    className="flex items-center gap-3 text-off-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest whitespace-nowrap"
                                                >
                                                    <svg
                                                        className="w-4 h-4 text-wimbledon-gold shrink-0"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                                                    </svg>
                                                    {contact.phone}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Websites */}
                        <FadeIn direction="left" delay={0.2}>
                            <div className="glass-card p-8 flex items-center justify-center gap-8">
                                {CONTENT.contact.websites.map((site) => (
                                    <a
                                        key={site}
                                        href={`https://${site}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-wimbledon-gold font-bold uppercase tracking-[0.3em] text-xs hover:text-white transition-colors"
                                    >
                                        {site}
                                    </a>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Hashtag */}
                        <FadeIn direction="left" delay={0.3}>
                            <div className="text-center">
                                <motion.div
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="text-4xl font-brutal text-wimbledon-gold/60 tracking-widest"
                                >
                                    #ROADTOWIMBLEDON
                                </motion.div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Footer bar */}
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-off-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">
                    <div className="flex items-center gap-4">
                        <svg
                            className="w-4 h-4 text-emerald-500/50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path d="M11 19l-6-6 6-6M17 5l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {CONTENT.footer.copyright}
                    </div>
                    <div className="flex gap-12">
                        {CONTENT.footer.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hover:text-wimbledon-gold transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
