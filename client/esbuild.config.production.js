import * as esbuild from 'esbuild';

esbuild
  .build({
    bundle: true,
    entryPoints: ['./src/index.tsx'],
    logLevel: 'verbose',
    minify: true,
    outfile: './dist/bundle.js',
    platform: 'node',
    plugins: [],
    sourcemap: true,
  })
  .catch((error) => {
    console.error('🔥 error', error);
    process.exit(1);
  })
  .finally(() => {
    console.log("🏗️   esbuild'ing complete.");
  });
