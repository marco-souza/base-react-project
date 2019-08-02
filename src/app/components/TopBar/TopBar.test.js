import React from 'react'
import { shallow } from 'enzyme'

import TopBar from './TopBar'

describe('components/TopBar', () => {
  it('should render My awesome PWA', () => {
    const wrapper = shallow(<TopBar />)

    expect(wrapper.text()).toContain('My awesome PWA')
  })
})
