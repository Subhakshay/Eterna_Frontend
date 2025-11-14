// src/app/page.tsx
"use client";

import { useState } from "react";
// Import framer-motion
import { motion, AnimatePresence } from "framer-motion";
import { TokenTable } from "@/components/organisms/TokenTable";
import { FadeIn } from "@/components/atoms/FadeIn"; // Import our new component

const TABS = [
    { id: "new-pairs", label: "New pairs" },
    { id: "final-stretch", label: "Final Stretch" },
    { id: "migrated", label: "Migrated" },
];

export default function Home() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    return (
        <main className="container mx-auto p-4 md:p-8 min-h-screen bg-gradient-to-b from-zinc-950 to-black">
            <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Token Discovery
                </h1>
            </FadeIn>

            {/* --- New Animated Tabs --- */}
            <FadeIn>
                <div className="flex space-x-2 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className="relative w-full rounded-md px-4 py-2 text-sm font-medium text-zinc-400 transition-colors"
                        >
                            {/* This is the sliding pill animation */}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTabPill"
                                    className="absolute inset-0 bg-zinc-800"
                                    style={{ borderRadius: 6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {/* Text must be relative to be on top */}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </FadeIn>

            {/* --- Tab Content Area --- */}
            <div className="mt-8">
                {/* AnimatePresence makes the content fade between tabs */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* We no longer need 3 separate TabsContent components.
              We just render one TokenTable and pass it the activeTab.
              This is much more efficient.
            */}
                        <TokenTable filter={activeTab} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}