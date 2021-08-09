/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import ServiceModal from "./ServiceModal";
import { createMemoryHistory } from "history";
import GlobalEnv from "../../GlobalEnv";
import { Router } from "react-router-dom";

/*Renderizado del componente ServiceModal*/
describe("ServiceModal", () => {
  const server = setupServer(
    rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
      return res(ctx.json({ greeting: "hello there" }));
    })
  );

  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });

  it('render "ServiceModal"', () => {
    const wrapper = shallow(<ServiceModal />);
    expect(wrapper).toMatchSnapshot();
  });
  it("render with location", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ServiceModal />
      </Router>
    );
    expect(screen.getByText()).toBeInTheDocument();
  });
  it("axios server", () => {
    const history = createMemoryHistory();
    server.use(
      rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <Router history={history}>
        <ServiceModal />
      </Router>
    );
    expect(screen.getByRole("service-modal")).toHaveTextContent("Cargando...");
  });
  it("renders without crashing ServiceModal", () => {
    const handleClose = jest.fn(),
      handleOpen = jest.fn(),
      handleOpenEdit = jest.fn(),
      open = jest.fn();

    const component = shallow(
      <ServiceModal
        open={open}
        handleOpen={handleOpen}
        handleOpenEdit={handleOpenEdit}
        handleClose={handleClose}
      />
    );

    component.find("Button").toHaveTextContent("Agregar").simulate("click");
    expect(handleOpen).toHaveBeenCalledTimes(1);
    component.find("Button").toHaveTextContent("Editar").simulate("click");
    expect(handleOpenEdit).toHaveBeenCalledTimes(1);
    component.find('SecondaryButton[name="CANCELAR"]').simulate("click");
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
