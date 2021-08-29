/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ContactEmployeeModal from "./ContactEmployeeModal";
import { shallow } from "enzyme/build";
/*Renderizado del componente ContactModal*/
describe("<ContactEmployeeModal />", () => {
    it('render "ContactEmployeeModal"', () => {
        const wrapper = shallow(<ContactEmployeeModal />);
        expect(wrapper).toMatchSnapshot()
      });

  it('renders without crashing ContactEmployeeModal', () => {
    const 
        handleClose = jest.fn(),
        handleOpen = jest.fn(),
        open = jest.fn();

    const component = shallow(<ContactEmployeeModal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose} />);

     component.find('PrimaryButton[name="+SOLICITAR"]').simulate('click');
     expect(handleOpen).toHaveBeenCalledTimes(0);
     component.find('SecondaryButton[name="CANCELAR"]').simulate('click');
     expect(handleClose).toHaveBeenCalledTimes(1);
});

});
