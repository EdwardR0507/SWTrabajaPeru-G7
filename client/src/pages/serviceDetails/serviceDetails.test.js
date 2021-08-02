/*Importamos las librerias principales*/
import React from "react";
import ServiceDetails from "./index";
import { shallow } from "enzyme";
/*Renderizado de la vista Service Details*/
describe("<ServiceDetails></ServiceDetails>", () => {
  it('render `ServiceDetails`', () => {
    const wrapper = shallow(<ServiceDetails />);
    expect(wrapper).toMatchSnapshot()
  });
});