/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import ClientCard from "./ClientCard";
/*Renderizado del componente WorkerCard*/
describe("<ClientCard></ClientCard>", () => {
  it('render "Client"', () => {
    const wrapper = shallow(<ClientCard />);
    expect(wrapper).toMatchSnapshot()
  });
})