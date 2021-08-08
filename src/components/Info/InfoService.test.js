/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks'
import InfoService from "./InfoService";
/*Renderizado del componente InfoService*/
describe("<InfoService />", () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush, 
    }),
  }));
  const name = "nombre",description = "descripcion";
  let component;
  beforeEach(() => {
    component = render(<InfoService name={name} description={description} />);
  });
  test("renders InfoService", () => {
    component.getByText(name);
  });
  test("test handleEdit", () => {
    component.getByText(descripcion)
  })
});
