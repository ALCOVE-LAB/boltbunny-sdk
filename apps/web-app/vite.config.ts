import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mkcert({
      hosts: ['locahost', '127.0.0.1'],
    }),
  ],
});
