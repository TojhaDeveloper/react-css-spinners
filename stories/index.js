import { storiesOf } from '@storybook/react'
import React from 'react'
import { Grid, Ripple, Spinner } from '../src'

storiesOf('Spinners', module)
  .add('Grid', () => <Grid />)
  .add('Spinner', () => <Spinner />)
  .add('Ripple', () => <Ripple />)
