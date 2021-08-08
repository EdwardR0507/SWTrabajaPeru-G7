/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import UseInput from "./useInput";
/*Renderizado del componente UseInput*/
describe("UseInput", () => {
  it('render "UseInput"', () => {
    const wrapper = shallow(<UseInput />);
    expect(wrapper).toMatchSnapshot()
  });
});
