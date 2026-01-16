"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Methodology", href: "/methodology" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary rounded-lg">
                        <Zap className="h-5 w-5 text-primary-foreground fill-current" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-foreground">
                        AI<span className="text-primary">Connect</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href
                                ? "text-primary"
                                : "text-muted-foreground"
                                }`}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    className="absolute bottom-0 h-0.5 bg-primary"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Affiliate Disclosure Hover */}
                <div className="hidden lg:block group relative cursor-help mr-4">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 hover:text-primary transition-colors border-b border-dotted border-muted-foreground/50">
                        Advertising Disclosure
                    </span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-72 z-50">
                        <div className="bg-popover text-popover-foreground text-xs p-3 rounded-md shadow-md border border-border relative">
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-popover border-t border-l border-border rotate-45"></div>
                            <p className="leading-relaxed">
                                AI Connect is supported by our readers. When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="hidden md:flex">
                    <Link href="/reviews">
                        <Button>Explore tools</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-lg font-medium transition-colors hover:text-primary ${pathname === link.href
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button className="w-full mt-4">Get Standard Access</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
