/*Importamos las librerias principales*/
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { shallow, mount } from "enzyme";
import DialogLogin from "./DialogLogin";

describe("<DialogLogin />", () => {
  it("render DialogLogin", () => {
    const wrapper = shallow(<DialogLogin />);
    expect(wrapper).toMatchSnapshot()
  })
  /*it("test handle open", () => {
      const { result, getByRole } = render(
          <DialogLogin />
      );
      fireEvent.click(getByRole("open"));
      expect(result.current.open).toBe(true);
  })
  it("test handle close", () => {
      jest.mock('react-router-dom', () => ({
          ...jest.requireActual('react-router-dom'),
          useHistory: () => ({
            push: mockHistoryPush, 
          }),
        }));
      const { result, getByRole } = renderHook(
          <DialogLogin />
      );
      fireEvent.click(getByRole("close"));
      expect(result.current.open).toBe(false);
  })*/
  it('Redirects to correct URL on click', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush,
      }),
    }));
    const wrapper = shallow(<DialogLogin />);
    const button = wrapper.find({ role: "redirect" });
    button.simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith('/signin');
  });
  it('handleClose test', () => {
    const wrapper = shallow(<DialogLogin />);
    const button = wrapper.find({ role: "open-button" });
    button.simulate("click");
    expect(wrapper.state().open).toBe(true)
  })
  it('handleOpen test', () => {
    const wrapper = shallow(<DialogLogin />);
    const button = wrapper.find({ role: "close-button" });
    button.simulate("click");
    expect(wrapper.state().open).toBe(false)
  })
})