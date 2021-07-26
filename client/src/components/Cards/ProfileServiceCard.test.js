import ProfileServiceCard from "./ProfileServiceCard";
import React from "react";
import { shallow } from "enzyme";

describe("<ProfileServiceCard></ProfileServiceCard>", () => {
    it('render "ServiceDetailsCard"', () => {
        const wrapper = shallow(<ProfileServiceCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
