import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'app/pages/Home'
import About from 'app/pages/About'

const AppRouter = () => (
  <Router>
    <Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Fragment>
  </Router>
)

export default AppRouter
