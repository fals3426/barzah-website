import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FAFBFB",
        card: "#FFFFFF",
        accent: "#EF5627",
        accent2: "#103970",
        muted: "#B7AFAD",
        paper: "#FAFBFB",
        ink: "#202B3A",
      },
      boxShadow: {
        glow: "0 25px 70px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(16,57,112,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,57,112,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
