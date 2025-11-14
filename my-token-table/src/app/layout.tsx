// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Make sure Inter is imported
import "./globals.css";
import { Providers } from "./providers";

// Initialize the font with the variable
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter", // <-- Add this
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
            {/* Add the font variable and 'font-sans' to the body */}
            <body className={`${inter.variable} font-sans dark`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}