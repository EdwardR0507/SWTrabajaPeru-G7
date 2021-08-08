/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react'
import ServiceDetailsCard from "./ServiceDetailsCard";
/*Renderizado del componente ServiceDetailsCard*/
describe("<ServiceDetailsCard></ServiceDetailsCard>", () => {
    it('render "ServiceDetailsCard"', () => {
        const wrapper = shallow(<ServiceDetailsCard />);
        expect(wrapper).toMatchSnapshot()
      });
    it("render ServiceDetailsCard with service", () => {
      const service = {
        cat_nombre: "Test Cat"
      };
      render(<ServiceDetailsCard service={service} />);
      expect(screen.getByText(/Test Cat/i)).toBeInTheDocument()
    })
}); 
 