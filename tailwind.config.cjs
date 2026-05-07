/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-muted': 'rgb(var(--ink-muted) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-muted': 'rgb(var(--accent-muted) / <alpha-value>)',
        highlight: 'rgb(var(--highlight) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'plate': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        'caption': ['0.8125rem', { lineHeight: '1.45' }],
        'meta': ['0.875rem', { lineHeight: '1.5' }],
        'body': ['1.125rem', { lineHeight: '1.65' }],
        'lede': ['1.375rem', { lineHeight: '1.5' }],
        'h3': ['1.5rem', { lineHeight: '1.25' }],
        'h2': ['2rem', { lineHeight: '1.2' }],
        'h1': ['3rem', { lineHeight: '1.15' }],
        'display-sm': ['3.75rem', { lineHeight: '1.05' }],
        'display': ['5rem', { lineHeight: '1' }],
        'display-lg': ['9rem', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        eyebrow: '0.18em',
        plate: '0.18em',
      },
      maxWidth: {
        measure: '65ch',
        prose: '40rem',
        page: '90rem',
      },
      spacing: {
        marginalia: '17.5rem',
        gallery: '7.5rem',
      },
      transitionTimingFunction: {
        gallery: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
