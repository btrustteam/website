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
      blur: {
        "162": "10.125rem",
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
        "black-6": "#101010",
        "dropdown-bg": "rgba(234, 234, 234, 0.05)",
        "white-6": "#E7E7E7",
        "white-9": "#848484",
        "black-2": "#C6C6C6",
        "card-border": "rgba(104, 104, 104, 0.20)",
        "white-7": "C4C4C4",
        "text-white": "#DFDFDF",
        "black-3": "#989898",
        "contact-black": "rgba(21, 21, 21, 0.80)",
        "black-5": "#3B3B3B",
        "process-border": "rgba(59, 59, 59, 0.50)",
        "process-bg": "rgba(198, 198, 198, 0.03)",
        "tag-bg": "rgba(59, 59, 59, 0.60)",
        "mobile-bg": "linear-gradient(180deg,#1A1A1A,#131313)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
