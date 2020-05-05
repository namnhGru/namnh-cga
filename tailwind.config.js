/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    color: {
      primary: '#141618',
      gray: '#b5b3b3',
      gray_less_transparent: 'rgba(20,22,24,.8)',
      gray_more_transparent: 'rgba(20,22,24,.7)',
      gray_transparent: '#3F3F3F',
      white: '#fff',
      light_nude: '#F1F0ED',
      orange_500: '#f6ad55'
    },
    fontFamily: {
      gotham: ['Gotham'],
      sourceserif: ['SourceSerif']
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
