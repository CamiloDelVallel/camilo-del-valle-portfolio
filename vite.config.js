import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep portfolio media inside the generated JavaScript bundle. This avoids
    // binary corruption when the project is deployed through text-file APIs.
    assetsInlineLimit: 250_000,
  },
})
