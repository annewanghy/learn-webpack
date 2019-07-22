module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "force-strict-loader",
          options: {
            sourceMap: true
          }
        }
      }
    ]
  }
};
