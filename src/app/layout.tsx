import type { Metadata } from "next";
import "@/index.css";
import { Providers } from "@/components/Providers";
import { PasswordProtection } from "@/components/PasswordProtection";
import { Header } from "@/components/landing/Header";

export const metadata: Metadata = {
    title: "FungiPower | Industriële Paddenstoelen Kweek Verbetering",
    description:
        "Maximaliseer uw rendement uit elke vlucht met de biologische versterker van FungiPower. Bewezen resultaten voor commerciële paddenstoelenkwekers. +11,3% gemiddelde opbrengstverhoging.",
    keywords:
        "paddenstoelenkweek, fungi, opbrengstverbetering, commerciële teelt, biologische versterker",
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", type: "image/png" }
        ],
        apple: "/apple-icon.png",
    },
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
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
            </head>
            <body>
                <Providers>
                    <PasswordProtection>
                        <Header />
                        {children}
                    </PasswordProtection>
                </Providers>
            </body>
        </html>
    );
}
