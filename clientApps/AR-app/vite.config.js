import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 4000,
		strictPort: false,
		proxy: {
			'/api': {
				 target: 'http://localhost:3000',
				 changeOrigin: true,
				 secure: false,      
				 ws: true,
				 rewrite: (path) => path.replace(/^\/api/, ''),
			 }
		},
	},
	preview: {
		port: 4000,
		strictPort: false,
	}
});
