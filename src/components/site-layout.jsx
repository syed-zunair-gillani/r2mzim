"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SiteLayout = ({ children }) => {
    const path = usePathname()
    return (
        <>
            {!path?.includes("/studio") && <Navbar />}
            {children}
            {!path?.includes("/studio") && <Footer />}
        </>
    )
}

export default SiteLayout