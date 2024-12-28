import type { Config } from "tailwindcss";
import { blackA, mauve, mint } from "@radix-ui/colors";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1200px",
      },
    },
    extend: {
      boxShadow: {
        emeraldFocus:
          "0 10px 38px -10px hsla(206,22%,7%,.35), 0 10px 20px -15px hsla(206,22%,7%,.2), 0 0 0 2px #10B981",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundDark: "var(--background-dark)",
        foregroundDark: "var(--foreground-dark)",
        ...blackA,
        ...mauve,
        ...mint,
      },
      keyframes: {
        slideUpAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(2px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideRightAndFade: {
          from: {
            opacity: "0",
            transform: "translateX(-2px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideDownAndFade: {
          from: {
            opacity: "0",
            transform: "translateY(-2px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideLeftAndFade: {
          from: {
            opacity: "0",
            transform: "translateX(2px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
