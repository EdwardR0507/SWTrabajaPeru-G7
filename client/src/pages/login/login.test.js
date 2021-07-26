import SignIn from "./index";
import NavBar from "./index"
import React from "react";
import { shallow, mount, render } from "enzyme";
describe("<SignIn></SignIn>", () => {
  it('should have the `tyledTypography` "Iniciar Sesión"', async () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper.containsMatchingElement(<NavBar></NavBar>)).toBe(true);
  });
});
