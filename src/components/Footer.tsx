// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#171717] py-6">
            <div className="max-w-6xl mx-auto text-center text-white">
                <p>&copy; {new Date().getFullYear()} Kristoffer Nerskogen. Alle rettigheter reservert.</p>
            </div>
        </footer>
    );
};

export default Footer;
