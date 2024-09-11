import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        "webkit-blur": "blur(10px)", // Adding custom blur with WebKit prefix
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "btrust-white": "#EAEAEA",
        "btrust-white-opacity": "rgba(234, 234, 234, 0.02)",
        "bg-black": "#191919",
        "active-white": "#FDFDFD",
        "grey-black": "#A4A4A4",
        "black-4": "#686868",
        "dropdown-bg": "rgba(234, 234, 234, 0.05)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".webkit-backdrop-blur": {
          "-webkit-backdrop-filter": "blur(10px)",
          "backdrop-filter": "blur(10px)",
        },
      });
    },
  ],
};
export default config;
