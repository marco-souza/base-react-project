import merge from 'webpack-merge'
import baseConfig from './base'

const config = merge(baseConfig, {
  mode: 'production',
})

export { config }
