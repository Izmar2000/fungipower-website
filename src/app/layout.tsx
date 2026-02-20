import type { Metadata } from "next";
import "@/index.css";
import { Providers } from "@/components/Providers";
import { PasswordProtection } from "@/components/PasswordProtection";

export const metadata: Metadata = {
    title: "FungiPower | Industriële Paddenstoelen Kweek Verbetering",
    description:
        "Maximaliseer uw 2e en 3e vlucht opbrengst met de biologische versterker van FungiPower. Bewezen resultaten voor commerciële paddenstoelenkwekers. +212% gemiddelde opbrengststijging.",
    keywords:
        "paddenstoelenkweek, fungi, opbrengstverbetering, commerciële teelt, biologische versterker",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="nl">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Providers>
                    <PasswordProtection>
                        {children}
                    </PasswordProtection>
                </Providers>
            </body>
        </html>
    );
}
