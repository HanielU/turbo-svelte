import type { UserConfig } from 'vite';
import unocss from 'unocss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));
const config: UserConfig = {
  plugins: [unocss(), sveltekit()],
  build: {
    target: ['es2020'],
    sourcemap: true
  },
  resolve: {
    preserveSymlinks: false
  },
  ssr: {
    noExternal: Object.keys(pkg.dependencies || {})
  },
  server: {
    open: '/'
  }
};

if (process.env.NODE_ENV === 'production') config.resolve!.preserveSymlinks = true;

export default config;
