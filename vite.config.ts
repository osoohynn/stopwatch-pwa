// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  // ✔ GitHub Pages 경로
  base: "/stopwatch-pwa/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Stopwatch PWA",
        short_name: "Stopwatch",
        // ✔ GitHub Pages 환경에서 반드시 필요
        start_url: "/stopwatch-pwa/",
        scope: "/stopwatch-pwa/",
        id: "/stopwatch-pwa/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
