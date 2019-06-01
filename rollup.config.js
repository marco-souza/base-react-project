import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import run from 'rollup-plugin-run'
import minify from 'rollup-plugin-babel-minify'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { config } from 'dotenv'

config({
  path: './.dev.env',
})

const dev = process.env.NODE_ENV !== 'production'
const input = process.env.SRC_PATH || './src/app/index.js'
const htmlRoot = process.env.HTML_ROOT || './src/app/index.html'

export default {
  input,
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
      template: htmlRoot,
      target: 'index.html',
    }),
    !dev && minify(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    })
  ]
}