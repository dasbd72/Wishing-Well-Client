const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");

module.exports = {
  context: srcPath,
  entry: {
    index: ["./index.jsx"],
  },
  resolve: {
    alias: {
      states: path.resolve(srcPath, "states"),
      Utilities: path.resolve(srcPath, "utilities"),
      Components: path.resolve(srcPath, "components"),
      Api: path.resolve(srcPath, "api"),
    },
  },
  output: {
    path: distPath,
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                  },
                ],
                "@babel/preset-react",
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: "eval",
};
