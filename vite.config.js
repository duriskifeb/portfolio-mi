import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-mi/", // <== wajib buat GitHub Pages!
  plugins: [react()],
});
