import * as esbuild from 'esbuild';

esbuild
  .build({
    bundle: true,
    entryPoints: ['./src/index.tsx'],
    logLevel: 'error',
    minify: false,
    outfile: './public/js/bundle.js',
    platform: 'node',
    plugins: [],
    sourcemap: true,
    absWorkingDir: process.cwd(),
    target: ['esnext'],
  })
  .catch((error) => {
    console.error('🔥 error', error);
    process.exit(1);
  })
  .finally(() => {
    console.log("🏗️   esbuild'ing complete.");
  });
