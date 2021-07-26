import ProfileCard from "../../components/Cards/ProfileCard";
import React from "react";
import { shallow } from "enzyme";

describe("<ProfileCard></ProfileCard>", () => {
    it('render "ProfileCard"', () => {
        const wrapper = shallow(<ProfileCard />);
        expect(wrapper).toMatchSnapshot()
      });
});
