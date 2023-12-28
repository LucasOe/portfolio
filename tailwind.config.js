import dedent from "dedent";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
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
						"--tw-prose-pre-bg": "rgb(255 255 255 / 50%)",
						"--tw-prose-th-borders": theme("colors.neutral[600]"),
						"--tw-prose-td-borders": theme("colors.neutral[700]"),
						p: {
							textWrap: "pretty",
						},
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
				// Utility component to fill an svg with a gradient.
				// See: https://fvsch.com/svg-gradient-fill
				".fill-gradient": {
					fill: dedent`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'>\
						<linearGradient id='grad'>\
							<stop offset='0%' stop-color='${theme("colors.accent[violet]").replace("#", "%23")}' />\
							<stop offset='100%' stop-color='${theme("colors.accent[pink]").replace("#", "%23")}' />\
						</linearGradient>\
					</svg>#grad") ${theme("colors.accent[pink]")}`,
				},
				".stroke-gradient": {
					stroke: dedent`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'>\
						<linearGradient id='grad'>\
							<stop offset='0%' stop-color='${theme("colors.accent[violet]").replace("#", "%23")}' />\
							<stop offset='100%' stop-color='${theme("colors.accent[pink]").replace("#", "%23")}' />\
						</linearGradient>\
					</svg>#grad") ${theme("colors.accent[pink]")}`,
				},

				// Utility component for borders with gradients.
				// See: https://codyhouse.co/nuggets/css-gradient-borders
				//
				// Uses `var(--bg)` set by the bg utility, or uses the primary
				// color as fallback.
				".background-gradient": {
					background: dedent`\
						linear-gradient(\
							var(--bg, ${theme("colors.primary")}),\
							var(--bg, ${theme("colors.primary")})\
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
					// Sets the `--bg` var to the background color, so it can be
					// used inside the `background-gradient` component
					bg: (value) => ({
						"--bg": value,
					}),
				},
				{ values: flattenColorPalette(theme("colors")) }
			);
		},
	],
};
