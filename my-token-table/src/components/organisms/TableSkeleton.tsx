// src/components/organisms/TableSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export const TableSkeleton = () => {
    // Create an array of 5 rows for the skeleton
    const skeletonRows = Array(5).fill(0);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead><Skeleton className="h-5 w-24" /></TableHead>
                    <TableHead><Skeleton className="h-5 w-20" /></TableHead>
                    <TableHead><Skeleton className="h-5 w-20" /></TableHead>
                    <TableHead><Skeleton className="h-5 w-28" /></TableHead>
                    <TableHead><Skeleton className="h-5 w-28" /></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {skeletonRows.map((_, index) => (
                    <TableRow key={index}>
                        <TableCell><Skeleton className="h-6 w-32" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-28" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-28" /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};