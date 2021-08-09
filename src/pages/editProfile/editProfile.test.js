/*Importamos las librerias principales*/
import React from 'react';
import { shallow } from 'enzyme';
import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { render, screen,cleanup, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import GlobalEnv from '../../GlobalEnv';
import EditProfile from './index';
import { Snackbar } from '@material-ui/core';
/*Renderizado de la vista EditProfile*/
describe("<EditProfile></EditProfile>", () => {
  const server = setupServer(
    rest.post(`${GlobalEnv.host}/user-auth`, (req, res, ctx) => {
      return res(ctx.json({ greeting: 'hello there' }))
    }),
  )

  beforeAll(() => { server.listen()})
  afterEach(() => { server.resetHandlers() })
  afterAll(() => { server.close() })

  it('render "EditProfile"', () => {
    const history = createMemoryHistory()
    const wrapper = shallow(<Router history={history}>
      <EditProfile />
    </Router>);
    expect(wrapper).toMatchSnapshot()
  });
  it('show Cargando in editprofile', () => {
    const history = createMemoryHistory();
    server.use(
      rest.post(`${GlobalEnv.host}/user-auth`, (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    render(<Router history={history}>
      <EditProfile /> 
  </Router>);
  expect(screen.getByRole('edit-profile')).toHaveTextContent('Cargando...')
  })
  it('show 500', () => {
    const history = createMemoryHistory();
    server.use(
      rest.post(`${GlobalEnv.host}/user-auth`, (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    const result = render(<Router history={history}>
      <EditProfile /> 
  </Router>);
  fireEvent(<Snackbar />, 'onClose');
  expect(result.current.open).toBe(false)
  })
});