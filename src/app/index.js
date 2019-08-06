import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'

import Router from 'app/components/Router'
import theme from 'app/themes/muiTheme'
import registerServiceWorker from 'app/helpers/registerServiceWorker'
import { generateStore } from 'app/redux/store'

const store = generateStore()
registerServiceWorker()

const app = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))
