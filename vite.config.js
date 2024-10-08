import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: ['vueMailSignatureConverter']
    }
  },
  base: process.env.NODE_ENV === 'production'
    ? '/html-2-mailsignature/'  // Dein Repository-Name
    : '/',
})
