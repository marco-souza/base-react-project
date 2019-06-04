import React from 'react'
import { shallow } from 'enzyme'

import Greetings from './Greetings'

describe('components/Greetings', () => {
  it('should render Hallo', () => {
    const wrapper = shallow(<Greetings />)

    expect(wrapper.text()).toBe('Hallo')
  })
})
