// src/components/organisms/Navbar.tsx
'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
    LayoutDashboard, // <-- ADDED
    LayoutGrid,
    BarChart2,
    Wallet,
    Gift,
    Search,
    Bell,
    UserCircle,
    ShieldCheck,
    Settings,
    LogOut
} from 'lucide-react'; // <-- ADDED LayoutDashboard
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 1. Navigation Links Data
const navLinks = [
    // --- THIS IS THE NEW LINK ---
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    // --------------------------
    { href: '/', label: 'Discover', icon: LayoutGrid },
    { href: '/charts', label: 'Charts', icon: BarChart2 },
    { href: '/portfolio', label: 'Portfolio', icon: Wallet },
    { href: '/rewards', label: 'Rewards', icon: Gift },
];

// 2. The Main Navbar Component
export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between gap-4 p-4 bg-zinc-950 border-b border-zinc-800">
            {/* Left Side: Logo & Links */}
            <div className="flex items-center gap-6">
                <Link href="/dashboard" className="text-xl font-bold text-white hidden sm:block">
                    Token
                    <span className="text-blue-500">Trade</span>
                </Link>
                <div className="flex items-center gap-1.5">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'flex items-center gap-2 rounded-lg px-3 py-2 transition-colors',
                                    'text-zinc-400 hover:text-white hover:bg-zinc-800',
                                    isActive && 'bg-zinc-800 text-white'
                                )}
                                title={link.label}
                            >
                                <link.icon className="h-5 w-5" />
                                <span className="hidden md:inline">{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Right Side: Search, Deposit, & Profile */}
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                    <Input
                        type="search"
                        placeholder="Search tokens..."
                        className="w-full max-w-xs rounded-lg bg-zinc-900 border-zinc-700 pl-11"
                    />
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:block">
                            Deposit
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

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                        >
                            <Bell className="h-5 w-5" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 bg-zinc-900 text-white border-zinc-700">
                        <div className="p-4 text-center text-zinc-400">
                            You have no new notifications.
                        </div>
                    </PopoverContent>
                </Popover>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
                        >
                            <UserCircle className="h-5 w-5" />
                            <span className="sr-only">Profile</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-zinc-900 text-white border-zinc-700">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-zinc-700" />
                        <DropdownMenuItem className="cursor-pointer hover:!bg-zinc-800">
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            <span>Account & Security</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:!bg-zinc-800">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-zinc-700" />
                        <DropdownMenuItem className="cursor-pointer text-red-400 hover:!bg-red-500/10 hover:!text-red-400">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    );
};