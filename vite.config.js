import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://gunjanks.github.io/portfolio/home/", // Replace with your GitHub repository name
});