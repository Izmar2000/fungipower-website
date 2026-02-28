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

                        {/* Extra Detail Block to fill empty space and look premium */}
                        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm max-w-xl hidden md:block">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <span className="block text-[#F58220] text-3xl font-black mb-1">+11.3%</span>
                                    <span className="block text-white/60 text-xs font-bold uppercase tracking-wider">Gemiddelde Rendementsstijging</span>
                                </div>
                                <div>
                                    <span className="block text-[#F58220] text-3xl font-black mb-1">100%</span>
                                    <span className="block text-white/60 text-xs font-bold uppercase tracking-wider">Biologisch & Tracable</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-white/40 text-sm italic">
                                    "Pilot programma's worden toegewezen op basis van beschikbaarheid van onze begeleidingsexperts."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Form */}
                    <div className="flex-1 w-full">
                        <div className="bg-card/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                Pilot Aanvraag
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/70 uppercase">Naam</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/70 uppercase">Bedrijfsnaam</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/70 uppercase">Zakelijk E-mailadres</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/70 uppercase">Teeltlocatie</label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/70 uppercase">Weekcapaciteit (T)</label>
                                        <input
                                            type="text"
                                            name="capacity"
                                            value={formData.capacity}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white/70 uppercase">Specificaties & Vragen</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center items-center gap-2 bg-primary text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors mt-2"
                                >
                                    <ArrowRight className="w-5 h-5 absolute left-6 opacity-0" />
                                    VERSTUUR PROTOCOL AANVRAAG
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <p className="text-[10px] text-center text-white/30 italic mt-6 px-4">
                                    * Data vertrouwelijkheid gegarandeerd volgens industrie-standaarden.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
