import ModeToggle from "@/components/shared/header/mode-toggle";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Menu() {
    return (
        <div className={"flex justify-end gap-3"}>
            <nav className={"hidden md:flex w-full max-w-xs gap-1"}>
                <ModeToggle />
                <Button variant="ghost" nativeButton={false} render={<Link href="/cart" />}>
                    <ShoppingCart /> Cart
                </Button>
                <Button variant="default" nativeButton={false} render={<Link href="/sign-in" />}>
                    <UserIcon /> Sign In
                </Button>
            </nav>
            <nav className={"md:hidden"}>
                <Sheet>
                    <SheetTrigger className={"align-middle"}>
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className={"flex flex-col items-start"}>
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                        <ModeToggle />
                        <Button variant="ghost" nativeButton={false} render={<Link href="/cart" />}>
                            <ShoppingCart /> Cart
                        </Button>
                        <Button variant="default" nativeButton={false} render={<Link href="/sign-in" />}>
                            <UserIcon /> Sign In
                        </Button>
                        <SheetDescription>

                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}