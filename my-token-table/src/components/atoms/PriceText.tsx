// src/components/atoms/PriceText.tsx
'use client';

import { usePriceStore } from "@/store/priceStore"; // Make sure this is the right path
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

// 1. This interface MUST include the 'symbol' prop
interface PriceTextProps {
  symbol: string;
  initialPrice: number;
}

const PriceTextComponent: React.FC<PriceTextProps> = ({
  symbol,
  initialPrice,
}) => {
  
  // 2. This is the FIX for our simplified store.
  // We read the price directly from the store, not '...lastPrice'
  const livePrice = usePriceStore((state) => state.prices[symbol]);
  
  const price = livePrice ?? initialPrice; // Use live price if it exists
  
  const [flash, setFlash] = useState<"green" | "red" | "">("");
  const prevPriceRef = useRef(price);

  useEffect(() => {
    // Only flash if the price has actually changed
    if (price > prevPriceRef.current) {
      setFlash("green");
    } else if (price < prevPriceRef.current) {
      setFlash("red");
    }
    
    prevPriceRef.current = price;

    const timer = setTimeout(() => setFlash(""), 300);
    return () => clearTimeout(timer);
  }, [price]); // This effect runs every time the price changes

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

export const PriceText = React.memo(PriceTextComponent);
