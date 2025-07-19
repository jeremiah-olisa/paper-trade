import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        auth: 'auth.html',
        markets: 'markets.html',
        trading: 'trading.html',
        portfolio: 'portfolio.html'
        // Add other pages as needed
      }
    }
  },
  plugins: [tailwindcss()],
});
