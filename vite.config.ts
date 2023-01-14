import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: true,
	},
	plugins: [
		react(),
		webfontDownload([
			"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
			"https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap",
			"https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap",
		]),
	],
});
