import SocialProfile from "./index";
import ProfileCard from "../../components/Cards/ProfileCard";
import React from "react";
import { shallow, mount, render } from "enzyme";
describe("<SocialProfile></SocialProfile>", () => {
  it('render `ProfileCard`', () => {
    const wrapper = shallow(<SocialProfile />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have an `ProfileCard` element', () => {
    const wrapper = shallow(<SocialProfile />);
    expect(wrapper.contains(<ProfileCard></ProfileCard>)).toBe(true);
  });
});
