// src/components/organisms/TokenTable.tsx
"use client";

import React, { useState, useMemo } from "react";
import {
    Table,
    TableBody,
    TableHead, // Make sure TableHead is imported
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useTokenData } from "@/hooks/useTokenData";
import { TableSkeleton } from "./TableSkeleton";
import { TokenTableRow } from "./TokenTableRow";
import {
    SortableHeader,
    SortConfig,
} from "../molecules/SortableHeader";
import { IToken } from "@/lib/types";
import { TokenCard } from "../molecules/TokenCard"; // Import the new mobile card

interface TokenTableProps {
    filter: string;
}

export const TokenTable: React.FC<TokenTableProps> = ({ filter }) => {
    // 1. Add sorting state
    const [sortConfig, setSortConfig] = useState<SortConfig | null>({
        key: "marketCap",
        direction: "desc",
    });

    const { data, isLoading, isError } = useTokenData(filter);

    // 2. Create the sorting handler function
    const handleSort = (key: string) => {
        setSortConfig((prevConfig) => {
            let direction: "asc" | "desc" = "asc";
            if (prevConfig && prevConfig.key === key) {
                direction = prevConfig.direction === "asc" ? "desc" : "asc";
            }
            return { key, direction };
        });
    };

    // 3. Memoize the sorted data for performance
    const sortedData = useMemo(() => {
        if (!data) return [];
        const sortableData = [...data];

        if (sortConfig) {
            sortableData.sort((a, b) => {
                const aValue = a[sortConfig.key as keyof IToken];
                const bValue = b[sortConfig.key as keyof IToken];

                if (aValue < bValue) {
                    return sortConfig.direction === "asc" ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === "asc" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [data, sortConfig]);

    // Handle Loading State
    if (isLoading) {
        return <TableSkeleton />;
    }

    // Handle Error State
    if (isError) {
        return (
            <div className="flex items-center justify-center h-48 bg-zinc-800 text-red-400 rounded-lg">
                Failed to load token data. Please try again.
            </div>
        );
    }

    // 4. Render the responsive layout
    return (
        <div className="mt-4">
            {/* --- DESKTOP TABLE (Hidden on mobile) --- */}
            <Table className="hidden md:table">
                <TableHeader>
                    <TableRow className="border-zinc-800 hover:bg-zinc-900/50">
                        {/* Token */}
                        <SortableHeader
                            columnKey="name"
                            sortConfig={sortConfig}
                            onSort={handleSort}
                            className="w-[250px]"
                        >
                            Token
                        </SortableHeader>

                        {/* Price */}
                        <SortableHeader
                            columnKey="price"
                            sortConfig={sortConfig}
                            onSort={handleSort}
                        >
                            Price
                        </SortableHeader>

                        {/* Change */}
                        <SortableHeader
                            columnKey="change"
                            sortConfig={sortConfig}
                            onSort={handleSort}
                        >
                            Change (24h)
                        </SortableHeader>

                        {/* Chart (7d) - New Column */}
                        <TableHead className="hidden lg:table-cell">
                            Chart (7d)
                        </TableHead>

                        {/* Market Cap */}
                        <SortableHeader
                            columnKey="marketCap"
                            sortConfig={sortConfig}
                            onSort={handleSort}
                            className="hidden md:table-cell"
                        >
                            Market Cap
                        </SortableHeader>

                        {/* Volume */}
                        <SortableHeader
                            columnKey="volume"
                            sortConfig={sortConfig}
                            onSort={handleSort}
                            className="hidden md:table-cell"
                        >
                            Volume (24h)
                        </SortableHeader>

                        {/* Trade Button Header */}
                        <TableHead className="hidden sm:table-cell text-right">
                            Trade
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedData.map((token) => (
                        <TokenTableRow key={token.id} token={token} />
                    ))}
                </TableBody>
            </Table>

            {/* --- MOBILE CARD LIST (Hidden on desktop) --- */}
            <div className="space-y-4 md:hidden">
                {sortedData.map((token) => (
                    <TokenCard key={token.id} token={token} />
                ))}
            </div>
        </div>
    );
};