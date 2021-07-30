/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import ServiceDetailsCard from "./ServiceDetailsCard";
/*Renderizado del componente ServiceDetailsCard*/
describe("<ServiceDetailsCard></ServiceDetailsCard>", () => {
    it('render "ServiceDetailsCard"', () => {
        const wrapper = shallow(<ServiceDetailsCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
