const { resolve, join } = require('path');
const normalize = require('postcss-normalize');
const autoreset = require('postcss-autoreset');
const cssNext = require('postcss-cssnext');
const values = require('postcss-modules-values');

module.exports = (env) => ({
  entry: resolve(__dirname, 'input', 'index.js'),
  output: {
    filename: 'output.js',
    path: join(__dirname, 'output'),
    pathinfo: !env.prod,
  },
  context: resolve(__dirname, 'input'),
  devtool: env.prod ? 'source-map' : 'eval',
  bail: env.prod,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1', 'postcss-loader'],
      },
    ],
  },
  postcss: () => ([
    normalize,
    autoreset({
      reset: {
        boxSizing: 'border-box',
      },
    }),
    cssNext,
    values,
  ]),
});
