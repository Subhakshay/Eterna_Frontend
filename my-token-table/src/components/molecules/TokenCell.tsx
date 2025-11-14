// src/components/molecules/TokenCell.tsx
import Image from "next/image";
import React from "react";

interface TokenCellProps {
    icon: string; // URL path to the icon
    name: string;
    symbol: string;
}

export const TokenCell: React.FC<TokenCellProps> = ({ icon, name, symbol }) => {
    return (
        <div className="flex items-center gap-3">
            {/* Using Next.js Image for optimization.
        We must add 'example.com' to next.config.js if using external images.
        For now, we assume local images in /public.
      */}
            <Image
                src={icon}
                alt={`${name} logo`}
                width={28}
                height={28}
                className="rounded-full"
                // Handle image loading errors
                onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <div className="flex items-baseline gap-2">
                <span className="font-medium text-white">{name}</span>
                <span className="text-sm text-zinc-400">{symbol}</span>
            </div>
        </div>
    );
};