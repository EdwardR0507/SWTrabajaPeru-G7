/*Importación de librerias y paquetes necesarios*/
import {SignIn, NavBar} from './index';
import React from 'react';
import { shallow } from 'enzyme';
/*Renderizado de la vista Login*/
describe("<SignIn></SignIn>", () => {
  it('render "Registrarse"', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have the `NavBar` in "IniciarSesión"', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.containsMatchingElement(<NavBar></NavBar>)).toBe(false);
  });
  
});