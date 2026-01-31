/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-green': '#10B981', // Emerald 500
                'brand-dark': '#064E3B', // Emerald 900
                'brand-blue': '#2563EB', // Blue 600
                'brand-mint': '#D1FAE5', // Emerald 100
                'brand-navy': '#111827', // Gray 900
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
