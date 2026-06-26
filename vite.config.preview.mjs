import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/preview-entry.ts'),
      name: 'ChloePreviewBundle',
      formats: ['iife'],
      fileName: (format) => `preview-bundle.${format}.js`,
    },
    cssCodeSplit: false,
    assetsInlineLimit: Infinity,
    outDir: 'dist/preview',
    rollupOptions: {
      external: () => false,
    },
  },
})
