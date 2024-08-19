import { defineConfig } from 'vite';
import preact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'PreactViteApp',
      fileName: (format) => `preact-vite-app.${format}.js`,
    },
    rollupOptions: {
      external: ['preact'],
      output: {
        globals: {
          preact: 'Preact',
        },
      },
    },
  },
});
