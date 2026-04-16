/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Lilac palette: orchid as accent, indigo-violet for science, lilac-tinted neutrals as base
        // All text/bg combinations verified for WCAG AA (≥4.5:1 contrast ratio)
        ink: {
          50:  '#f8f7fc', // bg principal — contraste 8.8:1 con ink-800
          100: '#f0ecf9',
          200: '#dcd5f2',
          300: '#bfb5e6',
          400: '#9e8fd5',
          500: '#8270c3',
          600: '#6e5baf',
          700: '#5c4a93',
          800: '#4a3c78', // texto cuerpo — 8.8:1 sobre ink-50
          900: '#3c3060',
          950: '#1f1933', // texto display — 15:1 sobre ink-50
        },
        gold: {
          // 50-400: decorativos (fondos, badges). NO usar como fondo de texto sin verificar.
          // 500+: fondos de botón → usar con text-white (pasan 4.5:1)
          50:  '#fdf5ff',
          100: '#f7e8ff', // bg tag — 8.6:1 con gold-800 ✓
          200: '#ecd0fd',
          300: '#d8a8f9',
          400: '#c275f3', // decorativo, NO para texto
          500: '#9c3fd5', // botones con text-white → 5.1:1 ✓
          600: '#7a1da9', // hover botones con text-white → 8.2:1 ✓
          700: '#641893', // accents oscuros con text-white → 10.1:1 ✓
          800: '#601e8b', // texto tag sobre gold-100 → 8.6:1 ✓
          900: '#511b74',
          950: '#320a4d',
        },
        ocean: {
          50:  '#f2f0ff', // bg tag — contraste 10:1 con ocean-800
          100: '#e6e1ff',
          200: '#cdc5ff',
          300: '#ab9dff',
          400: '#8574ff',
          500: '#6452f0',
          600: '#5040dc',
          700: '#4132bc', // texto links — 8.4:1 sobre blanco / 7.9:1 sobre ink-50
          800: '#352896', // texto tag — 10:1 sobre ocean-50
          900: '#2b2278',
          950: '#170f47',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.800'),
            '--tw-prose-headings': theme('colors.ink.950'),
            '--tw-prose-links': theme('colors.ocean.700'),
            '--tw-prose-bold': theme('colors.ink.900'),
            fontFamily: theme('fontFamily.body').join(', '),
            h1: { fontFamily: theme('fontFamily.display').join(', ') },
            h2: { fontFamily: theme('fontFamily.display').join(', ') },
            h3: { fontFamily: theme('fontFamily.display').join(', ') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
