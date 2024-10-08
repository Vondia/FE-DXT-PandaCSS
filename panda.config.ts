import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {}
    },

    globalCss: {
        body: {
          bg: "slate.900",
        },
      },

    // The output directory for your css system
    outdir: "styled-system",
    conditions: {
      extend: {
        groupHover: "[role=group]:where(:hover, [data-hover]) & ",
      },
    },

})
