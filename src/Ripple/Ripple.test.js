import React from 'react'
import {render} from 'react-testing-library'
import Ripple from './Ripple'

describe('Ripple component', () => {
  it('Should render Ripple without problems', () => {
    const {asFragment} = render(<Ripple />)
    expect(asFragment()).toMatchSnapshot()
  })
})
