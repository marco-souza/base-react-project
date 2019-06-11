import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import minify from 'rollup-plugin-babel-minify'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import server from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { config } from 'dotenv'

// Load .env
const shouldLoadProd = process.env.NODE_ENV === 'production'

config({ path: './config/.dev.env' })
shouldLoadProd && config({ path: './config/.prod.env' })

const {
  NODE_ENV,
  SRC_PATH,
  HTML_ROOT,
  BUILD_DIR,
} = process.env

const dev = NODE_ENV !== 'production'

export default {
  input: SRC_PATH,
  output: {
    dir: 'public',
    format: 'esm'
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    json(),
    babel(),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'react-is': [ 'ForwardRef' ],
        'react-dom': [ 'findDOMNode' ],
        'prop-types': [
          'func',
          'bool',
          'element',
          'elementType',
          'oneOfType'
        ],
        'react': [
          'isValidElement',
          'isValidElementType',
          'cloneElement',
          'Children'
        ],
      },
    }),
    htmlTemplate({
      template: HTML_ROOT,
      target: 'index.html',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    !dev && minify(),
    dev && server(BUILD_DIR),
    dev && livereload(),
  ]
}