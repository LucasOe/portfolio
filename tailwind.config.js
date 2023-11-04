import dedent from "dedent";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,svg}", "index.html"],
	theme: {
		extend: {
			colors: {
				primary: colors.neutral[900],
				secondary: colors.neutral[800],
				accent: {
					pink: colors.pink[600],
					violet: colors.violet[600],
				},
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": theme("colors.neutral[200]"),
						"--tw-prose-headings": theme("colors.neutral[50]"),
						"--tw-prose-lead": theme("colors.neutral[300]"),
						"--tw-prose-links": theme("colors.neutral[200]"),
						"--tw-prose-bold": theme("colors.neutral[200]"),
						"--tw-prose-counters": theme("colors.neutral[400]"),
						"--tw-prose-bullets": theme("colors.neutral[600]"),
						"--tw-prose-hr": theme("colors.neutral[700]"),
						"--tw-prose-quotes": theme("colors.neutral[100]"),
						"--tw-prose-quote-borders": theme("colors.neutral[700]"),
						"--tw-prose-captions": theme("colors.neutral[400]"),
						"--tw-prose-code": theme("colors.neutral[200]"),
						"--tw-prose-pre-code": theme("colors.neutral[200]"),
						"--tw-prose-pre-bg": "rgb(0 0 0 / 50%)",
						"--tw-prose-th-borders": theme("colors.neutral[600]"),
						"--tw-prose-td-borders": theme("colors.neutral[700]"),
					},
				},
			}),
		},
		fontFamily: {
			sans: ["Fira Sans", "sans-serif"],
			serif: ["Libre Baskerville", "serif"],
			mono: ["Fira Code", "monospace"],
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("tailwindcss-3d"),
		function ({ addComponents, matchUtilities, theme }) {
			addComponents({
				".fill-gradient": {
					fill: dedent`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'>\
						<linearGradient id='grad'>\
							<stop offset='0%' stop-color='${theme("colors.accent[violet]").replace("#", "%23")}' />\
							<stop offset='100%' stop-color='${theme("colors.accent[pink]").replace("#", "%23")}' />\
						</linearGradient>\
					</svg>#grad")`,
				},
				".background-gradient": {
					background: dedent`\
						linear-gradient(\
							var(--focus-bg, ${theme("colors.primary")}),\
							var(--focus-bg, ${theme("colors.primary")})\
						) padding-box,\
						linear-gradient(to bottom left,\
							${theme("colors.accent[pink]")},\
							${theme("colors.accent[violet]")}\
						) border-box\
					`,
				},
			});

			matchUtilities(
				{
					focus: (value) => ({
						"--focus-bg": value,
					}),
				},
				{ values: flattenColorPalette(theme("colors")) }
			);
		},
	],
};
