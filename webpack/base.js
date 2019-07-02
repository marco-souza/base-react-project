import webpack from 'webpack'

import Happypack from 'happypack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import { GenerateSW } from 'workbox-webpack-plugin'

import manifest from '../src/assets/manifest'
import { getVarEnv } from './utils'

const entry = getVarEnv('SRC_PATH')
const dest = getVarEnv('BUILD_DIR')
const appHtml = getVarEnv('APP_HTML')
const appLogo = getVarEnv('APP_LOGO')
const appTitle = getVarEnv('APP_TITLE')
const appResolve = getVarEnv('APP_RESOLVE')
const assetsResolve = getVarEnv('ASSETS_RESOLVE')
const modulesResolve = getVarEnv('MODULES_RESOLVE')

export default {
  entry,
  output: {
    path: dest,
    filename: '[name].[hash].js',
  },
  resolve: {
    modules: [
      appResolve,
      assetsResolve,
      modulesResolve,
    ],
  },
  module: {
    rules: [
      // JS loader
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'happypack/loader',
        ] },

      // HTML template loader (pug)
      { test: /\.pug$/,
        use: [
          'pug-loader',
        ] },
    ],
  },

  // Plugins
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new Happypack({
      loaders: [
        { loader: 'babel-loader' },
        { loader: 'eslint-loader' },
      ],
    }),
    new HtmlWebpackPlugin({
      templateParameters: {
        title: appTitle
      },
      template: appHtml,
    }),
    // Avoid to import React to use JSX syntax
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
    new FaviconsWebpackPlugin(appLogo),
    new WebpackPwaManifest(manifest),
    new GenerateSW({
      swDest: 'sw.js',
      skipWaiting: true,
    }),
  ],

  // Optimizations
  optimization: {
    removeAvailableModules: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      hidePathInfo: false,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendors: {
          test: /node_modules/,
        },
      },
    },
  },
}
