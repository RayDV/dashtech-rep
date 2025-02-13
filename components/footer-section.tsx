"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

function FooterSection() {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(false);

    React.useEffect(() => {
        setIsDarkMode(theme === "dark");
    }, [theme, setIsDarkMode]);

    console.log(theme);

    return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">
                            Dash Technologies
                        </h2>
                        <p className="mb-6 text-muted-foreground">
                            We are a startup that specializes in helping
                            educational institutions with their digital
                            transformation.
                        </p>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h3>
                        <nav className="space-y-2 text-sm">
                            <a
                                href="/"
                                className="block transition-colors hover:text-primary"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                className="block transition-colors hover:text-primary"
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Contact Us
                        </h3>
                        <address className="space-y-2 text-sm not-italic">
                            <p>Dichill Tomarong</p>
                            <p>Los Angeles, CA</p>
                        </address>
                    </div>
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold">
                            Follow Us
                        </h3>
                        <div className="mb-6 flex space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <Github className="h-4 w-4" />
                                            <span className="sr-only">
                                                Github
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">
                                                LinkedIn
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Connect with us on LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            <Switch
                                id="dark-mode"
                                checked={isDarkMode}
                                onCheckedChange={() => {
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    );
                                }}
                            />
                            <Moon className="h-4 w-4" />
                            <Label htmlFor="dark-mode" className="sr-only">
                                Toggle dark mode
                            </Label>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Dash Technologies. All rights reserved.
                    </p>
                    <nav className="flex gap-4 text-sm">
                        <a
                            href="/privacy"
                            className="transition-colors hover:text-primary"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms-of-service"
                            className="transition-colors hover:text-primary"
                        >
                            Terms of Service
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export { FooterSection };
