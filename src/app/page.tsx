// pages/index.tsx
import { Metadata } from 'next';
import AnimatedLines from "@/components/AnimatedLines";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import EducationExperience from "@/components/EducationExperience";
import Contact from "@/components/Contact";
import Image from 'next/image';
import Head from "next/head";

export const metadata: Metadata = {
    title: 'Kristoffer Nerskogen | Portefølje',
    description: 'Full-stack utviklerportefølje for Kristoffer Nerskogen.',
}

export default function Home() {
    return (
        <div className="relative overflow-hidden bg-[#171717]">
            <Head>
                <meta property="og:title" content="Kristoffer Nerskogen | Portefølje" />
                <meta property="og:description" content="Full-stack utviklerportefølje for Kristoffer Nerskogen." />
                <meta property="og:image" content="/image.jpg" />
                <meta property="og:url" content="https://nerskogen.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kristoffer Nerskogen | Portefølje" />
                <meta name="twitter:description" content="Full-stack utviklerportefølje for Kristoffer Nerskogen." />
                <meta name="twitter:image" content="/image.jpg" />
            </Head>

            <AnimatedLines />
            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                <div className="w-32 h-32 sm:w-48 sm:h-48 mb-6 relative overflow-hidden rounded-full">
                    <Image
                        src="/image.jpg"
                        alt="Bilde av Kristoffer Nerskogen"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        style={{ filter: 'brightness(80%) contrast(90%)' }}
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 text-center">
                    Velkommen til min portefølje
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl">
                    Hei, jeg heter Kristoffer Nerskogen. Jeg er 17 år og en full-stack utvikler som er dyktig i
                    programmering. Jeg er stolt av å vise frem både min portefølje og tidligere prosjekter.
                </p>
            </main>
            <Skills/>
            <Projects/>
            <EducationExperience/>
            <Contact/>
        </div>
    );
}
