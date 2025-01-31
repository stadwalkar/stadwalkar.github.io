import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        realEstate: '/real-estate.html',
        startups: '/startups.html',
        connect: '/connect.html',
      },
    },
  },
  server: {
    open: true
  }
})
