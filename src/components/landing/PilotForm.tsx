import { useState } from "react";
import { CheckCircle2, ArrowRight, TrendingUp, Thermometer } from "lucide-react";
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
            title: "Proef aanvraag verzonden",
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
                        Uw interesse in FungiPower is geregistreerd. we nemen zo snel mogelijk contact op om de details van de wetenschappelijke proef te bespreken.
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
        <section id="contact" className="py-24 md:py-32 bg-[#F8F9FA] text-slate-900 relative overflow-hidden border-t border-black/5 scroll-mt-24">
            {/* Dynamic Background Element - Orange Glow to prevent 'boring' grey */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F58220]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Content */}
                    <div className="flex-1">
                        <span className="inline-block text-[#F58220] text-xs font-black tracking-[0.2em] uppercase mb-4">
                            PRECISION GROWTH PROTOCOL
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
                            Stabiliteit door<br />Research & Data.
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                            <p>
                                Het fundament van FungiPower is de stabiliteit van de biologische processen. Wij bieden zekerheid aan de teler door uitgebreid onderzoek.
                            </p>
                            <p>
                                Onze methodiek is gebaseerd op meetbare stabiliteit in elke teeltcyclus met <span className="text-[#F58220] font-bold">directe resultaten</span> voor telers door een wetenschappelijk onderbouwde methodiek.
                            </p>
                        </div>

                        {/* Premium Growth Insight Visual - Replacing the "Biometrische Setup" */}
                        <div className="mt-12 md:mt-20 w-full max-w-lg relative group">

                            {/* Layer 1: Background Blur Orb */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#F58220]/20 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

                            {/* Layer 2: Main Glass Deck - Refined for a "fuller" premium look */}
                            <div className="relative bg-gradient-to-br from-white/40 via-white/25 to-white/10 backdrop-blur-3xl border border-white/40 rounded-[48px] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.08)] overflow-hidden">

                                {/* Inner glow for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#F58220]/10 to-transparent pointer-events-none" />

                                {/* Scanning Light Effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F58220]/40 to-transparent animate-scan z-20" />

                                <div className="flex items-center justify-between mb-10 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                            <div className="w-2 h-2 rounded-full bg-[#F58220] animate-pulse" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black tracking-[0.2em] text-[#F58220] uppercase mb-0.5">Live Analysis</div>
                                            <h3 className="text-slate-900 font-black text-xl tracking-tight">Precision Growth Lab</h3>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Active</span>
                                    </div>
                                </div>

                                {/* Main Visual Core */}
                                <div className="relative h-64 mb-10 rounded-[32px] bg-slate-50/50 border border-black/5 flex items-center justify-center overflow-hidden">
                                    {/* Substrate Vitality Gauge (Animated SVG) */}
                                    <div className="relative z-10 w-40 h-40">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="8" />
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#F58220" strokeWidth="8" strokeDasharray="283" strokeDashoffset="42" strokeLinecap="round" className="animate-vitality" />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                            <span className="text-3xl font-black text-slate-900 leading-none">98.4%</span>
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Stabiliteit</span>
                                        </div>
                                    </div>

                                    {/* Technical grid overlay */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                </div>

                                {/* Floating Data Cards */}
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    <div className="bg-white/60 p-5 rounded-3xl border border-white shadow-sm hover:shadow-md transition-all">
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Mycelium Activiteit</div>
                                        <div className="text-xl font-black text-slate-900 tracking-tight">Optimaal</div>
                                        <div className="mt-3 h-1 w-full bg-slate-100 rounded-full">
                                            <div className="h-full bg-[#F58220] w-[92%] rounded-full" />
                                        </div>
                                    </div>
                                    <div className="bg-white/60 p-5 rounded-3xl border border-white shadow-sm hover:shadow-md transition-all">
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Micro-Climate</div>
                                        <div className="text-xl font-black text-slate-900 tracking-tight">Stable</div>
                                        <div className="mt-3 h-1 w-full bg-slate-100 rounded-full">
                                            <div className="h-full bg-emerald-500 w-[95%] rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Serial ID & Status dots */}
                                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between opacity-50">
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">UNIT-FPRO-0922-NL</div>
                                    <div className="flex gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <style>{`
                            @keyframes scan {
                                0% { top: -5%; opacity: 0; }
                                20% { opacity: 1; }
                                80% { opacity: 1; }
                                100% { top: 105%; opacity: 0; }
                            }
                            @keyframes vitality {
                                from { stroke-dashoffset: 264; opacity: 0; }
                                to { stroke-dashoffset: 39.6; opacity: 1; }
                            }
                            .animate-scan {
                                animation: scan 4s ease-in-out infinite;
                            }
                            .animate-vitality {
                                animation: vitality 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                            }
                        `}</style>
                    </div>

                    {/* Right Content - Premium Form Column */}
                    <div className="flex-1 w-full">
                        <div className="bg-gradient-to-br from-white/95 via-white/80 to-white/60 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-white/40">
                            {/* Subtiel gloeieffect in de hoek van de kaart zelf */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F58220]/10 rounded-full blur-[60px] -mr-24 -mt-24 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

                            {/* Gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F58220]/[0.02] to-transparent pointer-events-none" />

                            <h3 className="text-3xl font-black text-slate-900 mb-8 border-b border-black/5 pb-6 tracking-tight">
                                Proef Aanvraag
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Naam</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-5 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium shadow-inner"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Bedrijfsnaam</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-5 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Zakelijk E-mailadres</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-5 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium shadow-inner"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Teeltlocatie</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-5 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium shadow-inner"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Weekcapaciteit (T)</label>
                                        <input
                                            type="text"
                                            name="capacity"
                                            value={formData.capacity}
                                            onChange={handleChange}
                                            className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-5 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] focus:ring-4 focus:ring-[#F58220]/5 transition-all font-medium shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Specificaties & Vragen</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl px-5 py-4 text-slate-900 text-base focus:outline-none focus:border-[#F58220] transition-all resize-none font-medium shadow-inner"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#F58220] to-[#D71920] text-white py-5 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all mt-6 shadow-xl shadow-primary/20"
                                >
                                    AANVRAAG VERSTUREN
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <p className="text-[10px] text-center text-slate-400 mt-8 font-bold uppercase tracking-widest px-8 leading-loose">
                                    * Data vertrouwelijkheid strikt gegarandeerd volgens ND-industriestandaarden.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
