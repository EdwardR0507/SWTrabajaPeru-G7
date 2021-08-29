/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import DialogDelete from "./DialogDelete"

describe(("<DialogDelete />"), () => {
    it("render DialogLogin", () => {
        const wrapper = shallow(<DialogDelete/>);
        expect(wrapper).toMatchSnapshot()
    })
    it('handleClose test', () => {
        const wrapper = shallow(<DialogDelete />);
        const button = wrapper.find({ role: "open-button" });
        button.simulate("click");
        expect(wrapper.state().open).toBe(true)
      })
      it('handleOpen test', () => {
        const wrapper = shallow(<DialogDelete />);
        const button = wrapper.find({ role: "close-button" });
        button.simulate("click");
        expect(wrapper.state().open).toBe(false)
      })
}) 