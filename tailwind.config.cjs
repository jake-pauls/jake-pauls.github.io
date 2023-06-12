/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  darkMode: "class",
  theme: {
    colors: {
      white: "#e8e8e8",
      black: "#151515",
      grey: "#a1a1a1",
      cobalt: "#1d232a",
      lightning: "#f8bd00",
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  },
};
