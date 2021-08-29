/*Importamos las librerias principales*/
import React from "react";
import { shallow } from 'enzyme';
import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import GlobalEnv from '../../GlobalEnv';
import ServiceDetails from "./index";
/*Renderizado de la vista Service Details*/
describe("<ServiceDetails></ServiceDetails>", () => {
  const server = setupServer(
    rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
      return res(ctx.json({ greeting: 'hello there' }))
    }),
  )

  beforeAll(() => { server.listen()})
  afterEach(() => { server.resetHandlers() })
  afterAll(() => { server.close() })

  it('render `ServiceDetails`', () => {
    const wrapper = shallow(<ServiceDetails />);
    expect(wrapper).toMatchSnapshot()
  });

  it('show Cargando', () => {
    const history = createMemoryHistory();
    server.use(
      rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    render(<Router history={history}>
      <ServiceDetails /> 
  </Router>);
  expect(screen.getByRole('service-details')).toHaveTextContent('Cargando...')
  })
});