// src/app/charts/page.tsx
import { FadeIn } from '@/components/atoms/FadeIn';
import TradingViewChart from '@/components/organisms/TradingViewChart';
import { TradePanel } from '@/components/organisms/TradePanel'; // Import our new component

export default function ChartsPage() {
    return (
        <main className="container mx-auto p-4 md:p-8">
            <FadeIn>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Live Market Charts
                </h1>
            </FadeIn>

            {/* --- New 2-Column Grid Layout --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column (Chart) */}
                <div className="lg:col-span-2">
                    <FadeIn>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                            <TradingViewChart />
                        </div>
                    </FadeIn>
                </div>

                {/* Right Column (Trade Panel) */}
                <div className="lg:col-span-1">
                    <FadeIn>
                        <TradePanel />
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}