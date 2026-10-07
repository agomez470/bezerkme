// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://bezerk.me",
	session: false,
	image: {
		service: passthroughImageService(),
	},
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		imageService: "passthrough",
		prerenderEnvironment: "node",
	}),
	vite: {
		build: {
			chunkSizeWarningLimit: 600,
		},
	},
});
