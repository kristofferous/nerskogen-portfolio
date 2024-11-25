// components/Projects.tsx
import React from 'react';
import Link from "next/link";

const Projects: React.FC = () => {
    return (
        <section className="py-12 bg-gray-900 z-50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Prosjekter</h2>
            <div className="max-w-4xl mx-auto px-4">
                {/* RonanHost */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-white">RonanHost</h3>
                    <p className="text-white mt-2">
                        Jeg sto for alt innenfor database og backend. Brukte strukturen med Entity, Service, Repository
                        og Controller. Lagde disse filene fra bunnen av og byttet senere til NestJS.
                    </p>
                    <Link
                        href="https://github.com/RonanPlugins/RonanHostBackend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Se på GitHub
                    </Link>
                </div>
                {/* Isora.no */}
                <div>
                    <h3 className="text-2xl font-semibold text-white">Isora.no</h3>
                    <p className="text-white mt-2">
                        Vi selger lightere. Min rolle var å stå for all programmering, inkludert håndtering av serveren,
                        domene og fullstack ansvar.
                    </p>
                    <Link
                        href="https://isora.no"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline z-80"
                    >
                        Besøk Isora.no
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
