import { withOptions } from '@storybook/addon-options'
import { addDecorator, configure } from '@storybook/react'
import packageJson from '../package.json'

function loadStories () {
  require('../stories/index.js')
}

addDecorator(
  withOptions({
    name: 'React CSS Spinners',
    url: packageJson.repository.url,
    showAddonPanel: false
  })
)

configure(loadStories, module)
