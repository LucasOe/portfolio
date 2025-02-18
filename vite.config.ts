import path from "node:path";

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { webfontDownload } from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [
		reactRouter(),
		tailwindcss(),
		webfontDownload([
			"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
			"https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap",
			"https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap",
		]),
	],
});
