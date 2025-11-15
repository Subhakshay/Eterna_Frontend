// src/app/page.tsx
'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TokenTable } from "@/components/organisms/TokenTable";
import { FadeIn } from "@/components/atoms/FadeIn";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input"; // Import Input
import { Search } from "lucide-react"; // Import Search icon

const TABS = [
    { id: "top-movers", label: "Top Movers" },
    { id: "new-listings", label: "New Listings" },
    { id: "watchlist", label: "Watchlist" },
];

export default function Home() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const [search, setSearch] = useState(""); // State for the search bar

    return (
        <main className="container mx-auto p-4 md:p-8">
            <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Token Discovery
                </h1>
            </FadeIn>

            {/* --- Updated Tabs & Search Section --- */}
            <FadeIn>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    {/* Tabs */}
                    <div className="flex space-x-6 border-b border-zinc-800 w-full md:w-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "py-3 px-1 text-sm font-medium bg-transparent border-b-2",
                                    activeTab === tab.id
                                        ? "text-white border-white"
                                        : "text-zinc-400 border-transparent hover:text-zinc-200"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <Input
                            type="search"
                            placeholder="Search tokens..."
                            className="w-full rounded-lg bg-zinc-900 border-zinc-700 pl-9"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </FadeIn>

            {/* --- Tab Content --- */}
            <div className="mt-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab} // This is fine
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Pass the search term to the table */}
                        <TokenTable filter={activeTab} search={search} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}