import * as dotenv from "dotenv"
dotenv.config()

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/api': {
        target: process.env.REMOTE_BACKEND_URL ?? "http:localhost:3000",
        changeOrigin: true,
        secure: false
      }
    }
  }
})
