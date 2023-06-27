/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out infinite",
        },
      },
    },
    fontFamily: {
      kantumruyRegular: "/src/components/font/KantumruyPro-Regular.ttf",
      kantumruyMedium: "/src/components/font/KantumruyPro-Medium.ttf",
      kantumruyBold: "/src/components/font/KantumruyPro-Bold.ttf",
    },
  },
  plugins: [],
};
