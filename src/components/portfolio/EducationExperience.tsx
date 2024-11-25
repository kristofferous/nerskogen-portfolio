// components/EducationExperience.tsx
import React from 'react';

const EducationExperience: React.FC = () => {
    return (
        <section className="py-12 bg-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Utdanning og Erfaring</h2>
            <div className="max-w-4xl mx-auto px-4 text-white">
                <h3 className="text-2xl font-semibold">Utdanning</h3>
                <p className="mt-2">
                    Jeg går nå 2. klasse på videregående ved KKG, studiespesialiserende linje. Jeg planlegger å studere
                    en master innenfor IT i fremtiden.
                </p>
                <h3 className="text-2xl font-semibold mt-6">Arbeidserfaring</h3>
                <p className="mt-2">
                    Jeg jobber i Elektroimportøren Kristiansand og har vært der i 4 år. Jeg ble kåret til 3. beste
                    selger etter inntjening per time en måned.
                </p>
            </div>
        </section>
    );
};

export default EducationExperience;
