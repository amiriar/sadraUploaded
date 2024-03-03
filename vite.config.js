import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/dashbaord': {
        target: 'https://sadra-edu.com/api', // Adjust the target URL according to your backend
        changeOrigin: true,
        withCredentials: true,
      },
    },
  },
});