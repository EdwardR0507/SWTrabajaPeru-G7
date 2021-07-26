import ServiceDetailsCard from "../../components/Cards/ServiceDetailsCard";
import React from "react";
import { shallow } from "enzyme";

describe("<ServiceDetailsCard></ServiceDetailsCard>", () => {
    it('render "ServiceDetailsCard"', () => {
        const wrapper = shallow(<ServiceDetailsCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
