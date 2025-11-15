// src/store/watchlistStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface WatchlistState {
    // An array of token IDs, e.t., ["BINANCE:BTCUSDT", "BINANCE:SOLUSDT"]
    watchlist: string[];
    addToken: (id: string) => void;
    removeToken: (id: string) => void;
}

export const useWatchlistStore = create<WatchlistState>()(
    // 'persist' will save this to localStorage automatically
    persist(
        (set) => ({
            watchlist: [],
            addToken: (id) =>
                set((state) => ({
                    watchlist: [...state.watchlist, id],
                })),
            removeToken: (id) =>
                set((state) => ({
                    watchlist: state.watchlist.filter((tokenId) => tokenId !== id),
                })),
        }),
        {
            name: 'token-watchlist-storage', // Name in localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);