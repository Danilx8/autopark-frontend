import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
         registerType: "prompt",
         includeAssets: ["logo.ico", "apple-touch-icon.png", "masked-icon.svg"],
         manifest: {
            name: "websitename",
            short_name: "websitename",
            description: "Website description(Could be same with index.html file)",
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
                  src: "logo_512.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "any maskable",
               },
            ],
         },
      }),]
})
