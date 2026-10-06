import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Existing Vercel public variables remain compatible; never use these prefixes for private keys.
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: { outDir: 'build' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    env: { REACT_APP_SUPABASE_URL: '', REACT_APP_SUPABASE_ANON_KEY: '', VITE_SUPABASE_URL: '', VITE_SUPABASE_ANON_KEY: '' },
  },
});
