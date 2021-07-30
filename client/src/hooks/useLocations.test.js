/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import UseLocations from "./useLocations";
/*Renderizado del componente UseLocations*/
describe("UseLocations", () => {
  it('render "UseLocations"', () => {
    const wrapper = shallow(<UseLocations />);
    expect(wrapper).toMatchSnapshot()
  });
});
