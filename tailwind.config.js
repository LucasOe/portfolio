/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": "var(--color-neutral-200)",
						"--tw-prose-headings": "var(--color-neutral-50)",
						"--tw-prose-lead": "var(--color-neutral-300)",
						"--tw-prose-links": "var(--color-neutral-200)",
						"--tw-prose-bold": "var(--color-neutral-200)",
						"--tw-prose-counters": "var(--color-neutral-300)",
						"--tw-prose-bullets": "var(--color-neutral-400)",
						"--tw-prose-hr": "var(--color-neutral-700)",
						"--tw-prose-quotes": "var(--color-neutral-100)",
						"--tw-prose-quote-borders": "var(--color-neutral-700)",
						"--tw-prose-captions": "var(--color-neutral-400)",
						"--tw-prose-code": "var(--color-neutral-200)",
						"--tw-prose-pre-code": "var(--color-neutral-200)",
						"--tw-prose-pre-bg": "rgb(255 255 255 / 50%)",
						"--tw-prose-th-borders": "var(--color-neutral-600)",
						"--tw-prose-td-borders": "var(--color-neutral-700)",
					},
				},
			}),
		},
	},
};
