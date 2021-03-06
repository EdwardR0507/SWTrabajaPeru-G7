/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import { render, screen } from '@testing-library/react'
import WorkerCard from "./WorkerCard";
/*Renderizado del componente WorkerCard*/
describe("<WorkerCard></WorkerCard>", () => {
  it('render "WorkerCard"', () => {
    const wrapper = shallow(<WorkerCard />);
    expect(wrapper).toMatchSnapshot()
  });
  it('render WorkerCard with user', () => {
    const worker = {
      us_nombres: "Test Name",
      us_celular: "987654321",
    }
    render(<WorkerCard worker={worker} />);
    expect(screen.getByText(/Test Name/i)).toBeInTheDocument()
  })
  it('render Calification 0', () => {
    const worker = {
      us_calificacion: 0.000
    }
    render(<WorkerCard worker={worker} />);
    expect(screen.getByText(/Sin Calificación/i)).toBeInTheDocument()
  })
}); 
