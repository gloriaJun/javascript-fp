const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

const resolve = (...args) => path.resolve(__dirname, ...args);

const libraryName = pkg.name;
const banner = `${pkg.name}
@version v${pkg.version}
@author ${pkg.author}
@repository ${pkg.repository.url}`;

module.exports = (env, options) => {
  const { mode } = options;

  const config = {
    mode,
    entry: {
      index: resolve('index.js'),
    },
    devtool: 'inline-source-map',
    output: {
      path: resolve('dist'),
      filename: `${libraryName}.${mode === 'development' ? '' : 'min.'}js`,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    resolve: {
      modules: ['node_modules', resolve('src')],
      extensions: ['.js', '.json'],
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [new webpack.BannerPlugin(banner)],
  };

  return config;
};
