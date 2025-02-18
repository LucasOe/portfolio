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
		{ ignores: ["build"] },
		{
			extends: [
				js.configs.recommended,
				...tseslint.configs.recommendedTypeChecked,
				...tseslint.configs.stylisticTypeChecked,
				importPlugin.flatConfigs.recommended,
				importPlugin.flatConfigs.react,
				importPlugin.flatConfigs.typescript,
			],
			files: ["app/**/*.{ts,tsx}"],
			settings: {
				react: { version: "19.0" },
				"import/resolver": {
					typescript: {
						project: ["./tsconfig.json"],
					},
				},
			},
			languageOptions: {
				ecmaVersion: 2020,
				globals: globals.browser,
				parserOptions: {
					project: ["./tsconfig.json"],
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
				"react-refresh/only-export-components": [
					"error",
					{ allowExportNames: ["meta", "links", "headers", "loader", "action"] },
				],
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
