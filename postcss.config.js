const atImport = require('postcss-import')
const postCssPresetEnv = require('postcss-preset-env')
const cssNano = require('cssnano') 

module.exports = {
  plugins: [
    atImport,
    postCssPresetEnv({stage: 2}),
    cssNano
  ]
}