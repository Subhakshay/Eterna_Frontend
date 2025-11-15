// src/lib/mockData.ts
import { IToken } from "./types";

// These are the Finnhub symbols for the WebSocket
export const CRYPTO_SYMBOLS = [
    "BINANCE:BTCUSDT", "BINANCE:ETHUSDT", "BINANCE:SOLUSDT", "BINANCE:DOGEUSDT",
    "BINANCE:LINKUSDT", "BINANCE:AVAXUSDT", "BINANCE:DOTUSDT", "BINANCE:ADAUSDT",
    "BINANCE:XRPUSDT", "BINANCE:LTCUSDT", "BINANCE:MATICUSDT", "BINANCE:TRXUSDT",
    "BINANCE:SHIBUSDT", "BINANCE:UNIUSDT", "BINANCE:AAVEUSDT"
];

export const DEFAULT_MOCK_DATA: IToken[] = [
    {
        id: "BINANCE:BTCUSDT", name: "Bitcoin", symbol: "BTC", coingeckoId: "bitcoin",
        icon: "/tokens/btc.svg", price: 68123.45, change: 2.1, marketCap: 1300000000000, volume: 34000000000
    },
    {
        id: "BINANCE:ETHUSDT", name: "Ethereum", symbol: "ETH", coingeckoId: "ethereum",
        icon: "/tokens/eth.svg", price: 3560.78, change: 4.5, marketCap: 420000000000, volume: 15000000000
    },
    {
        id: "BINANCE:SOLUSDT", name: "Solana", symbol: "SOL", coingeckoId: "solana",
        icon: "/tokens/sol.svg", price: 162.33, change: -1.2, marketCap: 70000000000, volume: 2500000000
    },
    {
        id: "BINANCE:DOGEUSDT", name: "Dogecoin", symbol: "DOGE", coingeckoId: "dogecoin",
        icon: "/tokens/doge.svg", price: 0.16, change: 0.5, marketCap: 22000000000, volume: 500000000
    },
    {
        id: "BINANCE:LINKUSDT", name: "Chainlink", symbol: "LINK", coingeckoId: "chainlink",
        icon: "/tokens/link.svg", price: 17.88, change: 8.1, marketCap: 10000000000, volume: 500000000
    },
    {
        id: "BINANCE:AVAXUSDT", name: "Avalanche", symbol: "AVAX", coingeckoId: "avalanche-2",
        icon: "/tokens/avax.svg", price: 38.50, change: -3.0, marketCap: 15000000000, volume: 450000000
    },
    {
        id: "BINANCE:DOTUSDT", name: "Polkadot", symbol: "DOT", coingeckoId: "polkadot",
        icon: "/tokens/dot.svg", price: 7.20, change: 1.8, marketCap: 9000000000, volume: 300000000
    },
    {
        id: "BINANCE:ADAUSDT", name: "Cardano", symbol: "ADA", coingeckoId: "cardano",
        icon: "/tokens/ada.svg", price: 0.45, change: -0.5, marketCap: 16000000000, volume: 350000000
    },
    {
        id: "BINANCE:XRPUSDT", name: "Ripple", symbol: "XRP", coingeckoId: "ripple",
        icon: "/tokens/xrp.svg", price: 0.52, change: 0.1, marketCap: 28000000000, volume: 1000000000
    },
    {
        id: "BINANCE:LTCUSDT", name: "Litecoin", symbol: "LTC", coingeckoId: "litecoin",
        icon: "/tokens/ltc.svg", price: 81.40, change: 1.2, marketCap: 6000000000, volume: 250000000
    },
    {
        id: "BINANCE:MATICUSDT", name: "Polygon", symbol: "MATIC", coingeckoId: "matic-network",
        icon: "/tokens/matic.svg", price: 0.73, change: 2.5, marketCap: 7000000000, volume: 200000000
    },
    {
        id: "BINANCE:TRXUSDT", name: "TRON", symbol: "TRX", coingeckoId: "tron",
        icon: "/tokens/trx.svg", price: 0.12, change: -1.1, marketCap: 10000000000, volume: 150000000
    },
    {
        id: "BINANCE:SHIBUSDT", name: "Shiba Inu", symbol: "SHIB", coingeckoId: "shiba-inu",
        icon: "/tokens/shib.svg", price: 0.000022, change: 5.5, marketCap: 13000000000, volume: 600000000
    },
    {
        id: "BINANCE:UNIUSDT", name: "Uniswap", symbol: "UNI", coingeckoId: "uniswap",
        icon: "/tokens/uni.svg", price: 9.80, change: 3.3, marketCap: 7000000000, volume: 180000000
    },
    {
        id: "BINANCE:AAVEUSDT", name: "Aave", symbol: "AAVE", coingeckoId: "aave",
        icon: "/tokens/aave.svg", price: 95.00, change: -2.2, marketCap: 14000000000, volume: 120000000
    }
];