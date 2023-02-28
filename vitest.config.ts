import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'


export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@assets': fileURLToPath(new URL('src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('src/components', import.meta.url))
    }
  },
  test: {
    include: ['src/__tests__/**/*.test.{ts,tsx}'],
    setupFiles: ['src/test/setup.ts'],
    environment: 'jsdom'
  }
})
