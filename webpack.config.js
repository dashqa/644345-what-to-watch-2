const path = require(`path`);
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1338,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [`.js`, `.jsx`],
    alias: {
      "@pages": path.resolve(__dirname, `src/components/pages`),
      "@partials": path.resolve(__dirname, `src/components/partials`),
      "@hocs": path.resolve(__dirname, `src/hocs`),
      "@store": path.resolve(__dirname, `src/store`),
      "@reducers": path.resolve(__dirname, `src/reducers`),
      "@selectors": path.resolve(__dirname, `src/reducers/selectors`),
      "@api": path.resolve(__dirname, `src/api`),
      "@utils": path.resolve(__dirname, `src/utils/utils.js`),
      "@constants": path.resolve(__dirname, `src/utils/constants.js`)
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: [`es-us`],
    }),
  ],
  devtool: `source-map`,
};
