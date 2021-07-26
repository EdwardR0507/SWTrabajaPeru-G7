import InputField from "../../components/TextFields/InputField.jsx";
import React from "react";
import { shallow } from "enzyme";

describe("InputField", () => {
  it('render "InputField"', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toMatchSnapshot()
  });
});
