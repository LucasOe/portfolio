/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Fira Sans", "sans-serif"],
				serif: ["Libre Baskerville", "serif"],
				mono: ["Fira Code", "monospace"],
			},
			fontSize: {
				xxl: "12rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
