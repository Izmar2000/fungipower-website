import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
        <section id="contact" className="py-24 md:py-32 bg-[#F8F9FA] text-slate-900 relative overflow-hidden border-t border-black/5">
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

                        {/* Grafisch Super Dik Element - Lab / Tech Widget (Darkened for contrast) */}
                        <div className="mt-12 md:mt-16 w-full max-w-md bg-slate-900 border border-white/10 p-8 rounded-[32px] relative overflow-hidden shadow-2xl group">
                            {/* Orange Glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F58220]/20 rounded-full blur-[50px] -mr-16 -mt-16 pointer-events-none transition-transform duration-1000 group-hover:scale-150" />

                            <div className="flex items-center gap-5 mb-8 relative z-10">
                                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shadow-inner">
                                    <div className="w-2 h-2 rounded-full bg-[#F58220] animate-ping absolute" />
                                    <div className="w-2 h-2 rounded-full bg-[#F58220] shadow-[0_0_10px_#F58220]" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black tracking-[0.2em] text-[#F58220] uppercase mb-1">
                                        Live monitoring
                                    </div>
                                    <div className="text-white font-bold text-lg">Biometrische Setup</div>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <div className="flex items-center justify-between text-sm mb-2">
                                        <span className="text-white/60 font-medium">Substraat Kwaliteit</span>
                                        <span className="text-white font-mono font-bold">A+ / 98.4%</span>
                                    </div>
                                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden shadow-inner">
                                        <div className="h-full bg-gradient-to-r from-[#F58220] to-[#D71920] w-[98%] rounded-full relative">
                                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px] animate-pulse" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between text-sm mb-2">
                                        <span className="text-white/60 font-medium">Residu Detectie</span>
                                        <span className="text-emerald-400 font-mono font-bold">0.00 PPM</span>
                                    </div>
                                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden shadow-inner">
                                        <div className="h-full bg-emerald-500 w-full rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Premium Form Column */}
                    <div className="flex-1 w-full">
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group border border-black/5">
                            {/* Subtiel gloeieffect in de hoek van de kaart zelf */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F58220]/5 rounded-full blur-[60px] -mr-24 -mt-24 pointer-events-none" />

                            <h3 className="text-3xl font-black text-slate-900 mb-8 border-b border-black/5 pb-6 tracking-tight">
                                Pilot Aanvraag
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
