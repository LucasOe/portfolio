import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite-plus";

// https://vitejs.dev/config/
export default defineConfig({
	// https://oxc.rs/docs/guide/usage/linter/config.html
	lint: {
		ignorePatterns: ["**/*.gen.ts"],
		plugins: ["react", "unicorn", "oxc", "import", "jsx-a11y"],
		options: {
			typeAware: true,
			typeCheck: true,
		},
		categories: {
			correctness: "error",
			suspicious: "error",
			perf: "error",
		},
		rules: {
			"no-unassigned-import": "off",
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"require-await": "error",
			"no-empty-function": "error",
			// React
			"react/jsx-boolean-value": "error",
			"react/jsx-no-useless-fragment": "error",
			"react/no-unescaped-entities": "error",
			"react/no-unknown-property": "warn",
			"react/react-in-jsx-scope": "off",
			"react/rules-of-hooks": "error",
			"react/self-closing-comp": "error",
			// Imports
			"import/no-duplicates": "warn",
			"import/no-named-as-default-member": "warn",
			"import/no-named-as-default": "warn",
		},
		overrides: [
			{
				// Enable TypeScript-specific rules for TypeScript files
				files: ["**/*.{ts,tsx}"],
				plugins: ["typescript"],
				rules: {
					"typescript/adjacent-overload-signatures": "error",
					"typescript/array-type": "error",
					"typescript/ban-types": "error",
					"typescript/consistent-generic-constructors": "error",
					"typescript/consistent-indexed-object-style": "error",
					"typescript/consistent-type-definitions": "error",
					"typescript/consistent-type-imports": "error",
					"typescript/no-confusing-non-null-assertion": "error",
					"typescript/no-inferrable-types": "error",
					"typescript/prefer-for-of": "error",
					"typescript/prefer-function-type": "error",
				},
			},
		],
	},
	// https://oxc.rs/docs/guide/usage/formatter/config.html
	fmt: {
		ignorePatterns: ["**/*.gen.ts"],
		printWidth: 120,
		useTabs: true,
		sortImports: true,
		sortTailwindcss: {
			stylesheet: "./src/main.css",
			functions: ["clsx", "cn", "twJoin", "twMerge"],
		},
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		tailwindcss(),
		tanstackStart(),
		nitro(),
		react(),
		babel({
			presets: [reactCompilerPreset()],
		}),
	],
});
