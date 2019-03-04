import React from 'react'
import TestRenderer from 'react-test-renderer' // ES6
import { Spinner } from '..'

it('renders correctly', () => {
  const tree = TestRenderer.create(<Spinner />).toJSON()
  expect(tree).toMatchSnapshot()
})
