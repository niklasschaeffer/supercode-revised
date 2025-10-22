import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import generateFile from 'vite-plugin-generate-file'

// GitHub Pages compatible configuration
// For custom domains, use relative paths to ensure assets load correctly

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      legacy({
        targets: ['defaults', 'not IE 11'],
        modernPolyfills: true,
        renderLegacyChunks: true,
        polyfills: ['es.promise', 'es.object.assign']
      }),
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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          radix: ['@radix-ui/react-slot', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-separator', '@radix-ui/react-toast'],
          icons: ['lucide-react'],
        },
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
