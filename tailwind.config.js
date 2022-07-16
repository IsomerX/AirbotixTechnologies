const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors:{
            white: "#FFFFFF",
            black: "#000000",
            "primary": "#D8C691",
            "secondary": "#CBB26B",
            "tert": "#BE9E45",
            "extra": "#233367",
            "back1": "#162041",
            "back2": "#090D1B",
            zinc: colors.zinc
        },
        fontFamily: {
            heading: ["Montserrat", "sans-serif"],
            sub: ["Lato", "sans-serif"],
        },
        backgroundImage: {
            "home-swarm": "url('/assets/home_swarm.jpg')",
        },
        extend: {
            screens: {
                'navsm': '880px'
            }
        },
    },
    plugins: [],
};
