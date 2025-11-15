// src/components/organisms/TokenTableRow.tsx
"use client";

import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { IToken } from "@/lib/types";
import { TokenCell } from "../molecules/TokenCell";
import { PriceText } from "../atoms/PriceText";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react"; // Import the Star icon

interface TokenTableRowProps {
    token: IToken;
    isInWatchlist: boolean;
    onToggleWatchlist: () => void;
}

const TokenTableRowComponent: React.FC<TokenTableRowProps> = ({
    token,
    isInWatchlist,
    onToggleWatchlist
}) => {
    return (
        <TableRow className="border-zinc-800 hover:bg-zinc-800/50">

            {/* 0. Watchlist Star Button */}
            <TableCell>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggleWatchlist}
                    className="text-zinc-500 hover:text-yellow-400"
                >
                    <Star
                        className={cn("h-5 w-5", isInWatchlist && "fill-yellow-400 text-yellow-400")}
                    />
                </Button>
            </TableCell>

            {/* 1. Token Cell */}
            <TableCell>
                <div className="flex items-center justify-between">
                    <TokenCell name={token.name} symbol={token.symbol} icon={token.icon} />
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-medium text-green-400">Live</span>
                    </div>
                </div>
            </TableCell>

            {/* 2. Price Cell */}
            <TableCell>
                <PriceText symbol={token.id} initialPrice={token.price} />
            </TableCell>

            {/* 3. Change Cell */}
            <TableCell className={cn(token.change > 0 ? "text-green-400" : "text-red-400")}>
                {token.change.toFixed(2)}%
            </TableCell>

            {/* 4. Market Cap Cell */}
            <TableCell className="hidden md:table-cell">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="cursor-help border-b border-dashed border-zinc-500">
                            ${token.marketCap.toLocaleString()}
                        </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-zinc-900 text-white border-zinc-700">
                        <p>Market Cap = Price x Circulating Supply</p>
                    </TooltipContent>
                </Tooltip>
            </TableCell>

            {/* 5. Volume Cell */}
            <TableCell className="hidden md:table-cell">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="link" className="text-white p-0">
                            ${token.volume.toLocaleString()}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 bg-zinc-900 text-white border-zinc-700">
                        <p className="font-bold">{token.name} Volume Details</p>
                        <p className="text-sm text-zinc-300">
                            This is the total value of {token.symbol} traded in the last 24 hours.
                        </p>
                    </PopoverContent>
                </Popover>
            </TableCell>

            {/* 6. Trade Button Cell */}
            <TableCell className="hidden sm:table-cell text-right">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 bg-zinc-800 text-white transition-all hover:bg-zinc-700 hover:text-white hover:border-blue-500"
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
            </TableCell>
        </TableRow>
    );
};

export const TokenTableRow = React.memo(TokenTableRowComponent);