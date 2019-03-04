import React from 'react'
import TestRenderer from 'react-test-renderer' // ES6
import { Grid } from '..'

it('renders correctly', () => {
  const tree = TestRenderer.create(<Grid />).toJSON()
  expect(tree).toMatchSnapshot()
})
