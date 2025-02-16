import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change this if needed
    proxy: {
      "/api": {
        target: "https://patnadca.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  define: {
    "process.env": {},
  },
});
