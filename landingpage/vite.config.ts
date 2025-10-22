import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import generateFile from 'vite-plugin-generate-file'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      generateFile([{
        type: 'raw',
        output: './CNAME',
        data: 'supercode.nx-solutions.de'
      }])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
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
