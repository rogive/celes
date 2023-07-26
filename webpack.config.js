const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require('path');

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve( __dirname, 'dist' ),
    publicPath: '/',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, 'public/'),
    hot: true,
    host: 'localhost',
    port: 3000,
  },
  module: {
    rules: [
      { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.(png|j?g|svg|gif)?$/, use: 'file-loader'},
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
       template: path.resolve( __dirname, 'public/index.html' ),
       filename: 'index.html'
    })
 ],
};