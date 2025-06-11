import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		supported: {
			// Disable minified newlines
			// https://esbuild.github.io/faq/#minified-newlines
			"template-literal": false,
		},
	},
	plugins: [reactRouter(), tsconfigPaths(), tailwindcss()],
});
