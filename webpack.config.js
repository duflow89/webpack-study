const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV } = process.env;
let mode = NODE_ENV || 'development';

module.exports = {
  mode,

  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
