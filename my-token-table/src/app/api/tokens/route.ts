// src/app/api/tokens/route.ts
import { NextResponse } from "next/server";
import { DEFAULT_MOCK_DATA } from "@/lib/mockData";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") || "top-movers";
    const search = searchParams.get("search") || "";
    const symbols = searchParams.get("symbols")?.split(",") || [];

    // Simulate a real network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    let filteredData = [...DEFAULT_MOCK_DATA];

    // 1. Filter based on the selected TAB
    if (filter === "top-movers") {
        // Sort by 24h change (highest first)
        filteredData.sort((a, b) => b.change - a.change);
    } else if (filter === "new-listings") {
        // Simulate "new" by just taking a different slice of the data
        filteredData = filteredData.slice(5, 15);
    } else if (filter === "watchlist") {
        if (symbols.length > 0) {
            filteredData = filteredData.filter((token) => symbols.includes(token.id));
        } else {
            filteredData = []; // Return empty if watchlist is empty
        }
    }

    // 2. Filter based on the SEARCH input
    if (search) {
        const lowerSearch = search.toLowerCase();
        filteredData = filteredData.filter(
            (token) =>
                token.name.toLowerCase().includes(lowerSearch) ||
                token.symbol.toLowerCase().includes(lowerSearch)
        );
    }

    return NextResponse.json(filteredData);
}