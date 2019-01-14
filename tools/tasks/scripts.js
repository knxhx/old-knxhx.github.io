import { src, dest } from 'gulp';
import pump from 'pump';
import plumber from 'gulp-plumber';
import named from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import { webpackConfig } from '../webpack.config';
import { paths } from '../utils/paths';

export function scripts (cb) {
  return pump(
    [
      src(`${paths.src.scripts}/*.js`),
      plumber(),
      named(),
      webpackStream(webpackConfig, webpack),
      dest(paths.dist.scripts),
    ],
    cb
  );
}
