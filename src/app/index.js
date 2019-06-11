
import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './components/Greetings'
import TopBar from './components/TopBar'

// bootstrap component
const app = (
  <React.Fragment>
    <TopBar />
    <Greetings />
  </React.Fragment>
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))