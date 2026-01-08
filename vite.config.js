import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    // 2. Cấu hình PWA
    VitePWA({
      registerType: 'autoUpdate', // Tự động cập nhật khi có nội dung mới
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Thanh Nguyen Portfolio',
        short_name: 'TNPortfolio',
        description: 'Mô tả ngắn về ứng dụng Thanh Nguyen Portfolio',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // Bạn phải chuẩn bị icon này trong thư mục public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Bạn phải chuẩn bị icon này trong thư mục public
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],

  //setup port
  server: {
    port: 3000,
  },
})
