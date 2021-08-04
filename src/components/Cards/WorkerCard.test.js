/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import WorkerCard from "./WorkerCard";
/*Renderizado del componente WorkerCard*/
describe("<WorkerCard></WorkerCard>", () => {
    it('render "WorkerCard"', () => {
        const wrapper = shallow(<WorkerCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
