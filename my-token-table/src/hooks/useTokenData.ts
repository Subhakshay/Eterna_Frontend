// src/hooks/useTokenData.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { DEFAULT_MOCK_DATA } from "@/lib/mockData";
import { IToken } from "@/lib/types";

// This function simulates fetching data from an API
async function fetchTokens(filter: string): Promise<IToken[]> {
    console.log(`Fetching tokens for filter: ${filter}`);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 750));

    // In a real app, you'd fetch from an API:
    // const res = await fetch(`/api/tokens?filter=${filter}`);
    // const data = await res.json();
    // return data;

    // For now, we'll just return the mock data.
    // You can add logic here to return different data based on the filter.
    // For example, reverse the array for "Final Stretch"
    if (filter === 'final-stretch') {
        return [...DEFAULT_MOCK_DATA].reverse();
    }

    return DEFAULT_MOCK_DATA;
}


export const useTokenData = (filter: string) => {
    return useQuery<IToken[], Error>({
        // The queryKey is an array that uniquely identifies this query.
        // Adding 'filter' to it makes React Query refetch when the filter changes.
        queryKey: ["tokens", filter],
        queryFn: () => fetchTokens(filter),
        // You can add options like 'staleTime' or 'refetchInterval' here
    });
};