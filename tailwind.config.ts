
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                infinity: {
                    50: '#f0f4ff',
                    100: '#dbe4ff',
                    200: '#bccaff',
                    300: '#8fa5ff',
                    400: '#6b78fc',
                    500: '#4b4ff7',
                    600: '#3a2eea',
                    700: '#3321d2',
                    800: '#2d1faa',
                    900: '#291e87',
                    950: '#1a1352'
                },
                gold: {
                    50: '#fefbe8',
                    100: '#fff8c2',
                    200: '#ffee89',
                    300: '#ffdc45',
                    400: '#ffcb1a',
                    500: '#ffb000',
                    600: '#dc8300',
                    700: '#b75e00',
                    800: '#954a07',
                    900: '#7c3d0b',
                    950: '#461e00'
                }
			},
			fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'star-blink': {
                    '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
                    '50%': { opacity: '0.2', transform: 'scale(0.8)' }
                },
                'drift': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '25%': { transform: 'translate(5px, 5px)' },
                    '50%': { transform: 'translate(0, 10px)' },
                    '75%': { transform: 'translate(-5px, 5px)' }
                },
                'galaxy-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'star-blink': 'star-blink 3s infinite ease-in-out',
                'drift': 'drift 15s infinite ease-in-out',
                'galaxy-spin': 'galaxy-spin 120s linear infinite',
                'float': 'float 6s infinite ease-in-out'
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': 'linear-gradient(to right bottom, rgba(20, 16, 75, 0.8), rgba(11, 10, 50, 0.8))'
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
