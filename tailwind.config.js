/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#080000",
				primary: "#161622",
				header: "#F6C8A9",
				secondary: {
					DEFAULT: "#110C09",
					100: "#242520",
					200: "#1A1A1A",
				},
				black: {
					DEFAULT: "#000",
					100: "#1E1E2D",
					200: "#232533",
				},
				gray: {
					100: "#131512",
				},
			},
			fontFamily: {
				spacemonoregular: ["SpaceMono-Regular", "sans-serif"],
			},
		},
	},
	plugins: [],
};
