import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

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
