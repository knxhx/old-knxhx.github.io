import { mode } from './utils/env';

// const extension = mode === 'production' ? '.min.js' : '.js'; // not using for now

const webpackConfig = {
  mode: mode,
  devtool: 'production' === mode ? 'none' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: `[name].js`,
  },
};

export { webpackConfig };