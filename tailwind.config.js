/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
	theme: {
		extend: {
			colors: {
				primary: "#1A1A1A",
				secondary: "#2B2B2B",
				accent: {
					DEFAULT: "#ec4d9f",
					pink: "#ec4d9f",
					purple: "#6c80e3",
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
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("tailwindcss-3d")],
};
