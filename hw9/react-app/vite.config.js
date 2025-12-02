import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/*'],
      manifest: {
        name: 'My React App',
        short_name: 'ReactApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#242424',
        theme_color: '#242424',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,json}'], // кешируем все ассеты сборки
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst'
          },
          {
            urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
            handler: 'CacheFirst'
          },
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst'
          },
          {
            urlPattern: ({ url }) => url.href.includes('https://public-api.example.com'),
            handler: 'NetworkFirst'
          }
        ]
      }
    })
  ]
})
