const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",
      white: "hsl(0, 0%, 100%)",
      veryLightGrayishBlue: "hsl(210, 60%, 98%)",
      lightGrayishBlue: {
        "1": "hsl(211, 68%, 94%)",
        "2": "hsl(205, 33%, 90%)"
      },
      grayishBlue: "hsl(219, 14%, 63%)",
      darkGrayishBlue: "hsl(219, 12%, 42%)",
      veryDarkBlue: "hsl(224, 21%, 14%)"
    },
    fontFamily: {
      sans: ["var(--ff-sans)", ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}

