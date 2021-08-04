/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import ProfileServiceCard from "./ProfileServiceCard";
/*Renderizado del componente ProfileServiceCard*/
describe("<ProfileServiceCard></ProfileServiceCard>", () => {
    it('render "ServiceDetailsCard"', () => {
        const wrapper = shallow(<ProfileServiceCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
