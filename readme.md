# Knoxville City Hackathon

## Intro
Everything is build to compile down to static assets. This is not a JS web app. We're just leveraging Node and some build tools to create the static assets that will be served. 

## Quick Overview
* BrowserSync with CSS Streaming
* Webpack Modules Bundling
* Babel Transpiling es2015+ to es5
* PostCSS with some extra goodies
* SVG Sprite generation (not like old-school image sprites)

## Getting started
Note: While instruction are written with `yarn` you can also use the `npm` equivalents. See: https://yarnpkg.com/lang/en/docs/migrating-from-npm/

* Use `yarn install` to install npm packages
* `yarn build` to run all tasks
* `yarn prod` to run all tasks with production ready files (minified, etc)

## Under the hood
### Templating
* Using Nunjunks for Node pre-complied template
    * https://mozilla.github.io/nunjucks/
    * https://css-tricks.com/killer-features-of-nunjucks/  
### Styles
PostCSS support with a few additions, see `postcss.config.css`
* Future CSS specs Stage 1
    * https://preset-env.cssdb.org/features/
* Normalize support based on __browserlist__ (set in package.json) 
    * https://github.com/csstools/postcss-normalize/
* Sass-like nesting
* Sass-like inline comments (e.g. `//` vs `/* */`)
* Critical inline Support

### Scripts
* es2015+ support
    * https://babeljs.io/docs/en/learn/
* Module Bundling
    * https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
* Ramda for tiny utility functions

### SVGS
* SVGO for sanitizing
* SVG Sprite creation from SVG set.
    * https://css-tricks.com/svg-symbol-good-choice-icons/
```html
<!-- Example of using icon from SVG Sprite-->
<svg role="img">
  <use xlink:href="#icon-user"></use>
</svg>
```




