import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    minify: true,
    platform: 'node',
    sourcemap: true,
    outfile: './dist/bundle.js',
    plugins: [],
  })
  .catch((error) => {
    console.log('🏗️ error', error);
    process.exit(1);
  })
  .finally(() => {
    console.log("🏗️   esbuild'ing complete.");
  });
