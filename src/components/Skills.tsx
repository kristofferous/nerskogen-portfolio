// components/Skills.tsx
import React from 'react';

const Skills: React.FC = () => {
    return (
        <section className="py-12 bg-gray-800 z-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Ferdigheter</h2>
            <div className="flex flex-wrap justify-center px-4">
                {['TypeScript', 'JavaScript', 'React', 'CSS', 'HTML'].map(skill => (
                    <span key={skill} className="m-2 px-4 py-2 bg-gray-700 text-white rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
