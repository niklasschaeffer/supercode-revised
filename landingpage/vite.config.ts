import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import generateFile from 'vite-plugin-generate-file'

// GitHub Pages compatible configuration
// For custom domains, use relative paths to ensure assets load correctly

// Custom plugin to replace module type for GitHub Pages compatibility
const replaceModuleType = () => ({
  name: 'replace-module-type',
  transformIndexHtml(html) {
    // Replace type="module" with type="text/javascript" for explicit browser compatibility
    return html.replace(/type="module"/g, 'type="text/javascript"')
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      replaceModuleType(), // Custom plugin to replace module type for GitHub Pages
      generateFile([
        {
          type: 'raw',
          output: './CNAME',
          data: 'supercode.nx-solutions.de'
        },
        {
          type: 'raw',
          output: './404.html',
          data: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SuperCode Framework</title>
    <script>
      // GitHub Pages redirect to index.html for client-side routing
      sessionStorage.redirect = location.href;
      window.location.href = './' + (location.search || '') + (location.hash || '');
    </script>
  </head>
  <body>
    <div>
      Redirecting to SuperCode Framework...
    </div>
  </body>
</html>`
        }
      ])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: './', // Relative paths for GitHub Pages custom domain compatibility
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    target: 'es2015', // Force ES2015 target for broader compatibility
    rollupOptions: {
      output: {
        format: 'iife', // Force IIFE format to avoid ES modules
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // Remove manualChunks as it conflicts with legacy plugin
      },
    },
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Force legacy polyfills and disable modern features
    modulePreload: {
      polyfill: false
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
})
