const path = require('path');

const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = (env, options) => {
  const config = {
    mode: options.mode,
    entry: {
      index: resolve('src', 'index.js'),
    },
    output: {
      path: resolve('dist'),
      filename: '[name].bundle.js',
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
    plugins: [],
  };

  return config;
};
