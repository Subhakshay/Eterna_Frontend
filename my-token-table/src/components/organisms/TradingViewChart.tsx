// src/components/organisms/TradingViewChart.tsx
'use client';

import React, { useEffect, useRef, memo } from 'react';

function TradingViewChart() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if the script is already in the document
        if (document.getElementById('tradingview-widget-script')) return;

        // Create the script element
        const script = document.createElement('script');
        script.id = 'tradingview-widget-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;

        // Define what to do once the script is loaded
        script.onload = () => {
            if (container.current && 'TradingView' in window) {
                new (window.TradingView as any).widget({
                    width: '100%',
                    height: 610, // You can adjust this height
                    symbol: 'BINANCE:BTCUSDT', // Default to Bitcoin
                    interval: 'D', // Daily
                    timezone: 'Etc/UTC',
                    theme: 'dark',
                    style: '1',
                    locale: 'en',
                    toolbar_bg: '#f1f3f6',
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: 'tradingview-chart-container',
                });
            }
        };

        // Append the script to the document's body
        document.body.appendChild(script);

        // Cleanup function to remove the script when component unmounts
        return () => {
            const el = document.getElementById('tradingview-widget-script');
            if (el) {
                el.remove();
            }
        };
    }, []); // Run only once on mount

    return (
        <div className="tradingview-widget-container" style={{ height: '610px', width: '100%' }}>
            {/* This is the div the widget will mount into */}
            <div id="tradingview-chart-container" ref={container} style={{ height: '100%', width: '100%' }} />
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Track all markets on TradingView</span>
                </a>
            </div>
        </div>
    );
}

// Memoize the component to prevent re-renders
export default memo(TradingViewChart);