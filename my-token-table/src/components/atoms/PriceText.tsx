// src/components/atoms/PriceText.tsx
"use client";

import { useMockSocket } from "@/hooks/useMockSocket";
import { cn } from "@/lib/utils";
// Import React and memo
import React, { useState, useEffect, useRef } from "react";

interface PriceTextProps {
    initialPrice: number;
}

// We define the component as a separate const
const PriceTextComponent: React.FC<PriceTextProps> = ({ initialPrice }) => {
    const price = useMockSocket(initialPrice);
    const [flash, setFlash] = useState<"green" | "red" | "">("");
    const prevPriceRef = useRef(initialPrice);

    useEffect(() => {
        if (price > prevPriceRef.current) {
            setFlash("green");
        } else if (price < prevPriceRef.current) {
            setFlash("red");
        }
        prevPriceRef.current = price;

        const timer = setTimeout(() => setFlash(""), 300);
        return () => clearTimeout(timer);
    }, [price]);

    return (
        <span
            className={cn(
                "transition-colors duration-300",
                flash === "green" && "text-green-400 bg-green-500/10 rounded-md px-1",
                flash === "red" && "text-red-400 bg-red-500/10 rounded-md px-1"
            )}
        >
            ${price.toFixed(2)}
        </span>
    );
};

// We export the memoized version
export const PriceText = React.memo(PriceTextComponent);