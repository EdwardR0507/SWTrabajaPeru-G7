import SignUp from './index';
import NavBar from "./index"
import React from 'react';
import { shallow } from 'enzyme';

describe("<SignUp></SignUp>", () => {
  it('should have the `tyledTypography` "Registrarse"', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.containsMatchingElement(<NavBar></NavBar>)).toBe(false);
  });
  
});