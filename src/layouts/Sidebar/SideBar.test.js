/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import SideBar from "./SideBar";
/*Renderizado del componente SideBar*/
describe("SideBar", () => {
  it('render "SideBar"', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper).toMatchSnapshot()
  });
});
