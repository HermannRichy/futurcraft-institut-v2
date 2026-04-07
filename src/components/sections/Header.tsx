"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, Home, Info, BookOpen, Mail, User, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    {
        href: "/",
        label: "Accueil",
        icon: <Home className="w-4 h-4" />,
        exact: true,
    },
    {
        href: "/a-propos",
        label: "À propos",
        icon: <Info className="w-4 h-4" />,
        exact: false,
    },
    {
        href: "/formations",
        label: "Formations",
        icon: <BookOpen className="w-4 h-4" />,
        exact: false,
    },
    {
        href: "/contact",
        label: "Contact",
        icon: <Mail className="w-4 h-4" />,
        exact: false,
    },
];

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = (href: string) => {
        return pathname === href || (pathname.startsWith(href) && href !== "/");
    };
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto h-16 px-6 md:px-12 flex items-center justify-between gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo-fci.png"
                        alt="FuturCraft Institut"
                        width={100}
                        height={100}
                        className="w-5 h-5 object-contain"
                    />
                    <h1 className="text-sm lg:text-lg font-techovier">
                        FuturCraft Institut
                    </h1>
                </Link>

                {/* ── Navigation desktop ────────────────────────────── */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map(({ href, label, exact }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                                isActive(href)
                                    ? "bg-secondary/10 text-secondary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* ──CTA Button ────────────────────────────── */}
                <Button
                    size="sm"
                    variant="secondary"
                    className="hidden lg:block"
                >
                    <Link
                        href="/inscription"
                        className="flex items-center gap-2 font-semibold"
                    >
                        <User className="w-4 h-4" />
                        <span>Inscription</span>
                    </Link>
                </Button>

                {/* ── Navigation mobile ────────────────────────────── */}

                <Drawer>
                    <DrawerTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-4">
                        <div className="flex items-center justify-between py-4 mb-2">
                            <DrawerTitle>
                                <Link
                                    href="/"
                                    className="font-techovier text-lg"
                                >
                                    FuturCraft Institut
                                </Link>
                            </DrawerTitle>
                            <DrawerClose asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-xl"
                                    aria-label="Fermer le menu"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </DrawerClose>
                        </div>
                        {/* Liens principaux */}
                        <nav className="flex flex-col gap-1 mb-4">
                            {navLinks.map(({ href, label, icon }) => (
                                <DrawerClose key={href} asChild>
                                    <Link
                                        href={href}
                                        className={cn(
                                            "flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors",
                                            isActive(href)
                                                ? "bg-secondary/10 text-secondary"
                                                : "text-foreground hover:bg-muted/50",
                                        )}
                                    >
                                        {icon}
                                        {label}
                                    </Link>
                                </DrawerClose>
                            ))}
                            <DrawerClose asChild>
                                <Button asChild>
                                    <Link href="/inscription">
                                        <User className="w-4 h-4" />
                                        <span>Inscription</span>
                                    </Link>
                                </Button>
                            </DrawerClose>
                        </nav>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    );
}
