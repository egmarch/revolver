import { defineConfig } from 'vite';

// Сборка в один IIFE-файл ../3d/tour.js; public/ (index.html) копируется как есть.
export default defineConfig({
  base: './',
  build: {
    outDir: '../3d',
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 3000,
    lib: {
      entry: 'src/main.js',
      name: 'RevolverTour',
      formats: ['iife'],
      fileName: () => 'tour.js'
    },
    rollupOptions: { output: { inlineDynamicImports: true } }
  }
});
