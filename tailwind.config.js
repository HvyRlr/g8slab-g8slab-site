/** @type {{import('tailwindcss').Config}} */
export default {{
  content: [
    "./src/pages/**/*.{{js,ts,jsx,tsx,astro}}",
    "./src/components/**/*.{{js,ts,jsx,tsx,astro}}",
    "./src/layouts/**/*.{{js,ts,jsx,tsx,astro}}",
  ],
  theme: {{
    extend: {{
      colors: {{
        primary: "#030712",
        secondary: "#050915",
        neutral: "#020611",
      }},
      fontFamily: {{
        heading: "Inter, sans-serif",
        body: "Poppins, sans-serif",
      }},
      spacing: {{
        'safe-padding': '1rem',
      }},
    }},
  },
  plugins: [],
};
