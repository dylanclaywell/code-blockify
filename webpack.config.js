const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    electron: {
      import: path.resolve(__dirname, "./src/main.tsx"),
    },
    react: {
      import: path.resolve(__dirname, "./src/App.tsx"),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  target: "electron-renderer",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.ts|tsx$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-object-assign"],
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
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
