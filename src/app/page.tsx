"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { ScienceSection } from "@/components/landing/ScienceSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { ScalabilitySection } from "@/components/landing/ScalabilitySection";
import { PilotForm } from "@/components/landing/PilotForm";
import { Footer } from "@/components/landing/Footer";

const Page = () => {
    return (
        <div className="min-h-screen bg-background">
            <HeroSection />
            <ScalabilitySection />
            <ResultsSection />
            <ScienceSection />
            <PilotForm />
            <Footer />
        </div>
    );
};

export default Page;
