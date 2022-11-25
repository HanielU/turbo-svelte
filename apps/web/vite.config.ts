import type { UserConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { viteConfig } from '@packages/config';

const config: UserConfig = {
  ...viteConfig,
  plugins: [...viteConfig.plugins!, vanillaExtractPlugin()]
};
export default viteConfig;
