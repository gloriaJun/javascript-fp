const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          enforce: "pre",
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
              presets: ['@babel/preset-env']
            },
          }
        }
      ],
    },
    plugins: [
    ],
  }

  if(options.mode === 'development') {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        showErrors: true // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
      })
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true, // 서버에서 HMR을 켠다.
      host: '0.0.0.0', // 디폴트로는 "localhost" 로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
      contentBase: './dist', // 개발서버의 루트 경로
      stats: {
        color: true
      }
    };
  }

  return config;
};
