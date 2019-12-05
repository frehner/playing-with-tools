const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
        }
      })
    ]
  }
}