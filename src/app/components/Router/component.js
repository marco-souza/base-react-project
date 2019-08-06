import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'app/pages/Home'
import About from 'app/pages/About'

const AppRouter = ({ authKey, loading }) => {
  console.log(authKey, loading)
  if (loading.authKey) {
    return (
      <div>Loading here...</div>
    )
  }

  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Fragment>
    </Router>
  )
}

AppRouter.propTypes = {
  authKey: PropTypes.string,
  loading: PropTypes.shape({
    authKey: PropTypes.bool,
  }),
}

export default AppRouter
