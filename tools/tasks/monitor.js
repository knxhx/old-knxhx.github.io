import { series, watch } from 'gulp';
import { quit, reload } from './serve';
import { scripts, styles, templates, svgs, fonts, clean } from '../index';

function monitor (cb) {
  watch(
    [
      `./tools/**/*`,
      `./gulpfile.babel.js`,
      `./postcss.config.js`,
      `./babel.config.js,`,
    ],
    quit
  );
  watch(
    [
      `./src/**/*.svg`,
    ],
    series(
      svgs,
      reload
    )
  );
  watch(
    [
      `./src/**/*.js`,
    ],
    series(
      scripts,
      reload
    )
  );
  watch(
    [
      `./src/**/*.pcss`
    ],
    series(
      styles
    )
  );
  watch(
    [
      `./src/**/*.njk`
    ],
    series(
      templates,
      reload
    )
  );
  cb();
}

export { monitor };