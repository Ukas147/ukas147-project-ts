import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'ukas147.com',
    port: 5173, // ou qualquer outra porta que desejar
  },
})