"use client";
import {useState, ReactNode} from 'react';
import Link from 'next/link';
import {
    AiOutlineMenu,
    AiOutlineClose,
} from 'react-icons/ai';
import Image from "next/image";

interface NavbarLayoutProps {
    children: ReactNode; // This defines the type for the children prop
}

export default function NavbarLayout({children}: NavbarLayoutProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="overflow-x-hidden">

            {/* Navbar Section */}
            <nav
                className="flex justify-between items-center px-4 md:px-8 py-4 md:py-10 bg-primary-bg fixed w-full z-40 transition-all duration-300"
            >

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/" className="text-primary uppercase hover:text-accent">
                        Hjem
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Portefølje
                    </Link>
                    <Link
                        href="/om-meg"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Om Meg
                    </Link>
                    <Link
                        href="/tjenester"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Tjenester
                    </Link>
                    <Link
                        href="/kontakt"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Kontakt Meg
                    </Link>
                </div>


                {/* Icons */}
                <div className="flex items-center space-x-4">

                    {/* Burger Icon for Mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="relative z-20">
                            {menuOpen ? (
                                <AiOutlineClose size={24} className="text-primary"/>
                            ) : (
                                <AiOutlineMenu size={24} className="text-primary"/>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 transform ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div
                    className={`fixed inset-0 bg-black ${
                        menuOpen ? 'opacity-75' : 'opacity-0'
                    } transition-opacity duration-300`}
                    onClick={toggleMenu}
                ></div>
                <div
                    className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-background flex flex-col items-center pt-24 space-y-8 transform ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
                >
                    <Link href="/" className="text-primary uppercase hover:text-accent">
                        Hjem
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Portefølje
                    </Link>
                    <Link
                        href="/om-meg"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Om Meg
                    </Link>
                    <Link
                        href="/tjenester"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Tjenester
                    </Link>
                    <Link
                        href="/kontakt"
                        className="text-primary uppercase hover:text-accent"
                    >
                        Kontakt Meg
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div
                className="transition-all duration-300">
                <main>{children}</main>
            </div>
        </div>
    );
}
