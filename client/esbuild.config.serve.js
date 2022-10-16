import * as esbuild from 'esbuild';
import inlineImage from 'esbuild-plugin-inline-image';

let PORT;

esbuild
  .serve(
    {
      servedir: './public',
      port: 3080,
    },
    {
      absWorkingDir: process.cwd(),
      bundle: false,
      entryPoints: ['./src/index.tsx'],
      jsx: 'automatic',
      loader: { '.ts': 'tsx' },
      logLevel: 'debug',
      minify: true,
      outdir: './public/js',
      platform: 'browser',
      plugins: [inlineImage()],
      sourcemap: true,
      target: ['chrome100', 'edge100', 'firefox99', 'ios13', 'safari13'],
    },
  )
  .then((server) => {
    PORT = server.port;
    console.info(`🚥 Starting server on port: ${server.port}`);
    // server.stop();
  })
  .catch((error) => {
    console.error(`🔥  ${error}`);
    process.exit(1);
  })
  .finally(() => {
    console.info(`🚦 Server running on port: http://localhost:${PORT}`);
  });
