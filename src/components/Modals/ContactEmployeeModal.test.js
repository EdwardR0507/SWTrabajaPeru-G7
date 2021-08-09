/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import ContactEmployeeModal from "../Modals/ContactEmployeeModal";

/*Renderizado del componente ServiceModal*/
describe("ContactEmployeeModal", () => {
    it('render "ContactEmployeeModal"', () => {
      const wrapper = shallow(<ContactEmployeeModal />);
      expect(wrapper).toMatchSnapshot()
    });
  });
