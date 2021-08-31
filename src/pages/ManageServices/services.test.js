/*Importamos las librerias principales*/
import React from "react";
import { shallow } from "enzyme";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import GlobalEnv from "../../GlobalEnv";
import ManageServices from "./index";
import InfoService from "../../components/Info/InfoService";
/*Renderizado de la vista Social Profile*/
describe("<ManageServices></ManageServices>", () => {
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

  it("render `ManageServices`", () => {
    const history = createMemoryHistory();
    const wrapper = shallow(
      <Router history={history}>
        <ManageServices />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("should not have an `InfoService` element", () => {
    const history = createMemoryHistory();
    const wrapper = shallow(
      <Router history={history}>
        <ManageServices />
      </Router>
    );
    expect(wrapper.contains(<InfoService />)).toBe(false);
  });
  it("show Cargando", () => {
    const history = createMemoryHistory();
    server.use(
      rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
  });
});
