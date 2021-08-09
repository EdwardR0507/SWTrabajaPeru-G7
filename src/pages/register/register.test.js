/*Importamos las librerias principales*/
import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './index';
import NavBar from '../../layouts/NavBar';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react'
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
});
