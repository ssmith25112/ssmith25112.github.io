var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: 'dist',
            name: '[path][name].[ext]'
          },
        },
      ],
    }]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
}