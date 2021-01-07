const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const htmlPluginOptions = {
  filename: isDev ? 'index.html' : 'public/index.html',
  template: 'src/public/index.html',
}

let entry = {
  react: {
    import: path.resolve(__dirname, './src/App.tsx'),
  },
}
if (!isDev) {
  entry.electron = {
    import: path.resolve(__dirname, './src/main.tsx'),
  }
}

const plugins = [
  new CopyPlugin({
    patterns: [{ from: './src/public', to: 'public' }],
  }),
  new HtmlPlugin(htmlPluginOptions),
]

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist/public',
  },
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  target: isDev ? 'web' : 'electron-renderer',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-object-assign'],
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins,
}
