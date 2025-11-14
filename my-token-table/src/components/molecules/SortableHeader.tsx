// src/components/molecules/SortableHeader.tsx
import React from "react";
import { TableHead } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"; // npm install lucide-react

// Define the shape of the sorting object
export interface SortConfig {
    key: string;
    direction: "asc" | "desc";
}

interface SortableHeaderProps {
    // The key this header is responsible for (e.g., "price", "marketCap")
    columnKey: string;
    // The current sort config from the parent
    sortConfig: SortConfig | null;
    // Callback to update the sort config
    onSort: (key: string) => void;
    // The text to display
    children: React.ReactNode;
    className?: string;
}

export const SortableHeader: React.FC<SortableHeaderProps> = ({
    columnKey,
    sortConfig,
    onSort,
    children,
    className,
}) => {
    const isSorted = sortConfig?.key === columnKey;
    const isAsc = isSorted && sortConfig?.direction === "asc";
    const isDesc = isSorted && sortConfig?.direction === "desc";

    const Icon = isAsc ? ArrowUp : isDesc ? ArrowDown : ChevronsUpDown;

    return (
        <TableHead
            className={cn("cursor-pointer select-none", className)}
            onClick={() => onSort(columnKey)}
        >
            <div className="flex items-center gap-1">
                {children}
                <Icon
                    size={14}
                    className={cn(isSorted ? "text-white" : "text-zinc-500")}
                />
            </div>
        </TableHead>
    );
};