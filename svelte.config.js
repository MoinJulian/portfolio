import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		prerender: {
			handleMissingId: 'ignore',
			handleHttpError: ({ status, path, message }) => {
				if (status === 500) {
					console.error(`Error during prerendering: ${message}`);
				}
			}
		}
	}
};

export default config;
