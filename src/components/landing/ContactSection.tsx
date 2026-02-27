import { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "trial", // trial, docs, partner
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "aanvraag ontvangen",
      description: "We nemen binnen 24 uur contact met u op.",
    });
    setFormData({ name: "", email: "", company: "", interest: "trial", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            <span className="inline-block text-primary text-xs font-black tracking-[0.2em] uppercase mb-4">
              CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6 tracking-tight">
              Klaar voor de volgende stap?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-md">
              Of u nu direct een proef wilt starten of eerst meer technische details zoekt, wij staan klaar om uw teelt te ondersteunen.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-bold text-foreground">Hoofdkantoor</p>
                  <p className="text-muted-foreground">Van Heemskerckweg 26, 5928 LL Venlo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-bold text-foreground">E-mail</p>
                  <p className="text-muted-foreground">info@fungipower.bio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Direct aanvragen</h3>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Interest Selection */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-bold text-foreground uppercase tracking-wide">Ik ben geïnteresseerd in:</label>
                <div className="grid gap-3">
                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${formData.interest === 'trial' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <input type="radio" name="interest" value="trial" checked={formData.interest === 'trial'} onChange={handleChange} className="accent-primary w-4 h-4" />
                    <span className="font-medium text-foreground">Plan een proef op locatie</span>
                  </label>
                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${formData.interest === 'docs' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <input type="radio" name="interest" value="docs" checked={formData.interest === 'docs'} onChange={handleChange} className="accent-primary w-4 h-4" />
                    <span className="font-medium text-foreground">Ontvang technische documentatie</span>
                  </label>
                  <label className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${formData.interest === 'partner' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <input type="radio" name="interest" value="partner" checked={formData.interest === 'partner'} onChange={handleChange} className="accent-primary w-4 h-4" />
                    <span className="font-medium text-foreground">Word distributiepartner</span>
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Naam</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Bedrijf</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">E-mailadres</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Bericht (optioneel)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg"
              >
                <Send className="w-4 h-4" />
                Verstuur Aanvraag
              </button>
            </form>
          </div>
        </div>

        {/* Daily Branch Update Signup Banner */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-black rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220] opacity-10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D71920] opacity-10 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="inline-block text-[#F58220] text-xs font-black tracking-[0.2em] uppercase mb-4">
                SECTOR INZICHTEN
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                Elke ochtend de actuele beurs- en branche-updates in je inbox.
              </h3>
              <p className="text-white/70 text-lg">
                Meld je kosteloos aan voor onze dagelijkse briefing (ma-vrij). Ontvang direct de nieuwste compostprijzen, internationale champignontarieven en relevante marktontwikkelingen, verpakt in één korte e-mail.
              </p>
            </div>

            <div className="w-full md:w-auto flex-1 max-w-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Aanmelding gelukt!",
                    description: "Je ontvangt vanaf morgenochtend de dagelijkse branche-update.",
                  });
                }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col gap-4"
              >
                <div>
                  <label className="block text-xs font-bold text-white/50 uppercase mb-2">Jouw e-mailadres</label>
                  <input
                    type="email"
                    required
                    placeholder="kweker@bedrijf.nl"
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F58220] text-white py-3.5 rounded-lg font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Meld mij aan
                </button>
                <span className="text-center text-[10px] text-white/40 italic">
                  Uitschrijven kan op elk moment. Wij delen je data nooit.
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
