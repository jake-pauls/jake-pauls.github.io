/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  darkMode: "class",
  theme: {
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
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#f8bd00",
          "primary-focus": "#570df8",
          "primary-content": "#171a1d",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#a1a1a1",
          "neutral-focus": "#16181d",
          "neutral-content": "#e8e8e8",
          "base-100": "#171a1d",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#e8e8e8",
          info: "#66c6ff",
          success: "#87d039",
          warning: "#e2d562",
          error: "#ff6f6f",
        },
      },
    ],
    base: false,
    logs: false,
  },
};
