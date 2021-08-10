/*Importamos las librerias principales*/
import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './index';
import NavBar from '../../layouts/NavBar';

/*Renderizado de la vista SignUp*/
describe("<SignUp></SignUp>", () => {
  it('render "SignUp"', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have the `NavBar` in "Register"', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.containsMatchingElement(<NavBar></NavBar>)).toBe(true);
  });
  it('handleClose test', () => {
    const wrapper = shallow(<SignUp />);
    const button = wrapper.find({ role: "close" });
    button.simulate("click");
    expect(wrapper.state().open).toBe(false)
  })
});
