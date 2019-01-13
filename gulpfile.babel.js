import { series, parallel } from 'gulp';
import { scripts, styles, templates, fonts, svgs, clean, monitor } from './tools/index';
import { serve } from './tools/tasks/serve';

const start = parallel(
  serve,
  monitor
);

const build = series(
  clean,
  series(
    svgs,
    styles,
    scripts,
    fonts,
    templates,
  )
);

const prod = series(
  clean,
  parallel(
    svgs,
    scripts,
    styles,
    fonts,
    templates,
  )
);

export { build, start, prod, styles, scripts, fonts, templates };