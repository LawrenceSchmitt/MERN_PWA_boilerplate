const Paths = require("../../config/Paths");

const webpack = require("webpack");
const NodemonPlugin = require("nodemon-webpack-plugin");
module.exports = {
  entry: Paths.server,
  output: {
    filename: "server.bundle.js",
    path: Paths.dist,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  mode: "development",
  target: "node",
  plugins: [
    new NodemonPlugin({}), // Dong
  ],
};
