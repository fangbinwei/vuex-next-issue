/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  externals: {
    vue: 'Vue'
  }
};