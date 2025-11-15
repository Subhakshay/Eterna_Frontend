// src/app/portfolio/page.tsx
'use client';

import { FadeIn } from '@/components/atoms/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

// A simple component for our stat cards
const StatCard: React.FC<{ title: string; value: string; profit?: string }> = ({
    title,
    value,
    profit,
}) => (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h3 className="text-sm font-medium text-zinc-400">{title}</h3>
        <p className="text-3xl font-bold text-white mt-2">{value}</p>
        {profit && (
            <p className="text-sm text-green-400 mt-1">{profit}</p>
        )}
    </div>
);

// Dummy data for the flat green line at 0
const dummyChartData = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 0 },
    { name: 'Mar', value: 0 },
    { name: 'Apr', value: 0 },
    { name: 'May', value: 0 },
    { name: 'Jun', value: 0 },
];

export default function PortfolioPage() {
    return (
        <main className="container mx-auto p-4 md:p-8">
            <FadeIn>
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        My Portfolio
                    </h1>

                    {/* --- Deposit Button & Modal --- */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Deposit Funds
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-zinc-900 text-white border-zinc-700">
                            <DialogHeader>
                                <DialogTitle>Deposit Funds</DialogTitle>
                                <DialogDescription className="text-zinc-400">
                                    Select an amount to deposit to your account.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <Input
                                    type="number"
                                    placeholder="$1,000"
                                    className="bg-zinc-800 border-zinc-700"
                                />
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Confirm Deposit
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </FadeIn>

            {/* --- Stat Cards Section --- */}
            <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Total Invested" value="$0.00" />
                    <StatCard
                        title="Net Profit & Loss"
                        value="$0.00"
                        profit="+0.00%"
                    />
                    <StatCard title="Available to Invest" value="$0.00" />
                </div>
            </FadeIn>

            {/* --- Chart Section --- */}
            <FadeIn>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-8">
                    <h2 className="text-xl font-bold text-white mb-4">Portfolio Value</h2>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={dummyChartData}>
                                <defs>
                                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" tick={{ fill: '#71717a' }} />
                                <YAxis tick={{ fill: '#71717a' }} domain={[0, 0]} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#18181b', // zinc-900
                                        borderColor: '#3f3f46' // zinc-700
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#22c55e"
                                    fill="url(#colorGreen)"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </FadeIn>
        </main>
    );
}