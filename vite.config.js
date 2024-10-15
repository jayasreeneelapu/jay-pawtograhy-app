import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; // Changed to named import

export default defineConfig({
  base: "/jay-pawtograhy-app/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      jpeg: {
        quality: 75,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
        ],
      },
    }),
  ],
  assetsInclude: ['**/*.png', '**/*.PNG'],
});
