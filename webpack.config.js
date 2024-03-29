const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html",
});
const miniCssPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css",
});

module.exports = (env, options) => {
  console.log(`Webpack 5 'mode': ${options.mode}`);
  return {
    context: srcPath,
    resolve: {
      alias: {
        States: path.resolve(srcPath, "states"),
        Utilities: path.resolve(srcPath, "utilities"),
        Components: path.resolve(srcPath, "components"),
        Api: path.resolve(srcPath, "api"),
      },
      fallback: {
        crypto: false,
      },
    },
    entry: {
      index: ["./index.jsx"],
    },
    output: {
      path: distPath,
      filename: "[name].bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          resolve: {
            extensions: [".js", ".jsx"],
          },
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
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            // "style-loader",
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
    plugins: [htmlPlugin, miniCssPlugin],
    devServer: {
      contentBase: distPath,
      compress: true,
      port: 8080,
      historyApiFallback: true,
    },
    devtool: options.mode === "development" ? "eval" : "source-map",
  };
};
