import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: '4602-39-58-124-76.ngrok-free.app',
    port: 5173,
  },
});
