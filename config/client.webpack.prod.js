const Paths = require("./Paths");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

module.exports = {
  entry: Paths.client,
  output: {
    path: Paths.clientDist,
    filename: "client.bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: Paths.HTMLTemplate,
      inject: true,
    }),
    new AppManifestWebpackPlugin({
      logo: "./assets/favicon-512.png",
      statsFilename: "iconstats.json",
      persistentCache: false,
      output: "./",
    }),

    new ImageminPlugin({
      disable: false,
      pngquant: {
        quality: "95-100",
      },
    }),
  ],

  mode: "production",
};
