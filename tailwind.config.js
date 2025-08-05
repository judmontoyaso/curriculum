/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      visibility: ['hover', 'focus'],
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            'h1, h2, h3, h4': {
              color: '#1e293b',
              'scroll-margin-top': '100px',
              fontWeight: '600',
            },
            pre: {
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            code: {
              color: '#1e293b',
              backgroundColor: '#f1f5f9',
              padding: '2px 4px',
              borderRadius: '4px',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              color: 'inherit',
              fontSize: '0.875em',
              fontWeight: 'inherit',
              display: 'block',
              overflow: 'auto',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            table: {
              width: '100%',
              marginTop: '2em',
              marginBottom: '2em',
              borderCollapse: 'collapse',
              borderWidth: '1px',
              borderColor: '#e5e7eb',
              fontSize: '0.875em',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: '#e5e7eb',
              backgroundColor: '#f9fafb',
            },
            'thead th': {
              color: '#1e293b',
              fontWeight: '600',
              padding: '12px 16px',
              textAlign: 'left',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#e5e7eb',
              '&:last-child': {
                borderBottomWidth: '0',
              },
            },
            'tbody td': {
              padding: '12px 16px',
              color: '#334155',
              verticalAlign: 'top',
            },
            '.dark & table': {
              borderColor: '#374151',
            },
            '.dark & thead': {
              backgroundColor: '#1f2937',
              borderBottomColor: '#374151',
            },
            '.dark & thead th': {
              color: '#f3f4f6',
            },
            '.dark & tbody tr': {
              borderBottomColor: '#374151',
            },
            '.dark & tbody td': {
              color: '#d1d5db',
            },
            '.dark & pre': {
              backgroundColor: '#0f172a',
            },
            '.dark & code': {
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}