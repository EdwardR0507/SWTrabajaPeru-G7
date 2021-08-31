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
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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
    const history = createMemoryHistory()
    const wrapper = shallow(<Router history={history}>
      <ServiceModal />
    </Router>);
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
  it("test HanldeClose", () => {
    const wrapper = shallow(<ServiceModal />);
    const button = wrapper.find({ role: "close" });
    const open = wrapper.find({ role: "Modal" });
    button.simulate("click")
    expect(open.props("open")).toBe(false)
  })
  it("test HanldeOpen", () => {
    const wrapper = shallow(<ServiceModal />);
    const button = wrapper.find({ role: "open" });
    const open = wrapper.find({ role: "Modal" });
    button.simulate("click")
    server.use(
      rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    expect(open.props("open")).toBe(true)
  })
  it("test OnSubmit", () => {
    const wrapper = shallow(<ServiceModal />);
    const button = wrapper.find({ type: "submit" });
    button.simulate("click")
    server.use(
      rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
        return res(ctx.status(500))
      }))
    expect(wrapper.props("onSubmit")).toBeCalled()
  })
  
  it("calls the onSubmit function", async () => {
    const history = createMemoryHistory();
    const mockOnSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(<Router history={history}>
      <ServiceModal onSubmit={mockOnSubmit} />
    </Router>
    );
    await act(async () => {
      fireEvent.change(getByLabelText("Nombre del Servicio"), { target: { value: "Mudanzas" } });
      fireEvent.change(getByLabelText("Descripción"), { target: { value: "Servicio de mudanzas" } });
    })
    await act(async () => {
      fireEvent.click(getByRole("button"))
    })
  })
  
});
