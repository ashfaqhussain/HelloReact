var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

// Inject bundle js filename into generated html page
const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './app/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const config = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, './app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    sourceMapFilename: 'index_bundle.js.map'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          include: path.resolve(__dirname, './app'),
          loaders: ['react-hot', 'babel-loader']
      },
      { test: /\.css$/, loaders: [ 'style', 'css'] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
      { test: /\.(woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000" },
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file' }
    ]
  },
  devtool: 'source-map',
  plugins: [htmlWebpackPluginConfig]
}

if (config.debug) {
  config.entry.push('webpack-dev-server/client?http://127.0.0.1:8080')
  config.entry.push('webpack/hot/only-dev-server')
}
else {
  // Defining this makes React faster in production
  const webpackDefinePlugin = new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  })
  config.plugins.push(webpackDefinePlugin)
}

module.exports = config