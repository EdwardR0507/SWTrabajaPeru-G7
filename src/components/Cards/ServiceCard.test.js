/*Importamos las librerias principales*/
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import ServiceCard from "./ServiceCard"

/*Renderizado del componente ServiceCard*/
describe("<ServiceCard></ServiceCard>", () => {
  it('render "ServiceCard"', () => {
    const wrapper = shallow(<ServiceCard />);
    expect(wrapper).toMatchSnapshot()
  });
  it('render ServiceCard with user', () => {
    const service = {
      cat_nombres: "Test Cat",
      us_nombres: "Test Us",
    }
    render(<ServiceCard service={service} />);
    expect(screen.getByText(/Test Cat/i)).toBeInTheDocument()
  })
  it('Redirects to correct URL on click', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        push: mockHistoryPush, 
      }),
    }));
    const service = {
      cat_nombres: "Test Cat",
      us_nombres: "Test Us",
    }
    const { getByRole } = render(
      <MemoryRouter>
        <ServiceCard service={service} token="12345"/>
      </MemoryRouter>,
    );
    fireEvent.click(getByRole('redirect'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/serviceDetails');
  });
})
