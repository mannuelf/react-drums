// vite.config.ts
import { vanillaExtractPlugin as veEsbuildPlugin } from 'file:///Users/mannuelferreira/workspace/react-drums/node_modules/.pnpm/@vanilla-extract+esbuild-plugin@2.3.1_@types+node@20.10.5/node_modules/@vanilla-extract/esbuild-plugin/dist/vanilla-extract-esbuild-plugin.cjs.js';
import { vanillaExtractPlugin } from 'file:///Users/mannuelferreira/workspace/react-drums/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.9.3_@types+node@20.10.5_vite@5.0.10/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js';
import react from 'file:///Users/mannuelferreira/workspace/react-drums/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.10/node_modules/@vitejs/plugin-react/dist/index.mjs';
import { defineConfig } from 'file:///Users/mannuelferreira/workspace/react-drums/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.5/node_modules/vite/dist/node/index.js';
import svgr from 'file:///Users/mannuelferreira/workspace/react-drums/node_modules/.pnpm/vite-plugin-svgr@4.2.0_typescript@5.3.3_vite@5.0.10/node_modules/vite-plugin-svgr/dist/index.js';
var vite_config_default = defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [veEsbuildPlugin({ runtime: true })],
      // NOTE: A
    },
  },
  plugins: [svgr(), react(), vanillaExtractPlugin({})],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFubnVlbGZlcnJlaXJhL3dvcmtzcGFjZS9yZWFjdC1kcnVtcy9wYWNrYWdlcy9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYW5udWVsZmVycmVpcmEvd29ya3NwYWNlL3JlYWN0LWRydW1zL3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWFubnVlbGZlcnJlaXJhL3dvcmtzcGFjZS9yZWFjdC1kcnVtcy9wYWNrYWdlcy9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2YW5pbGxhRXh0cmFjdFBsdWdpbiBhcyB2ZUVzYnVpbGRQbHVnaW4gfSBmcm9tICdAdmFuaWxsYS1leHRyYWN0L2VzYnVpbGQtcGx1Z2luJztcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSAnQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcblxuLy8gQTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbmlsbGEtZXh0cmFjdC1jc3MvdmFuaWxsYS1leHRyYWN0L2Rpc2N1c3Npb25zLzEwNTEjZGlzY3Vzc2lvbmNvbW1lbnQtNTQ4MTgyN1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIHBsdWdpbnM6IFt2ZUVzYnVpbGRQbHVnaW4oeyBydW50aW1lOiB0cnVlIH0pXSwgLy8gTk9URTogQVxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtzdmdyKCksIHJlYWN0KCksIHZhbmlsbGFFeHRyYWN0UGx1Z2luKHt9KV0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1csU0FBUyx3QkFBd0IsdUJBQXVCO0FBQzlaLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFHakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUEsTUFDZCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxLQUFLLENBQUMsQ0FBQztBQUFBO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
