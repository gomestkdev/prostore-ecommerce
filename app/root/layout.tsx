import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col">
            ROOT
            <main className="flex-1 w-full">
                { children }
            </main>
        </div>
    )
}