import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(0, 0, 0, 0.6)",
        glow: "0 0 0 1px rgba(124, 58, 237, 0.4), 0 8px 30px -6px rgba(124, 58, 237, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
