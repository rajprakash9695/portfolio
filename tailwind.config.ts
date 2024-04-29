import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xs: '0.8rem',
        sm: '1.1rem',
        md: '1.5rem',
        lg: '1.8rem',
        xl: '2rem',
        ['2xl']: '2.2rem',
        ['3xl']: '2.5rem',
        ['4xl']: '3rem',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',

        black: '900',
      },
      boxShadow: {
        xl: '0px -1px 17px 2px rgba(250,236,236, .1)',
      },
    },
  },
  plugins: [],
};
export default config;
