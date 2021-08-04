/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import HeadingBar from "./HeadingBar";
/*Renderizado del componente IHeadingBar*/
describe("HeadingBar", () => {
  it('render "HeadingBar"', () => {
    const wrapper = shallow(<HeadingBar />);
    expect(wrapper).toMatchSnapshot()
  });
});