const Paths = require("../../config/Paths");

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
    rules: [{ test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader" }],
  },
  mode: "production",
  target: "node",
};
