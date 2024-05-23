import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["logo.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Autopark website",
        short_name: "Autopark",
        description:
          "Autopark site made with react.js for a server-side autopark project (https://github.com/Danilx8/Autopark)",
        theme_color: "#ffffff",
        start_url: "/",
        icons: [
          {
            src: "logo_192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo_512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
