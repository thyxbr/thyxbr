/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent2) / <alpha-value>)',
        headings: 'rgb(var(--color-headings) / <alpha-value>)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-text))',
            '--tw-prose-headings': 'rgb(var(--color-headings))',
            '--tw-prose-links': 'rgb(var(--color-accent))',
            '--tw-prose-bold': 'rgb(var(--color-headings))',
            '--tw-prose-code': 'rgb(var(--color-accent2))',
            '--tw-prose-pre-bg': 'rgb(var(--color-surface))',
            '--tw-prose-pre-code': 'rgb(var(--color-text))',
            '--tw-prose-quotes': 'rgb(var(--color-accent2))',
            '--tw-prose-quote-borders': 'rgb(var(--color-border))',
            '--tw-prose-counters': 'rgb(var(--color-muted))',
            '--tw-prose-bullets': 'rgb(var(--color-muted))',
            '--tw-prose-hr': 'rgb(var(--color-border))',
            '--tw-prose-th-borders': 'rgb(var(--color-border))',
            '--tw-prose-td-borders': 'rgb(var(--color-border))',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
