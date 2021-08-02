/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import NestedList from "./NestedList";
/*Renderizado del componente NestedList*/
describe("NestedList", () => {
  it('render "NestedList"', () => {
    const wrapper = shallow(<NestedList />);
    expect(wrapper).toMatchSnapshot()
  });
});
