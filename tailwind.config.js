module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            heading: ["Montserrat", "sans-serif"],
            sub: ["Lato", "sans-serif"],
        },
        backgroundImage: {
            "home-swarm": "url('/assets/home_swarm.jpg')",
        },
        extend: {},
    },
    plugins: [],
};
