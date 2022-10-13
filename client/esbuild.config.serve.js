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
      minify: false,
      outdir: './public/js',
      platform: 'node',
      plugins: [],
      sourcemap: true,
      absWorkingDir: process.cwd(),
      target: ['esnext'],
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
