import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test('should test something', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
});



