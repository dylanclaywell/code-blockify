const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "./src/main.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack.bundle.js",
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/public", to: "public" }],
    }),
  ],
}
