'use strict';

import React from 'react';
import renderer from 'react-test-renderer';

import Counter from './counter';


describe('The Count(er)', () => {
  it('renders shallowly like fucking life', () => {
    let counter = shallow(<Counter/>);
    expect(counter.find('section').exists()).toBe(true);
  });

  it('mounts without props and does counting', () => {
    let counter = mount(<Counter/>);
    let buttonUp = counter.find('.down');
    let buttonDown = counter.find('.up');
    let countText = counter.find('span')

    expect(buttonUp.exists()).toBe(true);
    expect(buttonDown.exists()).toBe(true);
    
    expect(counter.find('span').exists()).toBe(true);

    buttonUp.simulate('click');
    expect(countText.text()).toBe('-1');

    buttonDown.simulate('click');
    expect(countText.text()).toBe('0');

  });
});