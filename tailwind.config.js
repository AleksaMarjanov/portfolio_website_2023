/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                dark: "#1b1b1b",
                light: "#f5f5f5",
            },
            backgroundImage: {
                circularLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
                circularLightLg: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 8px, #f5f5f5 80px);',
                circularLightMd: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 60px);',
                circularLightSm: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 4px, #f5f5f5 40px);',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            // screens: {
            //     "2xl": { max: "1535px" },
            //     // => @media (max-width: 1535px) { ... }
            //
            //     xl: { max: "1279px" },
            //     // => @media (max-width: 1279px) { ... }
            //
            //     lg: { max: "1023px" },
            //     // => @media (max-width: 1023px) { ... }
            //
            //     md: { max: "767px" },
            //     // => @media (max-width: 767px) { ... }
            //
            //     sm: { max: "639px" },
            //     // => @media (max-width: 639px) { ... }
            //
            //     xs: { max: "479px" },
            //     // => @media (max-width: 479px) { ... }
            // },
        },
    },
    plugins: [],
}
