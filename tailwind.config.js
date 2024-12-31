/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#161d39",
          200: "#13171e",
          300: "rgba(22, 29, 57, 0.1)",
          400: "rgba(22, 29, 57, 0.2)",
          500: "rgba(255, 255, 255, 0.85)",
          600: "rgba(255, 255, 255, 0.1)",
          700: "rgba(255, 255, 255, 0.65)",
          800: "rgba(255, 255, 255, 0)",
          900: "rgba(255, 255, 255, 0.6)",
          1000: "rgba(255, 255, 255, 0.9)",
          1100: "rgba(255, 255, 255, 0.2)",
        },
        white: "#fff",
        dodgerblue: {
          100: "#5299ff",
          200: "#448bf5",
          300: "#3781ef",
          400: "rgba(55, 129, 239, 0.6)",
          500: "rgba(82, 153, 255, 0.09)",
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "rgba(217, 217, 217, 0)",
          300: "rgba(230, 230, 230, 0.09)",
        },
        lightskyblue: "#97bcf5",
        whitesmoke: "#e9ebf0",
        chocolate: {
          100: "#d96b05",
          200: "#b5641a",
        },
        mediumseagreen: {
          100: "#1ab257",
          200: "#1ab156",
        },
        cornflowerblue: "#386cc7",
        lavender: "rgba(225, 236, 253, 0.2)",
        aliceblue: "#f4f8ff",
        darkslategray: "#263238",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      spacing: {},
      fontFamily: {
        "sf-pro": "SF Pro",
        poppins: "Poppins",
        "font-awesome-5-free": "Font Awesome 5 Free",
      },
      borderRadius: {
        "341xl": "360px",
        "11xl": "30px",
        "61xl": "80px",
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
        "10xs-5": "2.5px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      sm: "14px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      xl: "20px",
      "11xl": "30px",
      "45xl": "64px",
      "32xl": "51px",
      "2xl": "21px",
      "7xl": "26px",
      "61xl": "80px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1750: {
        raw: "screen and (max-width: 1750px)",
      },
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-animate")],
};
