import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://embodied-ailab.github.io',
  output: 'static',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'light-plus',
        dark: 'dark-plus'
      }
    }
  }
});
