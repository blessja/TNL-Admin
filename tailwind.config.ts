import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#1F9F90",
        "secondary-color": "#D9F1EE",
        "neutral-color": "#757575",
        primary1: "#1F9F90",
        primary2: "#222222",
        primary3: "#FFBB38",
        secondary1: "#EF262C",
        secondary2: "#797979",
        secondary3: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
export default config;
