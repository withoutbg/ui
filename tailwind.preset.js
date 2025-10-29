/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
    },
    fontSize: {
      // Refined typography scale for better hierarchy
      'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],     // 12px
      'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.015em' }],    // 14px
      'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],       // 16px
      'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.005em' }],    // 18px
      'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0em' }],         // 20px
      '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],     // 24px
      '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],   // 30px
      '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],   // 36px
      '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],       // 48px
      '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.035em' }],  // 60px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C2BD9',
          hover: '#5A23B8',
          light: '#A97BFF',
          'light-hover': '#9460E8',
          text: '#ffffff',
          'text-dark': '#000000',
        },
      },
      backgroundColor: {
        light: "#f7f7f7", // Light shade
        lighter: "#ffffff", // Lightest shade
        dark: "#2b3035", // Dark shade
        darker: "#212529", // Darkest shade
        "secondary-dark": "#1a1a1a", // Secondary dark gray for subtle section separation
      },
      backgroundImage: {
        checkerboard:
          "linear-gradient(45deg, rgba(0, 0, 0, 0.08) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 0, 0, 0.08) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.08) 75%), linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.08) 75%)",
        "dark-checkerboard":
          "linear-gradient(45deg, rgba(255, 255, 255, 0.08) 25%, transparent 25%), linear-gradient(-45deg, rgba(255, 255, 255, 0.08) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.08) 75%), linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.08) 75%)",
        shimmer:
          "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)", // light mode shimmer
        "dark-shimmer":
          "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)", // dark mode shimmer
        colorwheel:
          "conic-gradient(from 0deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))",
      },
      backgroundSize: {
        "checkerboard-size": "16px 16px",
      },
      backgroundRepeat: {
        "checkerboard-repeat": "repeat",
      },
      backgroundPosition: {
        "checkerboard-position": "0 0, 0 8px, 8px -8px, -8px 0px",
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        "fade-in-up": "fade-in-up 0.4s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
};

