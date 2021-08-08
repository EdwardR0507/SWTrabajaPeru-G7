/*Importación de librerias y paquetes necesarios*/
import React from 'react';
import SignIn from './index';
import NavBar from '../../layouts/NavBar';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom'
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react'
/*Renderizado de la vista Login*/
describe("<SignIn></SignIn>", () => {
  it('render "Registrarse"', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have the `NavBar` in "IniciarSesión"', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.containsMatchingElement(<NavBar></NavBar>)).toBe(true);
  });
  it("calls the onSubmit function", async () => {
    const history = createMemoryHistory();
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(<Router history={history}>
      <SignIn onSubmit={mockOnSubmit} />
    </Router>
    );
    await act(async () => {
      fireEvent.change(getByLabelText("Correo electrónico"), { target: { value: "email@test.com" } });
      fireEvent.change(getByLabelText("Contraseña"), { target: { value: "123456789" } });
    })
    await act(async () => {
      fireEvent.click(getByRole("button"))
    })
  })
});