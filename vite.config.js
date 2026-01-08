import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    // 2. Cấu hình PWA
    VitePWA({
      registerType: 'autoUpdate', // Tự động cập nhật khi có nội dung mới
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Tên Ứng Dụng Của Bạn',
        short_name: 'AppShortName',
        description: 'Mô tả ngắn về ứng dụng React PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/blogger_icon-icons.com_55480.png', // Bạn phải chuẩn bị icon này trong thư mục public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/blogger_icon-icons.com_55480.png', // Bạn phải chuẩn bị icon này trong thư mục public
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
