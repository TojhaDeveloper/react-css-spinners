import React from 'react'
import TestRenderer from 'react-test-renderer' // ES6
import { Ripple } from '..'

it('renders correctly', () => {
  const tree = TestRenderer.create(<Ripple />).toJSON()
  expect(tree).toMatchSnapshot()
})
