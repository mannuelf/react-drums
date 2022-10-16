import * as esbuild from 'esbuild';
import pkg from './package.json' assert { type: 'json' };
import inlineImage from 'esbuild-plugin-inline-image';

esbuild
  .build({
    absWorkingDir: process.cwd(),
    bundle: true,
    define: { 'process.env.NODE_ENV': '"development"' },
    entryPoints: ['./src/index.tsx'],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    loader: { '.ts': 'tsx' },
    logLevel: 'error',
    minify: false,
    outfile: './public/js/bundle.js',
    platform: 'browser',
    plugins: [inlineImage()],
    sourcemap: true,
    target: ['chrome100', 'edge100', 'firefox99', 'ios13', 'safari13'],
    watch: {
      onRebuild(error, result) {
        if (error) console.error('🔥 watch build failed:', error);
        else console.log('🍾 watch build succeeded:', result);
      },
    },
  })
  .catch((error) => {
    console.error('🔥 error', error);
    process.exit(1);
  })
  .finally(() => {
    console.log("🏗️   esbuild'ing complete.");
  });
