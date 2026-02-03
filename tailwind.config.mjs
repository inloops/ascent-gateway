/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F172A',
				secondary: '#F59E0B',
				background: '#F8FAFC',
				surface: '#FFFFFF',
				text: '#334155',
				accent: '#10B981',
			},
			fontFamily: {
				heading: ['Oswald', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				DEFAULT: '4px',
				'sm': '2px',
				'md': '4px',
				'lg': '8px',
				'xl': '12px',
			}
		},
	},
	plugins: [],
}
