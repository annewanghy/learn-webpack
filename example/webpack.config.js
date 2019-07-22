module.exports = {
  mode: "production",
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
