import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
	...tseslint.config(
		{ ignores: ["dist"] },
		{
			extends: [
				js.configs.recommended,
				...tseslint.configs.recommendedTypeChecked,
				...tseslint.configs.stylisticTypeChecked,
				importPlugin.flatConfigs.recommended,
				importPlugin.flatConfigs.react,
				importPlugin.flatConfigs.typescript,
			],
			files: ["**/*.{ts,tsx}"],
			settings: {
				react: { version: "19.0" },
				"import/resolver": {
					typescript: {
						project: ["./tsconfig.node.json", "./tsconfig.app.json"],
					},
				},
			},
			languageOptions: {
				ecmaVersion: 2020,
				globals: globals.browser,
				parserOptions: {
					project: ["./tsconfig.node.json", "./tsconfig.app.json"],
					tsconfigRootDir: import.meta.dirname,
				},
			},
			plugins: {
				react,
				"react-hooks": reactHooks,
				"react-refresh": reactRefresh,
			},
			rules: {
				...react.configs.recommended.rules,
				...react.configs["jsx-runtime"].rules,
				...reactHooks.configs.recommended.rules,
				"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
				"@typescript-eslint/consistent-type-imports": "error",
				"import/order": [
					"error",
					{
						groups: ["builtin", "external", "parent", "sibling", "index", "type"],
						"newlines-between": "always",
						alphabetize: { order: "asc", caseInsensitive: true },
					},
				],
			},
		}
	),
	eslintConfigPrettier,
];
