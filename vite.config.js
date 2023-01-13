import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA(
      {
        registerType: "autoUpdate",
        devOptions:{
          enabled: true
        },
        manifest:{
          name: "PetGram",
          short_name: "PetGram",
          description: "With PetGram you can found the cutest pet photos",
          theme_color: "#758bff",
          background_color: "#ffffff",
          icons: [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
        },
        strategies: "generateSW",
        workbox:{
          runtimeCaching:[
            {
              urlPattern: new RegExp('https://(res.clodinary.com|images.unsplash.com|https://dummyimage.com)'),
              handler: "CacheFirst",
              options:{
                cacheName: "images"
              }
            },
            {
              urlPattern: new RegExp('https://petgram-tau-rosy.vercel.app'),
              handler: "NetworkFirst",
              options:{
                cacheName: "api"
              }
            }
          ]
        }
      }
      )
    ],
})
