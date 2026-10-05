import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import seoFiles from 'vite-plugin-seo-files'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Plugin para generar sitemap.xml y robots.txt en el build
    // seoFiles({
    //   siteUrl: 'https://unadeltaamacuro.netlify.app',
    //   generateSitemap: true,
    //   generateRobots: true,
    // }),

    // Middleware para forzar PDFs inline
    {
      name: 'pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.split('?')[0].toLowerCase().endsWith('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Disposition', 'inline')
          }
          next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.split('?')[0].toLowerCase().endsWith('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Disposition', 'inline')
          }
          next()
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})