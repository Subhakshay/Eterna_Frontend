// src/components/organisms/Footer.tsx
'use client';

import {
    ShieldCheck,
    Globe,
    TrendingUp,
    Wallet,
    Twitter,
    Instagram,
    Facebook
} from 'lucide-react';
import Link from 'next/link';

// Discord icon (Lucide doesn't have one, so we use its path)
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        fill="currentColor"
        viewBox="0 0 127.14 96.36"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M107.7,8.67,98.86,0C98.86,0,92.16,5.36,88.66,8.86a95.3,95.3,0,0,0-30.1,0C55,5.36,48.29,0,48.29,0L39.45,8.67C39.45,8.67,34.42,14.4,32.26,17.4S28,24.1,28,24.1L6.21,81.62C6.21,81.62,20.2,96.36,41.22,96.36a149.31,149.31,0,0,0,10.68-1.78,117.65,117.65,0,0,0,10.89-4.18,102.3,102.3,0,0,0,8.38-4.43,89.69,89.69,0,0,0,7-5.16l.23-.21.16-.16.07-.07c.36-.38.72-.77,1.07-1.16.06-.06.12-.13.18-.19.46-.5.91-1,1.35-1.51a100.25,100.25,0,0,0,11.45-13.68,101.59,101.59,0,0,0,4.89-10.43,92.5,92.5,0,0,0,2.15-7.79,93.24,93.24,0,0,0,.7-4.13,95.8,95.8,0,0,0,.19-2.65V46.86a93.22,93.22,0,0,0-1.21-12.61,85.53,85.53,0,0,0-3.32-11.59C94.2,18.86,91,14.79,91,14.79S96.88,10.05,107.7,8.67ZM53.4,65.68a5.91,5.91,0,0,1-5.87-6.21,6.06,6.06,0,0,1,6.1-6.21,6,6,0,0,1,5.86,6.21A6,6,0,0,1,53.4,65.68Zm20.4,0a5.91,5.91,0,0,1-5.87-6.21,6.06,6.06,0,0,1,6.1-6.21,6,6,0,0,1,5.86,6.21A6,6,0,0,1,73.8,65.68Z" />
    </svg>
);

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full p-2 bg-zinc-950 border-t border-zinc-800">
            <div className="container mx-auto flex items-center justify-between text-xs">

                {/* Left Side (Connection Status) */}
                <div className="flex items-center gap-2 text-green-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="hidden sm:inline">Connection stable</span>
                </div>

                {/* Right Side (PnL, Global, Socials) */}
                <div className="flex items-center gap-4">

                    {/* PnL and Wallet (Left of Global) */}
                    <div className="flex items-center gap-4 text-zinc-400">
                        <div className="flex items-center gap-1.5">
                            <TrendingUp className="h-4 w-4" />
                            <span>PnL</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Wallet className="h-4 w-4" />
                            <span>Wallet</span>
                        </div>
                    </div>

                    {/* Vertical Separator */}
                    <div className="h-6 w-px bg-zinc-800" />

                    {/* Global and Social Icons */}
                    <div className="flex items-center gap-3">
                        <span className="text-zinc-400">GLOBAL</span>

                        <Link href="#" className="p-1 text-zinc-500 hover:text-white">
                            <Instagram className="h-4 w-4" />
                        </Link>
                        <Link href="#" className="p-1 text-zinc-500 hover:text-white">
                            <Facebook className="h-4 w-4" />
                        </Link>
                        <Link href="#" className="p-1 text-zinc-500 hover:text-white">
                            <DiscordIcon className="h-4 w-4" />
                        </Link>
                        <Link href="#" className="p-1 text-zinc-500 hover:text-white">
                            <Twitter className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};