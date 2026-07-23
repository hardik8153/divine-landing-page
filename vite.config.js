import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative URLs allow the same build to run at a domain root or a subfolder.
  base: "./",
  plugins: [react(), tailwindcss()],
});
