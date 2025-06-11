import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/golf-club-calculator",
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    }
  },
})
