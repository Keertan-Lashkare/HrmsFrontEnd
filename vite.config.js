import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-redirects",
      closeBundle() {
        if (existsSync("public/_redirects")) {
          copyFileSync("public/_redirects", "dist/_redirects");
          console.log("✅ _redirects file copied to dist/");
        } else {
          console.warn("⚠️ No _redirects file found in public/");
        }
      },
    },
  ],
});
