/*Importamos las librerias principales*/
import React from 'react';
import { shallow } from 'enzyme';
import {EditProfile} from './index';
/*Renderizado de la vista EditProfile*/
describe("<EditProfile></EditProfile>", () => {
  it('render "EditProfile"', () => {
    const wrapper = shallow(<EditProfile />);
    expect(wrapper).toMatchSnapshot()
  });
  
});