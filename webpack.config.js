const { NODE_ENV } = process.env;
let mode = NODE_ENV || 'development';

module.exports = {
  mode,

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

  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
};
