import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base'

import { getVarEnv } from './utils'

const dest = getVarEnv('BUILD_DIR')

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    noEmitOnErrors: true,
    concatenateModules: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: dest,
    watchContentBase: true,
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

export { config }
