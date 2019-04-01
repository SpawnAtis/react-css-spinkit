import React from 'react'
import {render} from 'react-testing-library'
import Circle from './Circle'

describe('Circle component', () => {
  it('Should render Circle without problems', () => {
    const {asFragment} = render(<Circle />)
    expect(asFragment()).toMatchSnapshot()
  })
})
