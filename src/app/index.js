
import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './components/Greetings'


// bootstrap component
const app = (
  <Greetings />
)

// Bind component to DOM
ReactDOM.render(app, document.getElementById('root'))
