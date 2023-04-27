import { Footer, Navbar } from "@/components";
import { Montserrat } from "next/font/google";
import type { PropsWithChildren } from "react";
import './globals.css'
import React from 'react'
import LayoutAnimatePresence from "./LayoutAnimatePresence";

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
});


export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-light w-full min-h-screen `} >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html >

    )
}
