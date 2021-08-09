/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import ClientCard from "./ClientCard";
/*Renderizado del componente WorkerCard*/
describe("<ClientCard></ClientCard>", () => {
  it('render "Client"', () => {
    const wrapper = shallow(<ClientCard />);
    expect(wrapper).toMatchSnapshot()
  });
})