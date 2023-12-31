import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const tmpEnv = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        "/api": tmpEnv.VITE_API_SERVER_URL,
      },
    },
  };
});
