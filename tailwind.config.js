/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export const content = ["./src/**/*.{html,js,tsx}"];
export const theme = {
	extend: {
		colors: {
			"linear-gradient-right": "#496DC7",
			"linear-gradient-left": "#6C99F1",
			"introduction-box-bg-color": "#B37AED",
			"react-color": " #61DBFB",
			"typescript-color": " #3178C6",
			"github-color": "#333",
			"nodejs-color": "#3c873A",
			"python-color": "#4584b6",
			"django-color": "#0c593a",
			"nuxt-color": "#41b883",
			"aws-color": "#FF9900",
		},
		backgroundImage: {
			"my-gradient": "linear-gradient(to right, #496DC7, #6C99F1)",
			"middle-gradient":
				"linear-gradient(to right, #5c6bc0, #42a5f5,  #5c6bc0)",
		},
		rotate: {
			360: "360deg",
		},
	},
};
export const plugins = [
	plugin(function ({ addBase, theme }) {
		addBase({
			body: {
				fontFamily: theme("fontFamily.sans"),
				fontSize: theme("fontSize.base"),
				lineHeight: theme("lineHeight.base"),
			},
			h1: {
				fontFamily: theme("fontFamily.sans"),
				fontSize: theme("fontSize.5xl"),
				fontWeight: theme("fontWeight.bold"),
				lineHeight: theme("lineHeight.tight"),
			},
			h2: {
				fontFamily: theme("fontFamily.sans"),
				fontSize: theme("fontSize.4xl"),
				fontWeight: theme("fontWeight.bold"),
				lineHeight: theme("lineHeight.tight"),
			},
			h3: {
				fontFamily: theme("fontFamily.sans"),
				fontSize: theme("fontSize.3xl"),
				fontWeight: theme("fontWeight.bold"),
				lineHeight: theme("lineHeight.tight"),
			},
			h4: {
				fontFamily: theme("fontFamily.sans"),
				fontSize: theme("fontSize.2xl"),
				fontWeight: theme("fontWeight.bold"),
				lineHeight: theme("lineHeight.tight"),
			},
			h5: {
				fontFamily: theme("fontFamily.sans"),
				fontSize: theme("fontSize.xl"),
				fontWeight: theme("fontWeight.bold"),
				lineHeight: theme("lineHeight.tight"),
			},
			h6: {
				fontFamily: theme("fontFamily.sans"),
				fontSize: theme("fontSize.lg"),
				fontWeight: theme("fontWeight.bold"),
				lineHeight: theme("lineHeight.tight"),
			},
		});
	}),
];
