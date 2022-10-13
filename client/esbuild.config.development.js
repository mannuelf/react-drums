import * as esbuild from 'esbuild';

esbuild
  .serve(
    {
      servedir: './public',
      port: 3001,
    },
    {
      bundle: true,
      entryPoints: ['./src/index.tsx'],
      logLevel: 'verbose',
      minify: true,
      outdir: './public/js',
      platform: 'node',
      plugins: [],
      sourcemap: true,
    },
  )
  .then((server) => {
    console.info(`🖥️ Server running on port: ${server.port}`);
    // server.stop();
  })
  .catch((error) => {
    console.error(`🔥  ${error}`);
    process.exit(1);
  })
  .finally(() => {
    console.log(`🏗️   esbuild'ing complete.`);
  });
