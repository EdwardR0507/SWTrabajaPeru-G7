import ServiceDetailsCard from "./index";
import WorkerDetailsCard from "../../components/Cards/WorkerDetailsCard";
import React from "react";
import { shallow, mount, render } from "enzyme";
describe("<ServiceDetailsCard></ServiceDetailsCard>", () => {
  it('render `ServiceDetailsCard`', () => {
    const wrapper = shallow(<ServiceDetailsCard />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have an `WorkerDetailsCard` element', () => {
    const wrapper = shallow(<ServiceDetailsCard />);
    expect(wrapper.contains(<WorkerDetailsCard></WorkerDetailsCard>)).toBe(false);
  });
});