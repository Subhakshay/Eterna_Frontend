// src/app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store/store";
import React, { useState } from "react";
// Tooltips need this provider to work
import { TooltipProvider } from "@/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
    // Create a client for React Query
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    {children}
                </TooltipProvider>
            </QueryClientProvider>
        </ReduxProvider>
    );
}