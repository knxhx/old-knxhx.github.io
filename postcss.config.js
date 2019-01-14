const autoprefixer        = require('autoprefixer'); // Should need no introduction
const easyImport          = require('postcss-easy-import'); // Allow glob imports
const calc                = require('postcss-calc');
const lost                = require('lost'); // Grid system https://github.com/peterramsing/lost/wiki/Installation
const presetEnv           = require('postcss-preset-env'); // Use tomorrow’s CSS today. https://preset-env.cssdb.org/
const nested              = require('postcss-nested'); // https://github.com/postcss/postcss-nested
const normalize           = require('postcss-normalize'); // grabs parts of normalize based on browserlist
const stripInlineComments = require('postcss-strip-inline-comments'); // in conjunction with postcss-scss this will strip inline comments

module.exports = {
  syntax: 'postcss-scss', // Not using scss, just needed inline comments
  plugins: [
    easyImport({
      extensions: [
        '.css',
        '.pcss'
      ]
    }),
    stripInlineComments({}),
    normalize({
      forceImport: true
    }),
    nested({}),
    presetEnv({
      stage: 1,
      features: {
        'custom-media-queries': {},
      }
    }),
    autoprefixer({
      grid: 'autoplace',
      cascade: false
    }),
    calc({
      warnWhenCannotResolve: true,
      mediaQueries: true
    })
  ]
};