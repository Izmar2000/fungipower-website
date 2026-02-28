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
        <section id="contact" className="py-24 bg-secondary text-secondary-foreground relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Content */}
                    <div className="flex-1">
                        <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
                            PRECISION GROWTH PROTOCOL
                        </span>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Stabiliteit door<br />Research & Data.
                        </h2>

                        <div className="space-y-6 text-lg text-white/80 leading-relaxed max-w-xl">
                            <p>
                                Het fundament van FungiPower is de stabiliteit van de biologische processen. Wij bieden zekerheid aan de teler door uitgebreid onderzoek.
                            </p>
                            <p>
                                Onze methodiek is gebaseerd op meetbare stabiliteit in elke teeltcyclus met <span className="text-white font-bold">directe resultaten</span> voor telers door een wetenschappelijk onderbouwde methodiek.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Form (Lighter style matching the info card) */}
                    <div className="flex-1 w-full">
                        <div className="bg-[#E5E5E5] rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden group">

                            <h3 className="text-2xl md:text-3xl font-black text-[#1A2234] mb-8 border-b border-black/10 pb-6 tracking-tight">
                                Pilot Aanvraag
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Naam</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-slate-900 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Bedrijfsnaam</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-slate-900 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Zakelijk E-mailadres</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-slate-900 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Teeltlocatie</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-slate-900 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Weekcapaciteit (T)</label>
                                        <input
                                            type="text"
                                            name="capacity"
                                            value={formData.capacity}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-slate-900 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Specificaties & Vragen</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full bg-white border border-transparent rounded-xl px-5 py-4 text-slate-900 text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium shadow-sm"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center items-center gap-3 bg-[#F58220] text-white py-5 rounded-xl font-black text-lg uppercase tracking-[0.1em] hover:bg-[#F58220]/90 hover:scale-[1.02] transition-all mt-2 shadow-xl shadow-primary/20"
                                >
                                    VERSTUUR PROTOCOL AANVRAAG
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <p className="text-[11px] text-center text-slate-500 italic mt-6 px-4 font-medium">
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
