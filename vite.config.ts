import { defineConfig } from "vite";

export default defineConfig({
  // Simple static configuration
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
