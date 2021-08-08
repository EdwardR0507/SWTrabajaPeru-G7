/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import ServiceModal from "./ServiceModal";
/*Renderizado del componente ServiceModal*/
describe("ServiceModal", () => {
    it('render "ServiceModal"', () => {
      const wrapper = shallow(<ServiceModal />);
      expect(wrapper).toMatchSnapshot()
    });
  });
