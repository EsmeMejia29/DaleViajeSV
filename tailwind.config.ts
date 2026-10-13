import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FDB813",     // Amarillo enérgico
          yellowHover: "#E5A40F",
          black: "#121212",      // Negro base
          charcoal: "#1E1E1E",   // Negro suave para tarjetas o secciones alternas
        },
      },
    },
  },
  plugins: [],
};

export default config;