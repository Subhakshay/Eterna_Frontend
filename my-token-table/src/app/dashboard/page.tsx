// src/app/dashboard/page.tsx
'use client';

import { FadeIn } from '@/components/atoms/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LoopingVideoPlayer } from '@/components/organisms/LoopingVideoPlayer';
import { ArrowRight, Trophy, Wallet, BarChart, Gift, Zap, TrendingUp, DollarSign } from 'lucide-react'; // Added new icons
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- UPDATED FeatureCard Component ---
// Removed href prop and Link wrapper
const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> =
    ({ icon, title, desc }) => (
        // Removed <Link href={href}> wrapper
        <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500 transition-all group">
            <CardHeader>
                <div className="text-blue-400 mb-4">{icon}</div>
                <CardTitle className="text-white">{title}</CardTitle>
                <CardDescription className="text-zinc-400 pt-2">
                    {desc}
                    {/* Removed ArrowRight as it implies navigation */}
                </CardDescription>
            </CardHeader>
        </Card>
    );

export default function DashboardPage() {
    return (
        <main className="container mx-auto p-4 md:p-8">

            {/* Section 1: Hero */}
            <FadeIn>
                <div className="text-center py-16 md:py-24">
                    <h1 className="text-5xl md:text-7xl font-bold text-white">
                        Trade Smarter.Move Faster.
                    </h1>
                    <p className="text-xl text-zinc-400 mt-6 max-w-2xl mx-auto">
                        Go beyond the charts. Track alpha wallets, spot trends before they happen, and execute with precision. {/* New Sub-headline */}
                    </p>
                    <div className="flex gap-4 justify-center mt-8">
                        <Link href="/charts">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                                Start Trading
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm text-zinc-500 mt-6">Backed by Y Combinator</p>
                </div>
            </FadeIn>

            {/* Section 2: Animated Video UI */}
            <div className="h-[550px] w-full relative rounded-lg overflow-hidden mt-12 md:mt-16">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-zinc-950 opacity-50"></div>
                <LoopingVideoPlayer />
            </div>

            {/* Section 3: Features */}
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
                    <FeatureCard
                        icon={<BarChart className="h-8 w-8" />}
                        title="Order Execution"
                        desc="Execute trades with ultra-low latency and minimal slippage across integrated exchanges."
                    // href="/charts" // Removed href
                    />
                    <FeatureCard
                        icon={<Wallet className="h-8 w-8" />}
                        title="Wallet & Twitter Tracker"
                        desc="Monitor smart money movements and follow top traders directly from their on-chain activity."
                    // href="/portfolio" // Removed href
                    />
                    <FeatureCard
                        icon={<Trophy className="h-8 w-8" />}
                        title="Progress through Ranks"
                        desc="Earn rewards and unlock exclusive platform benefits as you climb the trading ranks."
                    // href="/rewards" // Removed href
                    />
                    <FeatureCard
                        icon={<Zap className="h-8 w-8" />} // New icon for Perpetuals
                        title="Hyperliquid Perpetuals"
                        desc="Trade leveraged perpetuals with deep liquidity and advanced order types on a powerful engine."
                    // href="/charts" // Removed href
                    />
                </div>
            </FadeIn>

            {/* Section 4: NEW REWARDS SECTION (No change from previous) */}
            <FadeIn>
                <div className="text-center py-16 md:py-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Get Paid to Trade
                    </h2>
                    <p className="text-lg text-zinc-400 mt-4 max-w-xl mx-auto">
                        Earn rewards, progress through ranks, and get referral bonuses all
                        on one platform.
                    </p>
                    <div className="flex justify-center mt-8">
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Gift className="h-24 w-24 text-yellow-400" />
                        </motion.div>
                    </div>
                    <Link href="/rewards" className="mt-8 inline-block">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                            View Your Rewards
                        </Button>
                    </Link>
                </div>
            </FadeIn>

            {/* --- NEW SECTION 5: Animated Value Proposition --- */}
            <FadeIn>
                <div className="text-center py-16 md:py-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Token Trade?
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-16">
                        We're building the future of decentralized finance. Here's what sets us apart:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex flex-col items-center text-center bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-xl"
                        >
                            <TrendingUp className="h-16 w-16 text-green-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">Unmatched Analytics</h3>
                            <p className="text-zinc-400">
                                Dive deep with advanced charting tools and real-time market data to make informed decisions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex flex-col items-center text-center bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-xl"
                        >
                            <DollarSign className="h-16 w-16 text-purple-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">High-Yield Rewards</h3>
                            <p className="text-zinc-400">
                                Your trades aren't just trades; they're investments in your growth with our tiered reward system.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col items-center text-center bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-xl"
                        >
                            <Wallet className="h-16 w-16 text-blue-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">Integrated Ecosystem</h3>
                            <p className="text-zinc-400">
                                From wallet tracking to perpetuals, all your DeFi needs are met within a single, seamless platform.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </FadeIn>

        </main>
    );
}