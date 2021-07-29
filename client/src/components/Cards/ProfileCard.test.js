/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import ProfileCard from "../../components/Cards/ProfileCard";
/*Renderizado del componente ProfileCard*/
describe("<ProfileCard></ProfileCard>", () => {
    it('render "ProfileCard"', () => {
        const wrapper = shallow(<ProfileCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
