import { vanillaExtractPlugin as veEsbuildPlugin } from "@vanilla-extract/esbuild-plugin";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// A: https://github.com/vanilla-extract-css/vanilla-extract/discussions/1051#discussioncomment-5481827
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [veEsbuildPlugin({ runtime: true })], // NOTE: A
    },
  },
  plugins: [react(), vanillaExtractPlugin({})],
});
