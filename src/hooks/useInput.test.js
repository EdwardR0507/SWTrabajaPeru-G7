/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import UseInput from "./useInput";
import { useInput } from "./useInput";
import { render, screen, fireEvent } from '@testing-library/react';
/*Renderizado del componente UseInput*/
describe("UseInput", () => {
  it('render "UseInput"', () => {
    const wrapper = shallow(<UseInput />);
    expect(wrapper).toMatchSnapshot()
  });
  it("hook works", () => {
    const { value: test, bind: bindTest} = useInput("");
    render(<input {...bindTest} aria-label="Test"/>);
    fireEvent.change(input, {target: {value: '23'}})
    expect(input.value).toBe('23')
  })
});
