import React from 'react'

import Button from 'app/components/core/Button'
import Container from 'app/components/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

import Block from './Block'

const Header = styled.h2`
  padding-top: 200px;
  padding-bottom: 80px;
`

const CallToActionContainer = () => (
  <Block>
    <Container>
      <Grid item xs={12}>
        <Typography variant='h2' component={Header}>
          Your new amazing web page starts right here!
        </Typography>

        <Button>
          Check our feature
        </Button>
      </Grid>
    </Container>
  </Block>
)

export default CallToActionContainer
