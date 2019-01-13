import pump from 'pump';
import { dest, src } from 'gulp';
import { config } from '../utils/env';
import { paths } from '../utils/paths';
import svgSymbols from 'gulp-svg-symbols';
import svgo from 'gulp-svgo';
import rename from 'gulp-rename';

function svgs (cb) {
  const assets = config.svgs.map(svg => `${paths.src.svgs}/${svg}.svg`);
  return pump(
    [
      src(assets),
      svgo(),
      svgSymbols({
        id: 'icon-%f',
        class: '.icon-%f',
        templates: ['default-svg'],
        warn: false,
        svgAttrs: {
          'class': 'svg-icon-lib',
          'aria-hidden': 'true',
          'style': 'position:absolute;width:0;height:0;overflow:hidden;',
          'data-enabled': 'true'
        },
      }),
      rename({
        basename: 'sprite',
      }),
      dest(paths.dist.svgs),
    ],
    cb
  );

}

export { svgs };