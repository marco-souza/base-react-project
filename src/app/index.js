
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'app/router'
import theme from 'app/themes/muiTheme'
import { ThemeProvider } from '@material-ui/styles'

import registerServiceWorker from './helpers/registerServiceWorker'

// bootstrap component
registerServiceWorker()

const app = (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))
