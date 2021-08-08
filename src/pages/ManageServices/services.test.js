/*Importamos las librerias principales*/
import React from "react";
import { shallow } from 'enzyme';
import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import GlobalEnv from '../../GlobalEnv';
import ManageServices from "./index";
/*Renderizado de la vista Social Profile*/
describe("<ManageServices></ManageServices>", () => {
  const server = setupServer(
    rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
      return res(ctx.json({ greeting: 'hello there' }))
    }),
  )

  beforeAll(() => { server.listen()})
  afterEach(() => { server.resetHandlers() })
  afterAll(() => { server.close() })

  it('render `ManageServices`', () => {
    const wrapper = shallow(<ManageServices />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have an `ProfileCard` element', () => {
    const wrapper = shallow(<ManageServices />);
    expect(wrapper.contains(<ManageServices></ManageServices>)).toBe(true);
  });
  it('show Cargando', () => {
    const history = createMemoryHistory();
    server.use(
      rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    render(<Router history={history}>
      <ManageServices /> 
  </Router>);
  expect(screen.getByRole('manage-services')).toHaveTextContent('Cargando...')
  })
});