/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react'
import ProfileCard from "../../components/Cards/ProfileCard";
/*Renderizado del componente ProfileCard*/
describe("<ProfileCard></ProfileCard>", () => {
    it('render "ProfileCard"', () => {
        const wrapper = shallow(<ProfileCard />);
        expect(wrapper).toMatchSnapshot()
      });
    
    it('render ProfileCard with user', () => {
      const user = {
        us_nombres: "Test Name",
        us_celular: "987654321",
      }
      render(<ProfileCard user={user}/>);
      expect(screen.getByText(/Test Name/i)).toBeInTheDocument()
    })
});
