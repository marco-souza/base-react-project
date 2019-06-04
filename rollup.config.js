import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import minify from 'rollup-plugin-babel-minify'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import server from 'rollup-plugin-server'
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
    file: 'public/main.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    babel(),
    commonjs(),
    json(),
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