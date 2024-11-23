"use client";
import { useEffect } from 'react';
const InsightsScript = () => {
    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://insights.isora.no/js/script.js';
        script.defer = true;
        script.setAttribute('data-domain', 'nerskogen.com');

        // Append it to the body
        document.body.appendChild(script);

        // Cleanup: Remove script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null; // This component renders nothing
};

export default InsightsScript;
