"use client";

import React, { createContext, useContext, useState } from "react";
import { TrialPopup } from "@/components/landing/TrialPopup";

interface TrialPopupContextType {
    openTrialPopup: () => void;
    closeTrialPopup: () => void;
}

const TrialPopupContext = createContext<TrialPopupContextType | undefined>(undefined);

export const TrialPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openTrialPopup = () => setIsOpen(true);
    const closeTrialPopup = () => setIsOpen(false);

    return (
        <TrialPopupContext.Provider value={{ openTrialPopup, closeTrialPopup }}>
            {children}
            <TrialPopup open={isOpen} onOpenChange={setIsOpen} />
        </TrialPopupContext.Provider>
    );
};

export const useTrialPopup = () => {
    const context = useContext(TrialPopupContext);
    if (context === undefined) {
        throw new Error("useTrialPopup must be used within a TrialPopupProvider");
    }
    return context;
};
