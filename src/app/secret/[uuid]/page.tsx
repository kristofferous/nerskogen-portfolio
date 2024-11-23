// secret/[uuid]/page.tsx
"use client";
import Image from 'next/image';
import Head from 'next/head';

export default function SecretContent({ params }: { params: { uuid: string } }) {
    const uuid = params.uuid;
    const fileExtension = uuid.split('.').pop()?.toLowerCase() || '';
    const fileUrl = `https://panel.isora.no/assets/${uuid}`;

    return (
        <div className="relative overflow-hidden bg-gray-900 min-h-screen flex items-center justify-center px-4 py-8">
            <Head>
                <title>Secret Content</title>
            </Head>
            <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
                <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full">
                    {fileExtension.match(/(jpg|jpeg|png|gif|webp)$/) ? (
                        <Image
                            src={fileUrl}
                            alt="Secret Image"
                            width={1600}
                            height={900}
                            className="object-contain w-full h-auto"
                        />
                    ) : fileExtension.match(/(mp4|webm|ogg)$/) ? (
                        <video
                            controls
                            className="w-full h-auto"
                            style={{ maxHeight: '80vh' }}
                        >
                            <source src={fileUrl} type={`video/mp4`} />
                            Din nettleser støtter ikke avspilling av denne videoen.
                        </video>
                    ) : fileExtension === 'pdf' ? (
                        <iframe
                            src={fileUrl}
                            className="w-full h-screen"
                            frameBorder="0"
                            title="Secret Document"
                        ></iframe>
                    ) : (
                        <p className="text-white text-center p-6">Unsupported file type.</p>
                    )}
                </div>
            </main>
        </div>
    );
}
