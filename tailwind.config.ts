import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tbase: "var(--color-text-base)",
        vgray: "var(--color-light-gray)",
        vgreen: "var(--color-green)",
        vblue: "var(--color-blue)",
        vred: "var(--color-red)",
        vnavy: "var(--color-navy)",
        bgprimary: "var(--color-bg-primary)",
        bgsecondary: "var(--color-bg-secondary)",
      },
    },
  },

  plugins: [],
};
export default config;
