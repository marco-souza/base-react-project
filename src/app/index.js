
import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './components/Greetings'
import TopBar from './components/TopBar'
import theme from '../theme/muiTheme'
import { ThemeProvider } from '@material-ui/styles';

// bootstrap component
const app = (
  <ThemeProvider theme={theme}>
      <TopBar />
      <Greetings />
  </ThemeProvider>
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))
