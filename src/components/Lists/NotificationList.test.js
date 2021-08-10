import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import NotificationList from "./NotificationList";

describe("<NotificationList />", () => {
    it('render "NotificationList"', () => {
        const wrapper = shallow(<NotificationList />);
        expect(wrapper).toMatchSnapshot()
      }); 
      it("test handleToogle", () => {
        const wrapper = shallow(<NotificationList />);
        const button = wrapper.find({role: "toggle"})
        const open = wrapper.find({role: "toggle"})
        button.simulate("click")
        expect(open.props("aria-controls")).toBe(true)
      })
      it("test handleClose", () => {
        const wrapper = shallow(<NotificationList />);
        const button = wrapper.find({role: "close"})
        const open = wrapper.find({role: "toggle"})
        button.simulate("click")
        expect(open.props("aria-controls")).toBe(false)
      })
}) 