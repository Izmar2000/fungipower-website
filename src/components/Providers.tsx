"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { ThemeProvider } from "next-themes";
import { TrialPopupProvider } from "@/context/TrialPopupContext";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <TooltipProvider delayDuration={0}>
                    <TrialPopupProvider>
                        {children}
                    </TrialPopupProvider>
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
