/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import ServiceCard from "./ServiceCard";
/*Renderizado del componente ServiceCard*/
describe("<ServiceCard></ServiceCard>", () => {
    it('render "ServiceCard"', () => {
        const wrapper = shallow(<ServiceCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
