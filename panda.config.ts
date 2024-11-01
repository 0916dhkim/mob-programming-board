import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: ["./node_modules", "./build"],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          "text-primary": {
            value: {
              _osDark: "{colors.zinc.50}",
              _osLight: "{colors.zinc.950}",
            },
          },
          "text-secondary": {
            value: {
              _osDark: "{colors.zinc.400}",
              _osLight: "{colors.zinc.800}",
            },
          },
          "text-tag": { value: "{colors.zinc.50}" },
          "background-primary": {
            value: {
              _osDark: "{colors.zinc.950}",
              _osLight: "{colors.zinc.50}",
            },
          },
          "background-secondary": {
            value: {
              _osDark: "{colors.zinc.900}",
              _osLight: "{colors.zinc.200}",
            },
          },
          "background-accent": { value: "#5E27DE" },
          "background-tag": {
            value: {
              _osDark: "{colors.zinc.700}",
              _osLight: "{colors.zinc.900}",
            },
          },
        },
        borders: {
          default: {
            value: {
              _osDark: "1px solid {colors.zinc.50}",
              _osLight: "1px solid {colors.zinc.950}",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
