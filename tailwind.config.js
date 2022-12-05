/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#1fb6ff",
                purple: "#7e5bef",
                pink: "#ff49db",
                orange: "#ff7849",
                green: "#13ce66",
                yellow: "#ffc82c",
                "gray-dark": "#273444",
                gray: "#8492a6",
                "gray-light": "#d3dce6",
                bgPurple: "#C67BFE",
                bgPink: "#F17383",
                bgBlue: "#6861D8",
            },
            fontFamily: {
                "font-family": ["Livvic", "sans-serif"],
            },
            backgroundImage: {
                pricingPageBg: "url('./assets/pricing-bg.png')",
                bgCircle: "url('./assets/backgrouns-circle.png')",
            },
        },
    },
    plugins: [],
};
