// src/lib/mockData.ts
import { IToken } from "./types";

export const DEFAULT_MOCK_DATA: IToken[] = [
    {
        id: "1",
        name: "Ether",
        symbol: "ETH",
        icon: "/tokens/eth.svg", // You'll need to add dummy icons to /public/tokens/
        price: 3450.78,
        change: 2.5,
        marketCap: 414000000000,
        volume: 15000000000,
    },
    {
        id: "2",
        name: "Bitcoin",
        symbol: "BTC",
        icon: "/tokens/btc.svg",
        price: 65000.12,
        change: -1.2,
        marketCap: 1200000000000,
        volume: 34000000000,
    },
    {
        id: "3",
        name: "Solana",
        symbol: "SOL",
        icon: "/tokens/sol.svg",
        price: 150.45,
        change: 5.8,
        marketCap: 67000000000,
        volume: 2500000000,
    },
    {
        id: "4",
        name: "Chainlink",
        symbol: "LINK",
        icon: "/tokens/link.svg",
        price: 18.22,
        change: 0.5,
        marketCap: 10000000000,
        volume: 500000000,
    },
    // Add 5-6 more to make the list look realistic
];