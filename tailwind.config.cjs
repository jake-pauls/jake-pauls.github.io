/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  darkMode: "class",
  theme: {
    colors: {
      white: "#E8E8E8",
      black: "#151515",
      grey: "#A1A1A1",
      lightning: "#F8BD00",
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
  plugins: [],
};
