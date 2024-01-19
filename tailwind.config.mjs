/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				morning: "#fdf5d3",
				sunlight: "#EEDEBA",
				bluesky: "#B4C7F0",
				moonlight: "#181112",
				darksky: "#121425",
				grayish: "#414141",
			}
		},
	},
	plugins: [],
}
