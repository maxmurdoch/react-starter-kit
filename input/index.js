import { createElement } from 'react';
import { render } from 'react-dom';
import About from './about/About';

render(
  createElement(About, null),
  document.getElementById('root')
);
