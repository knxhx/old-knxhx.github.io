import { data } from '../../data';
import { paths, root } from '../utils/paths';
import { dest, src } from 'gulp';
import { mode } from '../utils/env';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import noop from 'gulp-noop';
import { compile } from 'gulp-nunjucks';
import htmlMin from 'gulp-htmlmin';
import pump from 'pump';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const inlineFiles = {
  css: `${root}/dist/styles/critical.css`,
  svgSprite: `${root}/dist/styles/sprite.svg`
};

const criticalCSS = existsSync(inlineFiles.css)
  ? readFileSync(resolve(inlineFiles.css), 'utf8')
  : '';

const svgSprite = existsSync(inlineFiles.css)
  ? readFileSync(resolve(inlineFiles.svgSprite), 'utf8')
  : '';

data.mode      = mode;
data.critical  = {
  styles: `${criticalCSS}`
};
data.svgSprite = `${svgSprite}`;

function templates (cb) {
  return pump(
    [
      src(`${paths.src.templates}/*.njk`),
      plumber(),
      compile(data),
      htmlMin({ collapseWhitespace: true }),
      rename({
        extname: `.html`
      }),
      dest(paths.dist.templates),
    ],
    cb
  );
}

export { templates };