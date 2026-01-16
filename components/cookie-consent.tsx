"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    const dismissBanner = () => {
        localStorage.setItem("cookieConsent", "dismissed");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 pointer-events-none animate-in slide-in-from-bottom-5 duration-500">
            <div className="pointer-events-auto">
                <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border border-border shadow-2xl rounded-2xl p-5 relative">
                    <button
                        onClick={dismissBanner}
                        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-md"
                        aria-label="Dismiss"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    <div className="flex items-start gap-3 mb-4 pr-6">
                        <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <Cookie className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm mb-1">Cookie Notice</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                We use cookies to enhance your experience.{" "}
                                <Link
                                    href="/cookies"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Learn more
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            onClick={acceptCookies}
                            className="flex-1 h-9"
                            size="sm"
                        >
                            Accept
                        </Button>
                        <Button
                            onClick={dismissBanner}
                            variant="outline"
                            className="h-9"
                            size="sm"
                        >
                            Decline
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
