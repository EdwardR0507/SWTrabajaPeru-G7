import React from "react";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react'
import TableServices from './TableServices';

describe("<TableServices />", () => {
    it("render TableServices", () => {
        const serviceData = []
        const wrapper = shallow(<TableServices serviceData={serviceData}/>);
        expect(wrapper).toMatchSnapshot()
    });
    it("render with service", () => {
        const serviceData = [{
            cat_nombre: "Test 1"
        },{
            cat_nombre: "Test 2"
        }]
        render(<TableServices serviceData={serviceData} />)
        expect(screen.getByText(/Test 1/i)).toBeInTheDocument()
        expect(screen.getByText(/Test 2/i)).toBeInTheDocument()
    })
})