// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "h1-40px": "2.41176rem",
        "h1-15px": "15px",
        "p-20px": "20px",
        "h-25px": "25px",
      },
      letterSpacing: {
        "1px": "1px",
      },
      backgroundColor: {
        "nav-hover": "#6D6E7A",
        "near-black": "#121118",
        "header-top": "#f3f4f7",
        "section-bottom": "#f6f7f9",
      },
      maxWidth: {
        "bc-large": "1681px",
      },
      padding: {
        "15px": "15px",
        "30px": "30px",
        "20px": "20px",
        "50px": "50px",
      },

      lineHeight: {
        "bc-para-text": "1.888rem",
        "bc-h1": "3rem",
        "bc-50px": "50px",
        "bc-27px": "27px",
        "h1-bottom": "2.94118rem",
      },
      container: {
        maxWidth: "68rem",
      },
      fontFamily: {
        gotham: ["Gotham"],
      },
      borderColor: {
        divider: "rgb(142, 145, 156)",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
