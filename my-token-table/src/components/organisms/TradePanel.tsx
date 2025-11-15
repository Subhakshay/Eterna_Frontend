// src/components/organisms/TradePanel.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";

// --- 1. Order Book Component ---
// This component shows a static, hardcoded order book to demonstrate the UI.
const OrderBook = () => (
    <div className="text-xs">
        {/* Headers */}
        <div className="flex justify-between text-zinc-400 p-2">
            <span>Price (USD)</span>
            <span>Amount (BTC)</span>
            <span>Total (USD)</span>
        </div>
        {/* Asks (Red) */}
        <div className="flex flex-col-reverse">
            <div className="flex justify-between p-1.5 bg-red-900/10"><span>96,350</span> <span>13.386</span> <span>283,261</span></div>
            <div className="flex justify-between p-1.5 bg-red-900/10"><span>96,349</span> <span>6.210</span> <span>249,555</span></div>
            <div className="flex justify-between p-1.5 bg-red-900/10"><span>96,348</span> <span>61.888</span> <span>243,145</span></div>
            <div className="flex justify-between p-1.5 bg-red-900/10"><span>96,347</span> <span>101.357</span> <span>181,157</span></div>
        </div>
        {/* Spread */}
        <div className="p-3 my-2 border-y border-zinc-700">
            <h3 className="text-lg font-bold text-white">96,344</h3>
        </div>
        {/* Bids (Green) */}
        <div>
            <div className="flex justify-between p-1.5 bg-green-900/10"><span>96,343</span> <span>150.598</span> <span>150,598</span></div>
            <div className="flex justify-between p-1.5 bg-green-900/10"><span>96,342</span> <span>5.597</span> <span>156,196</span></div>
            <div className="flex justify-between p-1.5 bg-green-900/10"><span>96,341</span> <span>10.549</span> <span>166,744</span></div>
            <div className="flex justify-between p-1.5 bg-green-900/10"><span>96,340</span> <span>98.387</span> <span>247,131</span></div>
        </div>
    </div>
);

// --- 2. Order Form Component ---
// This is the component for placing an order
const OrderForm = () => (
    <div className="p-4 space-y-6">
        {/* Long / Short */}
        <ToggleGroup type="single" defaultValue="long" className="w-full grid grid-cols-2">
            <ToggleGroupItem value="long" className="data-[state=on]:bg-green-600 data-[state=on]:text-white">Long</ToggleGroupItem>
            <ToggleGroupItem value="short" className="data-[state=on]:bg-red-600 data-[state=on]:text-white">Short</ToggleGroupItem>
        </ToggleGroup>

        {/* Market / Limit */}
        <ToggleGroup type="single" defaultValue="market" className="w-full">
            <ToggleGroupItem value="market" className="text-xs px-3">Market</ToggleGroupItem>
            <ToggleGroupItem value="limit" className="text-xs px-3">Limit</ToggleGroupItem>
        </ToggleGroup>

        {/* Amount Input */}
        <div className="space-y-2">
            <label className="text-sm text-zinc-400">Amount</label>
            <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-md">
                <Input type="number" placeholder="0.0" className="bg-transparent border-none" />
                <span className="p-2 text-zinc-400">USDC</span>
            </div>
        </div>

        {/* Slider */}
        <div className="space-y-2">
            <Slider defaultValue={[25]} max={100} step={25} className="w-full" />
            <div className="flex justify-between text-xs text-zinc-400">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
            </div>
        </div>

        {/* Available Margin */}
        <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Available Margin</span>
            <span className="text-white font-medium">0.00 USDC</span>
        </div>

        {/* Add Funds Button */}
        <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:text-blue-400 hover:bg-blue-500/10">
            Add More Funds
        </Button>
    </div>
);

// --- 3. Main Trade Panel ---
// This combines the components above, as seen in your image
export const TradePanel = () => {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
            <Tabs defaultValue="order-book" className="w-full">
                <TabsList className="w-full bg-zinc-900 rounded-t-lg">
                    <TabsTrigger value="order-book" className="w-full">Order Book</TabsTrigger>
                    <TabsTrigger value="trades" className="w-full">Trades</TabsTrigger>
                </TabsList>
                <TabsContent value="order-book">
                    <OrderBook />
                </TabsContent>
                <TabsContent value="trades">
                    <div className="p-4 text-center text-zinc-400">
                        Live trades feed would appear here.
                    </div>
                </TabsContent>
            </Tabs>

            {/* Order Form is separate, placed below the tabs */}
            <div className="border-t border-zinc-800">
                <OrderForm />
            </div>
        </div>
    );
};