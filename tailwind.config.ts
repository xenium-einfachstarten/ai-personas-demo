import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xenium: {
          navy: "#1e3a5f",
          teal: "#008b8b",
          lime: "#d4ff00",
          mint: "#a8e6cf",
          purple: "#8b7ab8",
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          "0%": {
            "box-shadow":
              "0 0 20px rgba(0, 139, 139, 0.3), 0 0 40px rgba(168, 230, 207, 0.2)",
          },
          "100%": {
            "box-shadow":
              "0 0 30px rgba(0, 139, 139, 0.5), 0 0 60px rgba(168, 230, 207, 0.3)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
