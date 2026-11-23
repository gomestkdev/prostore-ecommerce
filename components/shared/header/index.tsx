import React from "react";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Logo from "@/public/images/logo.svg";
import Menu from "@/components/shared/header/menu";

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
                <Menu />
            </div>
        </header>
    );
}