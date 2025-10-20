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
        // Paleta oficial GRS
        'grs-gray': '#595959',      // Texto principal
        'grs-blue': '#00089E',      // Acento y confianza
        'grs-green': '#1D622E',    // Sostenibilidad y CTAs
        'grs-yellow': '#E5BB06',    // Informativo
        'grs-orange': '#E15701',    // Advertencias
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'century': ['"Century Gothic"', '"URW Gothic"', 'Avantgarde', '"TeX Gyre Adventor"', 'Arial', 'Verdana', 'sans-serif'],
      },
      fontSize: {
        'h1': ['44px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-lg': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-lg': ['40px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-lg': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
