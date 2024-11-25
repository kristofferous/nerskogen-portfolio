// src/lib/directus.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createDirectus, rest, staticToken } = require('@directus/sdk');

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_API_URL)
    .with(staticToken(process.env.NEXT_DIRECTUS_ACCESS_TOKEN))
    .with(
        rest({
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate', // Ensure no caching
                Pragma: 'no-cache', // HTTP 1.0 backward compatibility
                Expires: '0' // Immediately expire cached responses
            }
        })
    );

module.exports = directus;
