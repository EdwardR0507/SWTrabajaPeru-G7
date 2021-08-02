/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import UseFilterSelect from "./useFilterSelect";
/*Renderizado del componente UseFilterSelect*/
describe("UseFilterSelect", () => {
  it('render "UseFilterSelect"', () => {
    const wrapper = shallow(<UseFilterSelect />);
    expect(wrapper).toMatchSnapshot()
  });
});
