import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        light: {
          100: '#d1d5db',
          300: '#cbd5e1',
          400: '#94a3b8',
        },
        // yellow: {
        //   100: '#fef3c7',
        // },
        red: '#e11d48',
        // green: '#059669',
        yellow: '#eab308',
        orange: '#f97316',
        pink: '#db2777',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
