import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import InfoService from "./InfoService";

describe("<InfoService />", () => {
  const name = "nombre",
    description = "descripcion";
  let component;
  beforeEach(() => {
    component = render(<InfoService name={name} description={description} />);
  });

  test("renders InfoService", () => {
    component.getByText(name);
  });
});
