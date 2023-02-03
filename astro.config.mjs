import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://togarashipepper.github.io',
  base: '/blag',
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: JSON.parse(fs.readFileSync('./src/shiki/one-dark-pro.json', 'utf-8')),
    },
  }
});