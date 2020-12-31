const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

let entry = {
  react: {
    import: path.resolve(__dirname, './src/App.tsx'),
  },
}

let target = 'electron-renderer'
let htmlPluginOptions = {}

if (process.env.NODE_ENV === 'development') {
  target = 'web'

  htmlPluginOptions = {
    template: 'src/public/index.html',
  }
} else {
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
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  target,
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
