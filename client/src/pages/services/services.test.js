/*Importamos las librerias principales*/
import React from "react";
import ManageServices from "./index";
import { shallow } from "enzyme";
/*Renderizado de la vista Social Profile*/
describe("<ManageServices></ManageServices>", () => {
  it('render `ManageServices`', () => {
    const wrapper = shallow(<ManageServices />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have an `ProfileCard` element', () => {
    const wrapper = shallow(<ManageServices />);
    expect(wrapper.contains(<ManageServices></ManageServices>)).toBe(true);
  });
});