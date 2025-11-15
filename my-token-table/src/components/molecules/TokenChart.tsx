// src/components/molecules/TokenChart.tsx
'use client';

import { useChartData } from '@/hooks/useChartData';
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ErrorBar
} from 'recharts';
import { format } from 'date-fns';
import React from 'react';

// --- This is our custom candle body ---
// This code already makes candles red/green
const Candlestick = (props: any) => {
    const { x, y, width, height, payload } = props;
    const { open, close } = payload;
    const isGain = close > open;
    const color = isGain ? '#22c55e' : '#ef4444'; // green or red

    return <rect x={x} y={y} width={width} height={height} fill={color} />;
};

// --- This is our custom tooltip ---
// This code already shows the date and all prices on hover
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-zinc-800 p-3 rounded-md border border-zinc-700 shadow-lg">
                <p className="text-zinc-300 text-sm">{format(new Date(label), 'MMM d, yyyy')}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
                    <span className="text-zinc-400">Open:</span> <span className="text-white">${data.open.toFixed(2)}</span>
                    <span className="text-zinc-400">High:</span> <span className="text-white">${data.high.toFixed(2)}</span>
                    <span className="text-zinc-400">Close:</span> <span className="text-white">${data.close.toFixed(2)}</span>
                    <span className="text-zinc-400">Low:</span> <span className="text-white">${data.low.toFixed(2)}</span>
                </div>
            </div>
        );
    }
    return null;
};

export const TokenChart: React.FC<{ coingeckoId: string }> = ({ coingeckoId }) => {
    const { data, isLoading, isError } = useChartData(coingeckoId);

    const processedData = React.useMemo(() => {
        return data?.map((d) => {
            const [time, open, high, low, close] = d;
            return {
                time: time,
                open: open,
                high: high,
                low: low,
                close: close,
                candleBody: [open, close],
                wick: [low, high],
            };
        });
    }, [data]);

    if (isLoading) {
        return <div className="h-[350px] w-full flex items-center justify-center text-zinc-400">Loading chart...</div>;
    }
    if (isError) {
        return <div className="h-[350px] w-full flex items-center justify-center text-red-400">Failed to load chart data.</div>;
    }
    if (!processedData) {
        return <div className="h-[350px] w-full" />;
    }

    // --- CHANGE 1: Y-Axis Domain ---
    // We'll reduce the padding from 5% (0.95) to 2% (0.98)
    const yDomain = [
        Math.min(...processedData.map(d => d.low)) * 0.98, // Was 0.95
        Math.max(...processedData.map(d => d.high)) * 1.02, // Was 1.05
    ];

    return (
        <ResponsiveContainer width="100%" height={350}>
            <ComposedChart
                data={processedData}
                margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
            >
                {/* --- CHANGE 2: Hide X-Axis Ticks --- */}
                <XAxis
                    dataKey="time"
                    axisLine={false}
                    tickLine={false}
                    tick={false} // This hides the date labels
                />
                <YAxis
                    dataKey="close"
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(price) => `$${price.toFixed(0)}`}
                    tick={{ fill: '#71717a' }}
                    domain={yDomain as [number, number]}
                    scale="linear"
                />

                <Tooltip content={<CustomTooltip />} />

                <Bar dataKey="wick" fill="#71717a">
                    <ErrorBar dataKey="wick" width={1} strokeWidth={1} stroke="#71717a" />
                </Bar>

                <Bar dataKey="candleBody" shape={<Candlestick />} />

            </ComposedChart>
        </ResponsiveContainer>
    );
};