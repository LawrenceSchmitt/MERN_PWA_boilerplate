const Paths = require("./Paths");

const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: Paths.server,
  output: {
    filename: "server.bundle.js",
    path: Paths.dist,
    publicPath: Paths.dist,
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, exclude: [/node_modules/], loader: "ts-loader", options: {
      configFile: Paths.tsconfigServer
    } },],
  },
  plugins: [
    new CopyPlugin([
      { from: Paths.PackageDistJson, to: Paths.dist + 'package.json' },
    ]),
  ],
  mode: "production",
  target: "node",
};
