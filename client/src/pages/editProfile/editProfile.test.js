import EditProfile from './index';
import NavBar from "./index"
import React from 'react';
import { shallow } from 'enzyme';

describe("<EditProfile></EditProfile>", () => {
  it('should have the `EditProfile` in "IniciarSesión"', () => {
    const wrapper = shallow(<EditProfile />);
    expect(wrapper.containsMatchingElement(<EditProfile></EditProfile>)).toBe(false);
  });
  
});