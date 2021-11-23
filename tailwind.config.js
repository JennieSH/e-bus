module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#283C43",
        secondary: "#D08181",
        gray: {
          darkest: "#000000",
          dark: "#444444",
          DEFAULT: "#D5D5D5",
          light: "#EEEEEE",
          lightest: "#F5F6F6"
        },
        cust: {
          black: "#333333",
          blue: "#3591C5",
          lake: "#7FC0C5",
          teal: "#D08181",
          olive: "#52797C",
          border: "#E7E7E7"
        }
      },
      borderRadius: {
        10: "10px",
        5: "5px"
      },
      boxShadow: {
        "3xl": "0px 4px 8px rgba(0, 0, 0, 0.08)",
        "4xl": "0px 5px 15px 2px rgba(0, 0, 0, 0.05)",
        icon: "0px 2px 4px rgba(0, 0, 0, 0.1)"
      },
      fontFamily: {
        roboto: ["Roboto"],
        "noto-sans": ["Noto Sans TC"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
