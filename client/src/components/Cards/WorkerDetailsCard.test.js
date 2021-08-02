/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import WorkerDetailsCard from "./WorkerDetailsCard";
/*Renderizado del componente WorkerDetailsCard*/
describe("<WorkerDetailsCard></WorkerDetailsCard>", () => {
    it('render "WorkerDetailsCard"', () => {
        const wrapper = shallow(<WorkerDetailsCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
