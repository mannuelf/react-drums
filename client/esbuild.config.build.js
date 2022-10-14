import * as esbuild from 'esbuild';
import pkg from './package.json' assert { type: 'json' };
console.log('whats it -----\n', pkg);

esbuild
  .build({
    bundle: true,
    entryPoints: ['./src/index.tsx'],
    logLevel: 'error',
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    minify: false,
    outfile: './public/js/bundle.js',
    loader: {
      '.png': 'dataurl',
      '.svg': 'text',
    },
    platform: 'browser',
    plugins: [],
    sourcemap: true,
    absWorkingDir: process.cwd(),
    target: ['chrome100', 'edge100', 'firefox99', 'ios13', 'safari13'],
    define: {
      'process.env.NODE_ENV': '"development"',
    },
  })
  .catch((error) => {
    console.error('🔥 error', error);
    process.exit(1);
  })
  .finally(() => {
    console.log("🏗️   esbuild'ing complete.");
  });
