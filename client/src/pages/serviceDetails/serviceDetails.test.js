import ServiceDetailsCard from "./index";
import ProfileCard from "../../components/Cards/ProfileCard";
import React from "react";
import { shallow, mount, render } from "enzyme";
describe("<ServiceDetailsCard></ServiceDetailsCard>", () => {
  it('render `ServiceDetailsCard`', () => {
    const wrapper = shallow(<ServiceDetailsCard />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have an `ProfileCard` element', () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper.contains(<ProfileCard></ProfileCard>)).toBe(false);
  });
});