import React from 'react'
import {render} from 'react-testing-library'
import Facebook from './Facebook'

describe('Facebook component', () => {
  it('Should render Facebook without problems', () => {
    const {asFragment} = render(<Facebook />)
    expect(asFragment()).toMatchSnapshot()
  })
})
