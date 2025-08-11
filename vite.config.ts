import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		tsconfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart({
			target: "vercel",
			customViteReactPlugin: true,
		}),
		react(),
	],
});
