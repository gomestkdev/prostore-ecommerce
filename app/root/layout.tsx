import React from "react";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-1 w-full">
                { children }
            </main>
            <Footer />
        </div>
    )
}