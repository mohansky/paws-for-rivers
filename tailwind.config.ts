import type { Config } from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import colors from "tailwindcss/colors";
import svgToDataUri from "mini-svg-data-uri";
// import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
const {
	default: flattenColorPalette,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  } = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    // darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ["var(--font-nunito)"],
			display: ["var(--font-nunito)"],
		  },
  		colors: {
			lightbrown: 'hsl(var(--light-brown))',
			lightred: 'hsl(var(--light-red))',
			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  animation: {
			scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		  },
		  keyframes: {
			scroll: {
			  to: {
				transform: "translate(calc(-50% - 0.5rem))",
			  },
			},
			wave: {
				'0%': { transform: 'translateX(0)' },
				'50%': { transform: 'translateX(-25%)' },
				'100%': { transform: 'translateX(-50%)' }
			  },
		  },
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), addVariablesForColors,
	function ({ matchUtilities, theme }: unknown) {
		matchUtilities(
		  {
			"bg-grid": (value: unknown) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
			  )}")`,
			}),
			"bg-grid-small": (value: unknown) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
			  )}")`,
			}),
			"bg-dot": (value: unknown) => ({
			  backgroundImage: `url("${svgToDataUri(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
			  )}")`,
			}),
		  },
		  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
		);
	  },
  ],
} satisfies Config;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  } 
 
