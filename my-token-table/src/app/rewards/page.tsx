// src/app/rewards/page.tsx
'use client';

import { FadeIn } from '@/components/atoms/FadeIn';
import { Button } from '@/components/ui/button';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import {
    BarChart,
    Database,
    Star,
    Plus,
    ArrowRight,
    Gift,
    Trophy,
    Share2,
    Edit,
    Flame, // NEW ICON
    Wallet, // NEW ICON
    Sparkles // NEW ICON
} from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion for new animations

const solRewardsData = [
    { value: 0.1 }, { value: 0.2 }, { value: 0.15 }, { value: 0.3 },
    { value: 0.4 }, { value: 0.6 }, { value: 0.5 },
];

// --- UPDATED BenefitCard Component ---
const BenefitCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> =
    ({ icon, title, desc }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" }}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col items-center text-center 
               bg-gradient-to-br from-zinc-900 to-zinc-950 hover:from-blue-950 hover:to-zinc-900 transition-all duration-300"
        >
            <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                {icon}
            </div>
            <CardTitle className="text-white text-xl mb-2">{title}</CardTitle>
            <CardDescription className="text-zinc-400 text-sm">{desc}</CardDescription>
        </motion.div>
    );

export default function RewardsPage() {
    return (
        <main className="container mx-auto p-4 md:p-8">
            <FadeIn>
                <Tabs defaultValue="rewards" className="w-full">
                    {/* 1. Tabs List */}
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="rewards" className="text-lg">Rewards</TabsTrigger>
                        <TabsTrigger value="leaderboard" className="text-lg">Leaderboard</TabsTrigger>
                        <TabsTrigger value="benefits" className="text-lg">Benefits</TabsTrigger>
                    </TabsList>

                    {/* 2. Rewards Tab Content (No change from previous) */}
                    <TabsContent value="rewards" className="mt-6">
                        <div className="flex flex-col items-center text-center">
                            <Card className="w-full max-w-sm bg-zinc-900 border-zinc-800">
                                <CardHeader>
                                    <div className="mx-auto h-20 w-20 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                                        <span className="text-4xl">🏆</span>
                                    </div>
                                    <CardTitle className="text-2xl text-white mt-4">1X Rewards</CardTitle>
                                    <p className="text-zinc-400">30% Referral Rate</p>

                                    <div className="flex gap-4 pt-4 justify-center">
                                        <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit Referral
                                        </Button>
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                            <Share2 className="h-4 w-4 mr-2" />
                                            Share Referral
                                        </Button>
                                    </div>
                                </CardHeader>
                            </Card>

                            <div className="w-full my-8">
                                <div className="flex justify-between text-sm text-zinc-400 mb-2">
                                    <span><span className="text-white font-bold">0</span> Points Earned</span>
                                    <span>Next Level: <span className="text-white">2X Rewards</span></span>
                                </div>
                                <Progress value={10} className="w-full h-2 bg-zinc-800" />
                                <div className="flex justify-between text-sm text-zinc-400 mt-2">
                                    <p>You're almost there! Trade to reach <span className="text-white">Bronze</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-zinc-300">
                                        <BarChart className="text-purple-400" /> SOL Rewards
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl text-white font-bold">1 SOL</div>
                                    <div className="h-24 w-full mt-4">
                                        <ResponsiveContainer width="100%" height="100%"><AreaChart data={solRewardsData}><defs><linearGradient id="sol-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#c084fc" stopOpacity={0.8} /><stop offset="95%" stopColor="#c084fc" stopOpacity={0.1} /></linearGradient></defs><Area type="monotone" dataKey="value" stroke="#c084fc" fill="url(#sol-gradient)" strokeWidth={2} /></AreaChart></ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-zinc-300">
                                        <Database className="text-green-400" /> Claim
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center justify-center h-full gap-4"><div className="flex items-center gap-6"><div className="text-center"><div className="text-4xl text-white font-bold">+0</div><span className="text-zinc-400">Points</span></div><div className="text-center"><div className="text-4xl text-white font-bold">+0</div><span className="text-zinc-400">SOL</span></div></div><Button disabled className="w-full mt-4">Claim Rewards</Button></CardContent>
                            </Card>
                            <Card className="bg-zinc-900 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between text-zinc-300"><div className="flex items-center gap-2"><Star className="text-yellow-400" /> Quests</div><span className="text-xs text-zinc-400">Points Breakdown</span></CardTitle>
                                </CardHeader>
                                <CardContent className="flex justify-around items-center h-full pt-8"><div className="text-center"><div className="h-24 w-24 rounded-full border-2 border-zinc-700 flex items-center justify-center text-white text-lg font-bold">+1500</div><p className="text-xs text-zinc-400 mt-2">Refer 3 more</p></div><div className="text-center"><div className="h-24 w-24 rounded-full border-2 border-zinc-700 flex items-center justify-center text-white text-lg font-bold">+1000</div><p className="text-xs text-zinc-400 mt-2">Trade 5 more SOL</p></div><div className="text-center"><div className="h-24 w-24 rounded-full border-2 border-zinc-700 flex items-center justify-center text-white text-lg font-bold">+200</div><p className="text-xs text-zinc-400 mt-2">Make 10 more</p></div></CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Leaderboard Tab (No change from previous) */}
                    <TabsContent value="leaderboard">
                        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-20 flex flex-col justify-center items-center text-center">
                            <Trophy className="h-12 w-12 text-yellow-400" />
                            <p className="text-zinc-400 text-lg mt-4">Leaderboard is coming soon.</p>
                        </div>
                    </TabsContent>

                    {/* --- UPDATED Benefits Tab Content --- */}
                    <TabsContent value="benefits">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <BenefitCard
                                icon={<Trophy className="h-10 w-10" />} // Larger icon
                                title="Progress Through Ranks"
                                desc="Start as Wood and rank up to Champion to earn up to 5X rewards. Climb the ranks by trading and engaging with the platform."
                            />
                            <BenefitCard
                                icon={<Wallet className="h-10 w-10" />} // New icon: Wallet
                                title="Earn Real Crypto"
                                desc="Get paid in SOL directly to your wallet just for trading on Token Trade. The more you trade, the more you earn."
                            />
                            <BenefitCard
                                icon={<Sparkles className="h-10 w-10" />} // New icon: Sparkles
                                title="Unlock Bonus Perks"
                                desc="Complete exclusive quests, refer friends, and participate in special events to earn extra points and unique rewards."
                            />
                        </div>
                    </TabsContent>

                </Tabs>
            </FadeIn>
        </main>
    );
}