module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        partstheme: {
          primary: "#0FCFEC",
          secondary: "#103E3C",
          accent: "#3A4256",
          neutral: "#EEF5F9",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
