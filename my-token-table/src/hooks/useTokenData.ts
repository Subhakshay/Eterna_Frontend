// src/hooks/useTokenData.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { IToken } from "@/lib/types";
import { useWatchlistStore } from "@/store/watchlistStore";

// The hook now accepts a search term
export const useTokenData = (filter: string, search: string) => {
    // Get the watchlist from our new store
    const { watchlist } = useWatchlistStore();

    const fetchTokens = async (): Promise<IToken[]> => {
        // Build the query parameters
        const params = new URLSearchParams();
        params.set("filter", filter);

        if (search) {
            params.set("search", search);
        }

        // If on the watchlist tab, send our watchlist symbols to the API
        if (filter === "watchlist" && watchlist.length > 0) {
            params.set("symbols", watchlist.join(","));
        }

        const res = await fetch(`/api/tokens?${params.toString()}`);

        if (!res.ok) {
            throw new Error("Failed to fetch token data");
        }

        const data = await res.json();
        return data;
    };

    return useQuery<IToken[], Error>({
        // The queryKey is now dynamic and includes all dependencies
        // React Query will re-fetch automatically when any of these change
        queryKey: ["tokens", filter, search, watchlist],
        queryFn: fetchTokens,
    });
};