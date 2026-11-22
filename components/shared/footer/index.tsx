import React from "react";
import { cacheLife } from "next/cache";
import { APP_NAME } from "@/lib/constants";

async function getCurrentYear() {
    "use cache";
    cacheLife("max");
    return new Date().getFullYear();
}

export default async function Footer() {
    const currentYear = await getCurrentYear();

    return (
        <footer className="border-t">
            <div className="p-5 flex-center">
                { currentYear } | { APP_NAME }. All rights Reserved.
            </div>
        </footer>
    )
}