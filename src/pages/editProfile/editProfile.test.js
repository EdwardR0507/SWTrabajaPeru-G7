/*Importamos las librerias principales*/
import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom'
import EditProfile from './index';
/*Renderizado de la vista EditProfile*/
describe("<EditProfile></EditProfile>", () => {
  it('render "EditProfile"', () => {
    const history = createMemoryHistory()
    const wrapper = shallow(<Router history={history}>
      <EditProfile />
    </Router>);
    expect(wrapper).toMatchSnapshot()
  });
});