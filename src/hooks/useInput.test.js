/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import UseInput from "./useInput";
import { useInput } from "./useInput";
import { render, fireEvent } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
/*Renderizado del componente UseInput*/
describe("UseInput", () => {
  it('render "UseInput"', () => {
    const UseInput = shallow(<UseInput />);
    expect(UseInput).toMatchSnapshot()
  });
  it("hook works", () => {
    const { value: test, bind: bindTest} = useInput("");
    render(<input {...bindTest} aria-label="Test"/>);
    fireEvent.change(input, {target: {value: '23'}})
    expect(input.value).toBe('23')
  })
it('should render handleDateRange function', () => {
    const UseInput = jest.fn();
    const render = shallow(<Assignment />);
    
    act(() => {
      render.find(SelectDropdown).first().simulate(UseInput, { target: { value: 'A' } });
    });
    expect(UseInput).toBeCalledWith('A');
    expect(render).toMatchSnapshot();
    render.unmount();
  });
});
