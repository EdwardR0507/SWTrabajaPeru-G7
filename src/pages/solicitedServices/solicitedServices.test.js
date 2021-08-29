/*Importamos las librerias principales*/
import React from "react";
import { shallow } from 'enzyme';
import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router} from 'react-router-dom';
import GlobalEnv from '../../GlobalEnv';
import SolicitedServices from "./index";
/*Renderizado de la vista Social Profile*/
describe("<SolicitedServices></SolicitedServices>", () => {
  const serverUser = setupServer(
    rest.post(`${GlobalEnv.host}/user-auth`, (req, res, ctx) => {
      return res(ctx.json({greeting: 'hello there'}))
    }),
  )
const serverService = setupServer(
    rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
      return res(ctx.json({greeting: 'hello there'}))
    }),
  )

beforeAll(() => {serverUser.listen(); serverService.listen()})
afterEach(() => {serverUser.resetHandlers(); serverService.resetHandlers()})
afterAll(() => {serverUser.close(); serverService.close()})

  it('render `SolicitedServices`', () => {
    const wrapper = shallow(<SolicitedServices />);
    expect(wrapper).toMatchSnapshot()
  });
  it("get User in `SolicitedServices`", () => {
    const history = createMemoryHistory();
    serverUser.use(
        rest.post(`${GlobalEnv.host}/user-auth`, (req, res, ctx) => {
          return res(ctx.status(500))
        }),
      )
    render(<Router history={history}>
        <SolicitedServices /> 
    </Router>);
    expect(screen.getByRole('solicited-services')).toHaveTextContent('Cargando...')
})
it("get Service in `SolicitedServices`", () => {
    const history = createMemoryHistory();
    serverService.use(
        rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
          return res(ctx.status(500))
        }),
      )
    const { getByRole } = render(<Router history={history}>
        <SocialProfile /> 
    </Router>);
    expect(screen.getByRole('solicited-services')).toHaveTextContent('Cargando...')
})
});
