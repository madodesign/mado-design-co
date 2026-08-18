import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  // Custom breakpoints match the original design's exact grid/nav collapse points.
  screens: {
    sm: "680px",
    md: "860px",
    lg: "980px",
  },
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        "bg-2": "#F5F5F5",
        ink: "#0A0A0A",
        "ink-2": "#454545",
        "ink-3": "#6B6B6B",
        line: "#E7E7E7",
        "line-2": "#D6D6D6",
        accent: "#0000EE",
        "accent-tint": "#E8E8FD",
      },
      fontFamily: {
        head: ["var(--font-head)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
