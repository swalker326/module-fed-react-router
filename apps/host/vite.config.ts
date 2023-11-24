import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        remote: "http://localhost:3001/assets/remoteEntry.js"
      },
      shared: {
        react: {
          requiredVersion: "^18.2."
        },
        "react-dom": {
          requiredVersion: "^18.2.0"
        },
        "react-router-dom": {
          requiredVersion: "^6.20.0"
        }
      }
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
