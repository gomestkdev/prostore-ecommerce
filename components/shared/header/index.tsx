import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Logo from "@/assets/logo.svg";
import ModeToggle from "@/components/shared/header/mode-toggle";

export default function Header() {
    return (
        <header className="w-full border-b">
            <div className={"wrapper flex-between"}>
                <div className={"flex-start"}>
                    <Link href="/" className={"flex-start"}>
                        <Image
                            src={Logo}
                            alt={`${APP_NAME} Logo`}
                            height={50}
                            width={50}
                            priority={true}
                        />
                    </Link>
                    <span className={"hidden lg:block font-bold text-2xl ml-3"}>
                        { APP_NAME }
                    </span>
                </div>
                <div className="space-x-2 p-1">
                    <ModeToggle />
                    <Button variant="ghost" nativeButton={false} render={<Link href="/cart" />}>
                        <ShoppingCart /> Cart
                    </Button>
                    <Button variant="ghost" nativeButton={false} render={<Link href="/sign-in" />}>
                        <UserIcon /> Sign In
                    </Button>
                </div>
            </div>
        </header>
    );
}