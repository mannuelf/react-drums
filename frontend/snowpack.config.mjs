/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  alias: {
    '@': './src',
  },
  env: {},
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
      '@snowpack/plugin-webpack',
      {
        /*https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack#readme*/
      },
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
        transformOptions: {
          // babel transform options
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
    target: 'esnext',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
