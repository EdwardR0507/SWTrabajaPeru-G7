/*Importamos las librerias principales*/
import React from 'react';
import { shallow } from 'enzyme';
import {SignUp} from './index';
/*Renderizado de la vista SignUp*/
describe("<SignUp></SignUp>", () => {
  it('render "SignUp"', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot()
  });
  
});
