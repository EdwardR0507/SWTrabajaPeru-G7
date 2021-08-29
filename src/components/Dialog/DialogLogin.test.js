/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import DialogLogin from "./DialogLogin";

describe("<DialogLogin />", () => {
  it("render DialogLogin", () => {
    const wrapper = shallow(<DialogLogin />);
    expect(wrapper).toMatchSnapshot()
  })
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