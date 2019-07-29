import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

const Container = ({ children, className, ...otherProps }) => (
  <div className={className}>
    <Grid container spacing={3}>
      {children}
    </Grid>
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Container
