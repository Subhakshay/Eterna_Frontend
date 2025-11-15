// src/hooks/useChartData.ts
import { useQuery } from '@tanstack/react-query';

// We are fetching an array of OHLC data points
// [time, open, high, low, close]
export type CoinGeckoOHLC = number[];

// This function fetches the OHLC data from CoinGecko
async function fetchChartData(coingeckoId: string): Promise<CoinGeckoOHLC[]> {
    // Free API, no key needed. Fetches 90 days of daily OHLC data.
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coingeckoId}/ohlc?vs_currency=usd&days=90`);

    if (!res.ok) {
        throw new Error('Failed to fetch chart data from CoinGecko');
    }

    const data = await res.json();

    if (!data || data.length === 0) {
        throw new Error('No chart data found for this symbol');
    }

    return data;
}

// This is the React Query hook
export const useChartData = (coingeckoId: string) => {
    return useQuery<CoinGeckoOHLC[], Error>({
        queryKey: ['chart', coingeckoId], // Unique key for this query
        queryFn: () => fetchChartData(coingeckoId),
        staleTime: 1000 * 60 * 15, // Cache the data for 15 minutes
        enabled: !!coingeckoId, // Only run the query if the id is not empty
    });
};