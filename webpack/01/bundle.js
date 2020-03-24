/**
 * 作为入口进行webpack构建
 */
const options = require('./webpack.config')
const Webpack = require('./lib/webpack')

new Webpack(options).run()
