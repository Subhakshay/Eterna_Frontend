// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { RealtimeProvider } from "./RealtimeProvider";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Token Trading Table",
    description: "Frontend Task",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* CHANGE IS HERE: 
        Increased padding-bottom from pb-12 to pb-20 
      */}
            <body className={`${inter.variable} font-sans dark bg-zinc-950 pb-20`}>
                <Providers>
                    <RealtimeProvider />
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}