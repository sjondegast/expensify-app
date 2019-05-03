import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('should test something', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

});



