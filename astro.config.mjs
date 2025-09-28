import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ai-news-xhr.pages.dev',
	adapter: cloudflare(),
	integrations: [mdx(), sitemap()],
});
