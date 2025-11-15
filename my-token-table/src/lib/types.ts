// src/lib/types.ts

export interface IToken {
    id: string; // This is the Finnhub Symbol
    name: string;
    symbol: string;
    coingeckoId: string; // <-- ADD THIS
    icon: string;
    price: number;
    change: number;
    marketCap: number;
    volume: number;
}

// This is the new type for CoinGecko's data
// It's an array of [timestamp, open, high, low, close]
export type CoinGeckoOHLC = number[];