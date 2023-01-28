/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				gray: {
					css: {
						'--tw-prose-code': 'white'
					}
				}
			})
		},
	},
	important: "html",
	plugins: [require('@tailwindcss/typography'),],
}
