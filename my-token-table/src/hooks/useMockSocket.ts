// src/hooks/useMockSocket.ts
import { useState, useEffect } from "react";

// This hook simulates a WebSocket connection for a single token's price
export const useMockSocket = (initialPrice: number) => {
    const [price, setPrice] = useState(initialPrice);

    useEffect(() => {
        // Start a timer that updates the price every 2-3 seconds
        const interval = setInterval(() => {
            // Simulate a small, random price change
            const changePercent = (Math.random() - 0.5) * 0.01; // +/- 0.5%
            const changeAmount = price * changePercent;

            setPrice((prevPrice) => {
                const newPrice = prevPrice + changeAmount;
                return newPrice > 0 ? newPrice : prevPrice; // Ensure price > 0
            });
        }, 2000 + Math.random() * 1000); // Stagger updates

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);

        // We only want this effect to run once, so we pass initialPrice
    }, [initialPrice]); // Re-run if the initial price changes

    return price;
};