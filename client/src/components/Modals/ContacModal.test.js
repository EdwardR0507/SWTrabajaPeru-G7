/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ContactModal from "./ContactModal";
/*Renderizado del componente ContactModal*/
describe("<ContactModal />", () => {
  const name = "Test";
  let component;
  beforeEach(() => {
    component = render(<ContactModal name={name} />);
  });
  test("renders ContactModal", () => {
    component.getByText(name);
  });
});
