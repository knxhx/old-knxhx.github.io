import { mode } from '../utils/env';
import noop from 'gulp-noop';
import { paths } from '../utils/paths';
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import pump from 'pump';
import postCSS from 'gulp-postcss';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import {server} from './serve'

function styles (cb) {
  return pump(
    [
      src(`${paths.src.styles}/*.pcss`),
      plumber(),
      'production' === mode ? noop() : sourcemaps.init(),
      postCSS(),
      'production' === mode ? cleanCSS({
        level: {
          1: {
            specialComments: false,
          }
        }
      }) : noop(),
      rename({
        // suffix: 'production' === mode ? `.min` : ``, // not using for now
        extname: `.css`
      }),
      'production' === mode ? noop() : sourcemaps.write('.'),
      dest(paths.dist.styles),
      server.stream()
    ],
    cb
  );
}

export { styles };
