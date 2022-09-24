import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/config.scss'
      }
    }),
    VitePWA({
      // registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'safari-pinned-tab.svg'
      ],
      manifest: {
        name: '臺灣大學',
        short_name: '臺灣大學',
        description: '臺灣大學',
        theme_color: '#691917',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
