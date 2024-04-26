/// <reference types="vite/client" />

// https://vitejs.dev/config/
import { API_SERVER_URL } from "@/config";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: API_SERVER_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
});
