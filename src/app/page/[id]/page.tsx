// /info/[id]/page.tsx

import React from 'react';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import directus from '@/lib/directus';
import {readItem, readItems} from "@directus/sdk";

interface Page {
    id: string;
    title: string;
    meta_title: string
    meta_description: string
    content: string;
}
interface PagesProp {
    params: { id: string };
}

const Pages = async ({ params }: PagesProp) => {
    const { id } = params;

    let page: Page | null = null;
    try {
        page = (await directus.request(readItem<any, any, any>('page', id))) as Page;
    } catch (error) {
        console.error('Failed to fetch Info:', error);
    }

    if (!page) {
        notFound(); // Trigger a 404 page if no page is found
    }

    return (
        <>
            <Head>
                <title>{page.title} | Nerskogen</title>
                <meta name="description" content={`${page.title}`} />
            </Head>
            <section className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16 bg-background">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary font-serif">{page.title}</h1>
                </div>
                <div className="prose max-w-3xl mx-auto text-secondary">
                    <div dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
            </section>
        </>
    );
};

export default Pages;

// Optional: Generate Static Params for Pre-rendering
export async function generateStaticParams() {
    let pages: Page[] = [];

    try {
        pages = (await directus.request(readItems<any, any, any>('page', {
            fields: ['id'],
            limit: -1,
        }))) as Page[];
    } catch (error) {
        console.error('Failed to fetch paths for Info:', error);
    }

    return pages.map((page) => ({
        id: page.id,
    }));
}
