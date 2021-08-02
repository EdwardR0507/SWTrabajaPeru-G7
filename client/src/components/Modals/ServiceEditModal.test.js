/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import ServiceEditModal from "./ServiceEditModal";
/*Renderizado del componente ServiceEditModal*/
describe("ServiceEditModal", () => {
    it('render "ServiceEditModal"', () => {
      const wrapper = shallow(<ServiceEditModal />);
      expect(wrapper).toMatchSnapshot()
    });
  });
