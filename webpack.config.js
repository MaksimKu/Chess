const path = require('path');

const baseConfig = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
              test: /\.ts$/i,
              use: 'ts-loader',
          },
      ],
  },
  resolve: {
      extensions: ['.js'],
  },
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist'),
  },
 
};

module.exports = baseConfig;