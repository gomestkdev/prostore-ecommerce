"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import {
    SunIcon,
    MoonIcon,
    SunMoon,
} from "lucide-react";

function useMounted() {
    return useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
}

export default function ModeToggle() {
    const mounted = useMounted();
    const { theme, setTheme } = useTheme();

    if (!mounted) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant={"ghost"}
                        className={"focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"}
                        size={"icon"}
                    />
                }
            >
                {theme === "system" ? (
                    <SunMoon />
                ) : theme === "dark" ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={"cursor-pointer"} onClick={() => setTheme("light")}>
                        <SunIcon />
                        Light
                    </DropdownMenuItem>

                    <DropdownMenuItem className={"cursor-pointer"} onClick={() => setTheme("dark")}>
                        <MoonIcon />
                        Dark
                    </DropdownMenuItem>

                    <DropdownMenuItem className={"cursor-pointer"} onClick={() => setTheme("system")}>
                        <SunMoon />
                        System
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
