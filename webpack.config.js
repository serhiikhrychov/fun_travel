const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = ["index", "tours", "about"];

module.exports = {
  // entry: { index: path.resolve(__dirname, "src", "index.js")},
  // entry:  {index: [path.resolve(__dirname, "src", "index.js"), path.resolve(__dirname, "src", "tours.js")]},
  entry:  pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].js'
  },
  // temp added
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // {
      //   test: /\.css$/,
      //   use: [ 'style-loader', 'css-loader' ]
      // },
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin( {
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'tours.html',
      template: path.resolve(__dirname, "src", "tours.html"),
      chunks: ['tours'],
      // chunks: []
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'about.html',
      template: path.resolve(__dirname, "src", "about.html"),
      chunks: ['about'],
      // chunks: []
    })
  ]
}
