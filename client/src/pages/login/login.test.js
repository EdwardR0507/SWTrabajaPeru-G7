import SignIn from './index';
import NavBar from "./index"
import React from 'react';
import { shallow } from 'enzyme';

describe("<SignIn></SignIn>", () => {
  it('should have the `NavBar` in "IniciarSesión"', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.containsMatchingElement(<NavBar></NavBar>)).toBe(false);
  });
  
});