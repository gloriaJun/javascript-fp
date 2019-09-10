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

  return {
    mode,
    entry: {
      index: './src/index.ts',
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
      extensions: ['.ts', '.js', '.json'],
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.[jt]s$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.ts$/,
          use: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new webpack.BannerPlugin(banner)],
  };
};
