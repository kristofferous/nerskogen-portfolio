import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'gradient-bg': 'gradient-bg 2s ease infinite',
            },
            keyframes: {
                'gradient-bg': {
                    '0%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                    '100%': {
                        'background-position': '0% 50%',
                    },
                },
            },
            fontFamily: {
                sans: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                'primary-bg': 'var(--color-primary-bg)',
                'secondary-bg': 'var(--color-secondary-bg)',
                'primary-text': 'var(--color-primary-text)',
                'secondary-text': 'var(--color-secondary-text)',
                'accent': 'var(--color-accent)',
            },
        },
    },
    plugins: [],
};
export default config;
