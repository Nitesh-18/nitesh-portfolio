// tailwind.config.js
export const content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        keyframes: {
            floatIn: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            slowFloat: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-5px)' },
            },
        },
        animation: {
            floatIn: 'floatIn 0.6s ease-out forwards',
            slowFloat: 'slowFloat 3s ease-in-out infinite',
        },
    },
};
export const plugins = [];
  