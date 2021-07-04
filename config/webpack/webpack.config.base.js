const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const POSTCSS_CONFIG = path.resolve(__dirname, '..', 'postcss.config.js');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { config: POSTCSS_CONFIG } },
          },
          { loader: 'sass-loader' },
        ],
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
