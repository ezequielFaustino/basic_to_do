const atImport = require('postcss-import')
const postCssPresetEnv = require('postcss-preset-env')
const cssNano = require('cssnano') 
const tailwind = require('tailwindcss')
const autoPrefixer = require('autoprefixer')

module.exports = {
  plugins: [
    atImport,
    postCssPresetEnv({stage: 2}),
    cssNano,
    tailwind({}),
    autoPrefixer({})
  ]
}