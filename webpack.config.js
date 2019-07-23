const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'production',
//   // mode: 'development',
//   entry: {
//     index: path.resolve(__dirname, 'src', 'index.js'),
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         enforce: "pre",
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         loader: 'eslint-loader',
//       },
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           },
//         }
//       }
//     ],
//   },
//   plugins: [
//   ],
// };

module.exports = (env, options) => {
  const config = {
    mode: options.mode,
    entry: {
      index: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
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
