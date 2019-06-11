import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Button } from '@storybook/react/demo'

import Greetings from './Greetings'

storiesOf('Greetings', module)
  .add('default', () => (
    <Greetings />
  ))

storiesOf('Button', module)
  .add('with text', () => {
    const name = text('Name', 'doido')

    return (
      <Button>Hello {name}</Button>
    )
  })
  .add('with emoji', () => (
    <Button><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></Button>
  ))
