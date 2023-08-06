/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Fira Sans", "sans-serif"],
				serif: ["Libre Baskerville", "serif"],
				mono: ["Fira Code", "monospace"],
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("tailwindcss-3d")],
};
