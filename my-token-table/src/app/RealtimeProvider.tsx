// src/app/RealtimeProvider.tsx
"use client";

import { usePriceStore } from "@/store/priceStore";
import { useEffect } from "react";
import { CRYPTO_SYMBOLS } from "@/lib/mockData";

export function RealtimeProvider() {
    const setPrice = usePriceStore((state) => state.setPrice);

    useEffect(() => {
        // Get the API key from the .env.local file
        const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
        if (!apiKey) {
            console.error("Finnhub API key not found.");
            return;
        }

        // Open a new WebSocket connection
        const socket = new WebSocket(`wss://ws.finnhub.io?token=${apiKey}`);

        // 1. When connection opens...
        socket.onopen = function (e) {
            console.log("WebSocket connected.");
            // Subscribe to all our crypto symbols
            CRYPTO_SYMBOLS.forEach((symbol) => {
                socket.send(JSON.stringify({ type: "subscribe", symbol: symbol }));
            });
        };

        // 2. When a new message (price update) is received...
        socket.onmessage = function (event) {
            try {
                const message = JSON.parse(event.data);
                if (message.type === "trade") {
                    // A trade update message
                    const { s: symbol, p: price } = message.data[0];
                    // Set the new price in our global store
                    setPrice(symbol, price);
                }
            } catch (err) {
                console.error("Error parsing socket message:", err);
            }
        };

        // 3. Handle errors
        socket.onerror = function (error) {
            console.error("WebSocket Error:", error);
        };

        // 4. When connection closes...
        socket.onclose = function (event) {
            console.log("WebSocket disconnected.");
            // You could add auto-reconnect logic here
        };

        // Cleanup function:
        // This runs when the component unmounts to close the connection
        return () => {
            console.log("Cleaning up WebSocket connection.");
            // Unsubscribe from all symbols
            CRYPTO_SYMBOLS.forEach((symbol) => {
                socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
            });
            // Close the connection
            socket.close();
        };

        // We pass 'setPrice' as a dependency, though it's stable
    }, [setPrice]);

    // This component doesn't render anything, it just manages the connection
    return null;
}