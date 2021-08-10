/*Importamos las librerias principales*/
import React from 'react';
import { shallow } from 'enzyme';
import Table from "@material-ui/core/Table";
import CustomizedTables from '../../layouts/Table/index';
/*Renderizado de la vista SignUp*/
describe("<CustomizedTables></CustomizedTables>", () => {
  it('render "CustomizedTables"', () => {
    const wrapper = shallow(<CustomizedTables />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have the `Table` in "CustomizedTables"', () => {
    const wrapper = shallow(<CustomizedTables />);
    expect(wrapper.containsMatchingElement(<Table></Table>)).toBe(true);
  }); 
});