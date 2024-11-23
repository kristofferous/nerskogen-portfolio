import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import React from "react";
import PlausibleScript from "@/components/analytics/PlausibleScript";

export const metadata: Metadata = {
    title: 'Herman Kristoffer Nerskogen Helle | Portefølje',
    description: 'Full-stack utviklerportefølje for Kristoffer Nerskogen.',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`antialiased`}>
        <PlausibleScript/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
