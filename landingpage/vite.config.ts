import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import generateFile from 'vite-plugin-generate-file'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
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
    // Remove manual chunks temporarily to test basic functionality
    rollupOptions: {
      output: {
        // Explicit chunking to ensure proper React/ReactDOM handling
        manualChunks: {
          // Keep React and ReactDOM together in a dedicated chunk
          react: ['react', 'react-dom'],
          // Separate UI component libraries
          radix: ['@radix-ui/react-slot', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-separator', '@radix-ui/react-toast'],
          // Separate icon libraries
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
