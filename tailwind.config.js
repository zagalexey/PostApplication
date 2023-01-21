/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#FFFFFF',
				navbar: '#F8F9FA',
				blue: '#007BFF',
				grey: '#6C757D'
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
}
