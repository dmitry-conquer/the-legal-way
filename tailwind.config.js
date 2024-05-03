module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1312px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CCA876",
        },
        typo: {
          100: "#4A4F55",
          200: "#393E43",
        },
      },
    },
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
    },
  },
};
