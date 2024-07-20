/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			
			backgroundImage: {
				'custom-image': "url('/portal.png')",
				'overall-gradient': "linear-gradient(148deg, rgba(13, 13, 13, 0.30) 0%, rgba(41, 127, 139, 0.30) 100%), linear-gradient(225deg, rgba(13, 13, 13, 0.30) 0%, rgba(239, 62, 114, 0.24) 100%);",
				'section1-gradient': "radial-gradient(41.31% 89.17% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(180deg, #FFF 40%, rgba(0, 0, 0, 0.00) 100%);",
				'section1-gradient-w-image': "url('/concept/portal.png'), radial-gradient(41.31% 89.17% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), linear-gradient(180deg, #FFF 40%, rgba(0, 0, 0, 0.00) 100%);",
				'section2-gradient': "radial-gradient(83.58% 89.17% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%);",
				'section3-gradient': "linear-gradient(148deg, rgba(41, 127, 139, 0.30) 0%, rgba(13, 13, 13, 0.30) 100%), linear-gradient(340deg, rgba(239, 62, 114, 0.24) 23.37%, rgba(13, 13, 13, 0.30) 76.63%), radial-gradient(69.43% 69.43% at 31.99% 26.99%, rgba(99, 43, 137, 0.40) 0%, rgba(13, 13, 13, 0.50) 100%);",
				'footer-gradient': "radial-gradient(53.45% 89.17% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%);",
				'gradient-overlay': "radial-gradient(circle at center, #FAFAFA 0%, #000000 100%)",
				'about-section': "linear-gradient(to bottom, #297F8B 0%, #0D0D0D 30%), radial-gradient(at center, #632B89 0%, transparent 50%, #0D0D0D 80%), linear-gradient(to bottom, #EF3E72 0%, #0D0D0D 30%)",
				'section1-gradient-darkened': "radial-gradient(41.31% 89.17% at 50% 50%, rgba(0, 0, 0, 0.30) 0%, #000 100%), linear-gradient(180deg, #FFF 10%, rgba(0, 0, 0, 0.00) 100%);",
				'mobile-gradient': "radial-gradient(170.67% 69.43% at 31.99% 26.99%, rgba(99, 43, 137, 0.32) 0%, rgba(13, 13, 13, 0.40) 100%);",
			},
			backgroundColor: {
				'base': '#1A1A1A',
			},
			dropShadow: {
				'custom': '0 0 10px rgba(0,0,0,0.5)',
				'section1': '0px 0px 24px rgba(0, 0, 0, 0.25)',
			},
			textShadow: {
				'text-shadow': '0px 0px 24px rgba(0, 0, 0, 0.25)',
			},
			fontFamily: {
				'dm-sans': ['DMSans', 'sans-serif'],
				'geist': ['Geist', 'sans-serif'],
			},
			colors: {
				current: "currentColor",
				transparent: "transparent",
				neutral: {
					DEFAULT: "#737373",
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
					950: "#0a0a0a"
				},
				pink: {
					DEFAULT: "#e571a7",
					50: "#fbd7e5",
					100: "#f8c4d8",
					200: "#f4b0cc",
					300: "#ef9bbf",
					400: "#eb87b3",
					500: "#e571a7",
					600: "#c1618d",
					700: "#9e5174",
					800: "#7d415c",
					900: "#5d3245",
					950: "#3e242f"
				},
				red: {
					DEFAULT: "#ef4444",
					50: "#fef2f2",
					100: "#fee2e2",
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#ef4444",
					600: "#dc2626",
					700: "#b91c1c",
					800: "#991b1b",
					900: "#7f1d1d",
					950: "#450a0a"
				}
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
				'4000': '4000ms',
				'5000': '5000ms',
				'6000': '6000ms',
				'7000': '7000ms',
				'8000': '8000ms',
				'9000': '9000ms',
				'10000': '10000ms'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwind-scrollbar"),
		require("@tailwindcss/typography")
	]
};
