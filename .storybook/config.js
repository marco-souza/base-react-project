import { addDecorator, addParameters, configure } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';

import { viewports } from './viewports';

addDecorator(withKnobs);
addDecorator(jsxDecorator);

addParameters({
  viewport: { viewports },
  defaultViewport: 'Desktop',
});

const req = require.context('../src/app', true, /.stories.jsx?$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
