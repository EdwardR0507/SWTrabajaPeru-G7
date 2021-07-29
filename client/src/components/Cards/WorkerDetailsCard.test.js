import  WorkerDetailsCard from "../../components/Cards/WorkerDetailsCard";
import React from "react";
import { shallow } from "enzyme";

describe("<WorkerDetailsCard></WorkerDetailsCard>", () => {
    it('render "WorkerDetailsCard"', () => {
        const wrapper = shallow(<WorkerDetailsCard />);
        expect(wrapper).toMatchSnapshot()
      });
});