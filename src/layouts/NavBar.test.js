/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react-hooks'
import { shallow } from "enzyme";
import NavBar from "./NavBar";
/*Renderizado del componente SideBar*/
describe("NavBar", () => {
  it('render "NavBar"', () => {
    const wrapper = shallow(<NavBar />);
    console.log(wrapper)
    expect(wrapper).toMatchSnapshot()
  });
  it("anchor State ", () => {
    const { result } = renderHook(()=>(<div>Hola</div>));
    //console.log(result.current)
  })
});
