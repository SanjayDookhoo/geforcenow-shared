import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import bindSpread from 'vite-plugin-svelte-bind-spread';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [bindSpread(), svelte()],
});
