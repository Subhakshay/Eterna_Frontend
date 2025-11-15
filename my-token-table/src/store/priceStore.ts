// src/store/priceStore.ts
import { create } from 'zustand';

interface PriceState {
    // e.g., { "BINANCE:BTCUSDT": 65000.12, "BINANCE:ETHUSDT": 3450.50 }
    prices: Record<string, number>;

    // Action to set a new price
    setPrice: (symbol: string, price: number) => void;
}

export const usePriceStore = create<PriceState>((set) => ({
    prices: {},
    setPrice: (symbol, price) =>
        set((state) => ({
            prices: {
                ...state.prices,
                [symbol]: price, // Just update the latest price
            },
        })),
}));