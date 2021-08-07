/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react'
import ProfileServiceCard from "./ProfileServiceCard";
/*Renderizado del componente ProfileServiceCard*/
describe("<ProfileServiceCard></ProfileServiceCard>", () => {
    it('render "ServiceDetailsCard"', () => {
        const wrapper = shallow(<ProfileServiceCard />);
        expect(wrapper).toMatchSnapshot()
      });
    it("render Service", () => {
      const service = {
        cat_name: "Test Cat"
      }
      render(<ProfileServiceCard service={service} />)
      expect(screen.getByText(/Test Cat/i)).toBeInTheDocument()
    })
});
