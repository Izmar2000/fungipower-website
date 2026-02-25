import { useState } from "react";
import { Send, CheckCircle2, FlaskConical, ClipboardCheck, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const PilotForm = () => {
    const { toast } = useToast();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        location: "",
        capacity: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        toast({
            title: "Pilot aanvraag verzonden",
            description: "Onze specialisten nemen binnen 24 uur contact met u op.",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (submitted) {
        return (
            <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Bedankt voor de aanvraag</h2>
                    <p className="text-white/60 text-lg mb-8">
                        Uw interesse in FungiPower is geregistreerd. we nemen zo snel mogelijk contact op om de details van de wetenschappelijke pilot te bespreken.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-black text-xs uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                        Nieuwe aanvraag indienen
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Scientific structural grid background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="scientific-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#scientific-grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Scientific & Research Context */}
                    <div className="pt-8">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="h-px w-10 bg-primary" />
                            <span className="text-white text-[10px] font-black tracking-[0.5em] uppercase">
                                PRECISION GROWTH PROTOCOL
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-12 leading-[0.9] tracking-tighter uppercase">
                            STABILITEIT DOOR<br />
                            <span className="text-[#888]">RESEARCH & DATA.</span>
                        </h2>

                        <div className="grid gap-10 mb-16">
                            {[
                                {
                                    title: "VALIDATIE OP LOCATIE",
                                    desc: "Onze methodiek is gebaseerd op meetbare stabiliteit in elke teeltcyclus.",
                                    icon: FlaskConical
                                },
                                {
                                    title: "OPBRENGST OPTIMALISATIE",
                                    desc: "Directe resultaten voor telers door wetenschappelijk onderbouwde methodiek.",
                                    icon: ClipboardCheck
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-2">{item.title}</h4>
                                        <p className="text-white/40 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stability Statement */}
                        <div className="p-8 border-l-2 border-primary bg-white/[0.02] backdrop-blur-3xl">
                            <p className="text-white/90 font-bold text-lg leading-relaxed max-w-md">
                                "Het fundament van FungiPower is de stabiliteit van de biologische processen. Wij bieden zekerheid aan de teler door onderzoek."
                            </p>
                            <div className="mt-6">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Onderzoeksafdeling FungiPower</span>
                            </div>
                        </div>
                    </div>

                    {/* Dedicated Form - Stable & High Tech */}
                    <div className="relative pt-4">
                        <div className="relative bg-[#111] border border-white/10 p-10 rounded-xl shadow-2xl">
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <h3 className="text-2xl font-black uppercase tracking-tight">Pilot Aanvraag</h3>
                                <div className="text-[8px] font-black text-primary px-3 py-1 border border-primary/20 rounded-full tracking-[0.2em]">VERSIE 2.4</div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">Naam</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">Bedrijfsnaam</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">Zakelijk E-mailadres</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all text-sm font-medium"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">Teeltlocatie</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">Weekcapaciteit (T)</label>
                                        <input
                                            type="text"
                                            name="capacity"
                                            value={formData.capacity}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-white/40 uppercase tracking-widest ml-1">Specificaties & Vragen</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all text-sm font-medium resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-white text-black py-5 rounded-md font-black text-xs uppercase tracking-[0.4em] hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-4 mt-4 shadow-xl shadow-black/50"
                                >
                                    VERSTUUR PROTOCOL AANVRAAG
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <p className="text-[9px] text-center text-white/20 font-black uppercase tracking-[0.2em]">
                                    Data vertrouwelijkheid gegarandeerd volgens industrie-standaarden
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
