import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Design System Colors
        brand: {
          pink: {
            light: "#F472B6",
            dark: "#EC4899",
          },
          blue: {
            light: "#60A5FA",
            dark: "#3B82F6",
          },
        },
      },
      spacing: {
        // Strict 4px grid based spacing
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        // Read.cv style narrow layout
        "portfolio": "42rem", // 672px, between 2xl and 3xl
      },
      fontSize: {
        // Heading 1: text-3xl font-bold (30px)
        "heading-1": ["1.875rem", { lineHeight: "1.2", fontWeight: "700" }], // 30px
        // Heading 2: text-2xl font-semibold (24px)
        "heading-2": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }], // 24px
        // Heading 3: text-xl font-medium (20px)
        "heading-3": ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }], // 20px
        // Body Large: text-lg (18px)
        "body-large": ["1.125rem", { lineHeight: "1.6" }], // 18px
        // Body: text-base (16px)
        body: ["1rem", { lineHeight: "1.6" }], // 16px
        // Caption: text-sm text-secondary (14px)
        caption: ["0.875rem", { lineHeight: "1.5" }], // 14px
      },
      borderRadius: {
        // Card border radius
        card: "0.5rem", // 8px, equivalent to rounded-lg
      },
      boxShadow: {
        // Soft shadow from design.md
        "soft": "0 8px 30px rgb(0,0,0,0.04)",
      },
      backgroundImage: {
        // Refined macaron gradient
        "gradient-macaron": "linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
