import React from 'react'
import {render} from 'react-testing-library'
import Ring from './Ring'

describe('Ring component', () => {
  it('Should render Ring without problems', () => {
    const {asFragment} = render(<Ring />)
    expect(asFragment()).toMatchSnapshot()
  })
})
