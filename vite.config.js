// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        sub: "./great_kanto_earthquake.html",
      },
      output: {
        dir: "dist",
      },
    },
  },
  publicDir: "public",
});
