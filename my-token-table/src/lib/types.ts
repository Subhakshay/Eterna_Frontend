// src/lib/types.ts

export interface IToken {
    id: string;
    name: string;
    symbol: string;
    icon: string; // This would be a URL path, e.g., '/tokens/eth.svg'
    price: number;
    change: number; // 24h change percentage
    marketCap: number;
    volume: number;
    // You can add more fields as needed from the Axiom website
    // e.g., chain, liquidity, etc.
}