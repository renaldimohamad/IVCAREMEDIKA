/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Premium Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          light: '#f0fdfa', // Mint light
          DEFAULT: '#10b981', // Mint
          dark: '#047857',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          600: '#334155', // Soft Navy for text
          700: '#1e293b',
          800: '#0f172a',
          900: '#0a101f',
        },
        airy: {
          blue: '#f0f9ff',
          cyan: '#ecfeff',
          mint: '#f0fdf4',
          white: '#ffffff',
          slate: '#f8fafc',
        }
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.04)',
        'luxury': '0 30px 60px -15px rgba(14, 165, 233, 0.1)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.15)',
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        }
      }
    },

  },
  plugins: [],
}
