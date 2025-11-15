// src/components/organisms/AnimatedTradingUI.tsx
'use client';

import { motion } from 'framer-motion';

// A more detailed mock UI
const MockUI = () => (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl p-4 flex gap-4 w-full max-w-md">
        {/* Left Side (Chart) */}
        <motion.div
            className="flex-1 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="h-4 w-1/3 bg-zinc-700 rounded"></div>
            <div className="h-40 bg-zinc-800 rounded-md relative overflow-hidden">
                {/* Mock candles */}
                <div className="absolute bottom-4 left-2 w-2 h-10 bg-green-500 rounded-sm"></div>
                <div className="absolute bottom-4 left-5 w-2 h-16 bg-red-500 rounded-sm"></div>
                <div className="absolute bottom-4 left-8 w-2 h-12 bg-green-500 rounded-sm"></div>
                <div className="absolute bottom-4 left-11 w-2 h-20 bg-green-500 rounded-sm"></div>
                <div className="absolute bottom-4 left-14 w-2 h-16 bg-red-500 rounded-sm"></div>
            </div>
        </motion.div>
        {/* Right Side (Order Book) */}
        <motion.div
            className="w-1/3 space-y-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <div className="flex justify-between"><span className="text-red-500">101.50</span> <span className="text-zinc-400">0.5</span></div>
            <div className="flex justify-between"><span className="text-red-500">101.25</span> <span className="text-zinc-400">1.2</span></div>
            <div className="h-8 bg-zinc-800 my-1 flex items-center justify-center text-white font-bold">101.00</div>
            <div className="flex justify-between"><span className="text-green-500">100.75</span> <span className="text-zinc-400">2.1</span></div>
            <div className="flex justify-between"><span className="text-green-500">100.50</span> <span className="text-zinc-400">0.8</span></div>
            <div className="h-8 bg-green-500 text-white rounded-md mt-2 flex items-center justify-center text-sm font-medium">Buy</div>
        </motion.div>
    </div>
);

export const AnimatedTradingUI = () => {
    return (
        <div className="w-full h-full flex items-center justify-center" style={{ perspective: 1000 }}>
            <motion.div
                // Animation sequence
                animate={{
                    rotateY: [0, 20, 0, -20, 0], // Flip left and right
                    opacity: [0, 1, 1, 1, 0],   // Fade in, stay, fade out
                    scale: [0.9, 1, 1, 1, 0.9],
                }}
                // Loop settings
                transition={{
                    duration: 7, // 7 seconds for the whole loop
                    ease: "easeInOut",
                    repeat: Infinity, // Repeat forever
                    repeatDelay: 1, // Wait 1 second before repeating
                    times: [0, 0.25, 0.5, 0.75, 1],
                }}
                className="w-full max-w-md"
            >
                {/* We use a key to force the child to re-mount and re-play its 'animate' */}
                <MockUI key={Math.random()} />
            </motion.div>
        </div>
    );
};