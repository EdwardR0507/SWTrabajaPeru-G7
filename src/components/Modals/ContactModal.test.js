/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { createMount } from "@material-ui/core/test-utils";
import ContactModal from "./ContactModal";
import PrimaryButton from "../Buttons/PrimaryButton"
import { Modal } from "@material-ui/core";
import SecondaryButton from "../Buttons/SecondaryButton";
import { shallow } from "enzyme/build";
/*Renderizado del componente ContactModal*/
describe("<ContactModal />", () => {
  const name = "Test";
  let component;
  let componentMount = createMount();
  act(() => {
    component = componentMount(<ContactModal />);
  });
  beforeEach(() => {
    component = render(<ContactModal name={name} />);
  });
  test("renders ContactModal", () => {
    component.getByText(name);
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
  it('renders without crashing ContactModal', () => {
    const 
        handleClose = jest.fn(),
        handleOpen = jest.fn(),
        open = jest.fn();

    const component = shallow(<ContactModal
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose} />);

     component.find('PrimaryButton[name="Ver Más"]').simulate('click');
     expect(handleOpen).toHaveBeenCalledTimes(0);
     component.find('SecondaryButton[name="CANCELAR"]').simulate('click');
     expect(handleClose).toHaveBeenCalledTimes(1);
});

});