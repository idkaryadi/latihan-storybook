import { configure } from '@storybook/vue';

import '../src/index.css';

// automatically import all files ending in *.stories.js
function loadStories() {
  const req = require.context('../src', true, /\.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);