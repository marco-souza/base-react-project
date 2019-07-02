import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopBar from 'app/components/TopBar'
import Home from 'app/scenes/Home'
import About from 'app/scenes/About'

const AppRouter = () => (
  <Router>
    <Fragment>
      <TopBar />

      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </Fragment>
  </Router>
)

export default AppRouter
