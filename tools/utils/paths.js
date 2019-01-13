import path from 'path';

const root = path.resolve(process.env.PWD);

const paths = {
  src: {
    styles: path.resolve(`${root}/src/styles/`),
    scripts: path.resolve(`${root}/src/scripts/`),
    templates: path.resolve(`${root}/src/templates/`),
    fonts: path.resolve(`${root}/src/fonts/`),
    svgs: path.resolve(`${root}/src/svgs/`),
  },
  dist: {
    styles: path.resolve(`${root}/dist/styles/`),
    scripts: path.resolve(`${root}/dist/scripts/`),
    templates: path.resolve(`${root}/`),
    fonts: path.resolve(`${root}/dist/fonts/`),
    svgs: path.resolve(`${root}/dist/svgs/`),
  }
};

export { paths, root };
