const { resolve } = require('path')
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lib: resolve(__dirname, 'src/lib/index.js')
      },
      output: {
        entryFileNames: `assets/[name].js`,
      }
    }
  },
  plugins: [react()]
})
