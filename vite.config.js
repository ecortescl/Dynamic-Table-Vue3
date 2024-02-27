import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/entry.js'), // Ajusta a tu archivo de entrada
      name: 'DynamicTableVue3',
      fileName: (format) => `dynamic-table-vue3.${format}.js`
    },
    rollupOptions: {
      // Asegúrate de externalizar Vue y otras dependencias que no deban ser empaquetadas
      external: ['vue'],
      output: {
        // Proporciona nombres de globals para las dependencias externas, si es necesario, para formatos UMD/IIFE
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
