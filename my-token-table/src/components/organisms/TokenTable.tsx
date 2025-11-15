// src/components/organisms/TokenTable.tsx
"use client";

import React, { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useTokenData } from "@/hooks/useTokenData";
import { TableSkeleton } from "./TableSkeleton";
import { TokenTableRow } from "./TokenTableRow";
import { SortableHeader, SortConfig } from "../molecules/SortableHeader";
import { IToken } from "@/lib/types";
import { TokenCard } from "../molecules/TokenCard";
// Import our new watchlist store
import { useWatchlistStore } from "@/store/watchlistStore";

interface TokenTableProps {
    filter: string;
    search: string; // Receive search prop
}

export const TokenTable: React.FC<TokenTableProps> = ({ filter, search }) => {
    const [sortConfig, setSortConfig] = useState<SortConfig | null>({
        key: "marketCap",
        direction: "desc",
    });

    // Get watchlist data and actions from the store
    const { watchlist, addToken, removeToken } = useWatchlistStore();

    // Pass filter and search to the hook
    const { data, isLoading, isError } = useTokenData(filter, search);

    const handleSort = (key: string) => {
        setSortConfig((prevConfig) => {
            let direction: "asc" | "desc" = "asc";
            if (prevConfig && prevConfig.key === key) {
                direction = prevConfig.direction === "asc" ? "desc" : "asc";
            }
            return { key, direction };
        });
    };

    const sortedData = useMemo(() => {
        if (!data) return [];
        const sortableData = [...data];
        if (sortConfig) {
            sortableData.sort((a, b) => {
                const aValue = a[sortConfig.key as keyof IToken];
                const bValue = b[sortConfig.key as keyof IToken];
                if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
                return 0;
            });
        }
        return sortableData;
    }, [data, sortConfig]);

    if (isLoading) return <TableSkeleton />;

    if (isError) {
        return <div className="flex items-center justify-center h-48 bg-zinc-800 text-red-400 rounded-lg">
            Failed to load token data. Please try again.
        </div>;
    }

    if (data && data.length === 0 && filter === 'watchlist') {
        return <div className="flex items-center justify-center h-48 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg">
            Your watchlist is empty. Add tokens by clicking the star icon.
        </div>;
    }

    if (data && data.length === 0 && search) {
        return <div className="flex items-center justify-center h-48 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg">
            No tokens found for "{search}".
        </div>;
    }

    return (
        <div className="mt-4">
            <Table className="hidden md:table">
                <TableHeader>
                    <TableRow className="border-zinc-800 hover:bg-zinc-900/50">
                        {/* Add a new header for the star */}
                        <TableHead className="w-[50px]"></TableHead>
                        <SortableHeader columnKey="name" sortConfig={sortConfig} onSort={handleSort} className="w-[250px]">Token</SortableHeader>
                        <SortableHeader columnKey="price" sortConfig={sortConfig} onSort={handleSort}>Price</SortableHeader>
                        <SortableHeader columnKey="change" sortConfig={sortConfig} onSort={handleSort}>Change (24h)</SortableHeader>
                        <SortableHeader columnKey="marketCap" sortConfig={sortConfig} onSort={handleSort} className="hidden md:table-cell">Market Cap</SortableHeader>
                        <SortableHeader columnKey="volume" sortConfig={sortConfig} onSort={handleSort} className="hidden md:table-cell">Volume (24h)</SortableHeader>
                        <TableHead className="hidden sm:table-cell text-right">Trade</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedData.map((token) => {
                        const isInWatchlist = watchlist.includes(token.id);
                        return (
                            <TokenTableRow
                                key={token.id}
                                token={token}
                                isInWatchlist={isInWatchlist}
                                onToggleWatchlist={() => {
                                    isInWatchlist ? removeToken(token.id) : addToken(token.id)
                                }}
                            />
                        );
                    })}
                </TableBody>
            </Table>
            <div className="space-y-4 md:hidden">
                {sortedData.map((token) => {
                    const isInWatchlist = watchlist.includes(token.id);
                    return (
                        <TokenCard
                            key={token.id}
                            token={token}
                            isInWatchlist={isInWatchlist}
                            onToggleWatchlist={() => {
                                isInWatchlist ? removeToken(token.id) : addToken(token.id)
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};