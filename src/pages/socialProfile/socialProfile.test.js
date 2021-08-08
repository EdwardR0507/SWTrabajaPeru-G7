/*Importamos las librerias principales*/
import React from "react";
import { shallow } from 'enzyme';
import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import GlobalEnv from '../../GlobalEnv';
import SocialProfile from "./index";
import ProfileCard from "../../components/Cards/ProfileCard";
/*Renderizado de la vista Social Profile*/
describe("<SocialProfile></SocialProfile>", () => {
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

  it('render `ProfileCard`', () => {
    const wrapper = shallow(<SocialProfile />);
    expect(wrapper).toMatchSnapshot()
  });
  it('should have an `ProfileCard` element', () => {
    const wrapper = shallow(<SocialProfile />);
    expect(wrapper.contains(<ProfileCard></ProfileCard>)).toBe(true);
  });
  it("get User", () => {
    const history = createMemoryHistory();
    serverUser.use(
        rest.post(`${GlobalEnv.host}/user-auth`, (req, res, ctx) => {
          return res(ctx.status(500))
        }),
      )
    render(<Router history={history}>
        <SocialProfile /> 
    </Router>);
    expect(screen.getByRole('social-profile')).toHaveTextContent('Cargando...')
})
it("get Service", () => {
    const history = createMemoryHistory();
    serverService.use(
        rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
          return res(ctx.status(500))
        }),
      )
    const { getByRole } = render(<Router history={history}>
        <SocialProfile /> 
    </Router>);
    expect(screen.getByRole('social-profile')).toHaveTextContent('Cargando...')
})
});
