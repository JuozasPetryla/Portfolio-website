import { fileURLToPath, URL } from 'node:url'

import path from 'path'
import PrerenderSPAPlugin from 'prerender-spa-plugin'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
  optimizeDeps: {
    include: ['prerender-spa-plugin']
  },
  // Production-specific configuration
  server: {
    proxy: {
      '/.netlify/functions': 'http://localhost:8888' // Adjust the proxy URL
    }
  },
  // Prerendering configuration
  plugins: [
    process.env.NODE_ENV === 'production' &&
      new PrerenderSPAPlugin({
        staticDir: path.resolve(__dirname, 'dist'),
        routes: ['/'] // List of routes to prerender
        // other options...
      })
  ]
})
