
import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from 'app/components/Greetings'
import TopBar from 'app/components/TopBar'
import theme from 'app/themes/muiTheme'
import { ThemeProvider } from '@material-ui/styles'

import registerServiceWorker from './helpers/registerServiceWorker'

// bootstrap component
registerServiceWorker()

const app = (
  <ThemeProvider theme={theme}>
    <TopBar />
    <Greetings />
  </ThemeProvider>
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))
