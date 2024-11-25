// components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="py-12 bg-gray-900">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Kontakt</h2>
            <p className="text-center text-white px-4">
                Kontakt meg på <a href="mailto:kristoffer@nerskogen.com" className="text-blue-400 hover:underline">kristoffer@nerskogen.com</a>
            </p>
        </section>
    );
};

export default Contact;
