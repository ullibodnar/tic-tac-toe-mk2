import React from 'react'
import { shallow } from 'enzyme'

import Board from '.'

describe('components:Board', () => {
  it('renders the Board with the proper stylesm', () => {
    expect(toJson(shallow(<Board />))).toMatchSnapshot()
  })
})
