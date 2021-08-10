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
  
  /* 
  it("should render modal window with TAC content", done => {
    act(() => {
      component.update();
    });
    // check the Modal is closed
    expect(component.find(Modal).props().open).toBe(false);
    // check primarybutton is open when user press a button
    act(() => {
      component.find('PrimaryButton').simulate('click', {
        currentTarget: {
          name: "+SOLICITAR"
        }
      });
    });
    component.update();
    expect(component.find('PrimaryButton').props().open).toBe(true);
    // Now how do I close here? *******************************
    act(() => {
      component.find('SecondaryButton').simulate('click', {
        currentTarget: {
          name: 'CANCELAR'
        }
      });
    });
    component.update();
    expect(component.find('SecondaryButton').props().open).toBe(false);
    done();
  });
  */
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
