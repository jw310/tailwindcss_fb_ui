module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'main-span': '72px',
        'fb-space': '10px'
      },
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        fb: '#2e89ff'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
