'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


describe('The App', () => {
  it('loads without dying', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});