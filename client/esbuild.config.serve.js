import * as esbuild from 'esbuild';

esbuild
  .serve(
    {
      servedir: './public',
      port: 3001,
    },
    {
      bundle: false,
      entryPoints: ['./src/index.tsx'],
      logLevel: 'error',
      minify: true,
      outdir: './public/js',
      platform: 'browser',
      plugins: [],
      sourcemap: true,
      absWorkingDir: process.cwd(),
      target: ['chrome100', 'edge100', 'firefox99', 'ios13', 'safari13'],
    },
  )
  .then((server) => {
    console.info(`🖥️  Server running on port: ${server.port}`);
    // server.stop();
  })
  .catch((error) => {
    console.error(`🔥  ${error}`);
    process.exit(1);
  })
  .finally(() => {
    console.log(`🏗️  build complete.`);
  });
