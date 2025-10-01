"use client"

import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";


type BaseLayoutProps = {
    disableFooter?: boolean;
    disableHeader?: boolean;
    children: ReactNode;
}

export default function BaseLayout ({children, disableFooter=false, disableHeader=false}: BaseLayoutProps) {
    return (
        <div className="w-full flex flex-col min-h-screen relative">
            {!disableHeader && <Header />}
            <div className="grow">
            {children}
            </div>
            {!disableFooter && <Footer />}
        </div>
    )
}