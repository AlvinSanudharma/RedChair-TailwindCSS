const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          100: "#9cdbdd",
        },
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  variants: {},
  plugins: [],
};
