import { configure, addParameters } from '@storybook/react';
import packageJson from '../package';

addParameters({
  options: {
    name: 'react-css-spinkit',
    url: packageJson.repository.url,
    showPanel: true,
    // more configuration here
  },
});

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);
