// src/components/molecules/TokenCard.tsx
"use client";

import React from "react";
import { IToken } from "@/lib/types";
import { TokenCell } from "./TokenCell";
import { PriceText } from "../atoms/PriceText";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star } from "lucide-react"; // Import Star

interface TokenCardProps {
    token: IToken;
    isInWatchlist: boolean;
    onToggleWatchlist: () => void;
}

const Stat: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
    <div className="flex flex-col">
        <span className="text-sm text-zinc-400">{label}</span>
        <span className="text-base font-medium text-white">{value}</span>
    </div>
);

export const TokenCard: React.FC<TokenCardProps> = ({ token, isInWatchlist, onToggleWatchlist }) => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 space-y-4">

            {/* Top Section: Icon/Name and Price */}
            <div className="flex justify-between items-start">
                <TokenCell name={token.name} symbol={token.symbol} icon={token.icon} />

                {/* Watchlist Star Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggleWatchlist}
                    className="text-zinc-500 hover:text-yellow-400 -mr-2 -mt-2"
                >
                    <Star
                        className={cn("h-5 w-5", isInWatchlist && "fill-yellow-400 text-yellow-400")}
                    />
                </Button>
            </div>

            {/* Price (moved below cell) */}
            <PriceText symbol={token.id} initialPrice={token.price} />

            {/* Middle Section: Stats */}
            <div className="grid grid-cols-2 gap-4">
                <Stat
                    label="Change (24h)"
                    value={
                        <span className={cn(token.change > 0 ? "text-green-400" : "text-red-400")}>
                            {token.change.toFixed(2)}%
                        </span>
                    }
                />
                <Stat
                    label="Market Cap"
                    value={`$${token.marketCap.toLocaleString()}`}
                />
                <Stat
                    label="Volume (24h)"
                    value={`$${token.volume.toLocaleString()}`}
                />
            </div>

            {/* Bottom Section: Trade Button */}
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-400"
                    >
                        Trade
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 text-white border-zinc-700">
                    <DialogHeader>
                        <DialogTitle>Trade {token.name} ({token.symbol})</DialogTitle>
                        <DialogDescription className="text-zinc-400">
                            This is a placeholder trade modal.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <p>Your trade UI would go here.</p>
                        <p className="text-lg font-bold">
                            Current Price: <PriceText symbol={token.id} initialPrice={token.price} />
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            Confirm Trade
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};