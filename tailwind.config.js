module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "montserrat",
      secondary: "open sans",
      tertiary: "open sans",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#30935B",
        accent: "#E37D5F",
      },
      backgroundImage: {
        about: "url('./assets/about.JPEG')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
