import React from 'react'
import { storiesOf } from '@storybook/react'

import TopBar from './TopBar'

storiesOf('TopBar', module)
  .add('default', () => (
    <TopBar />
  ))
