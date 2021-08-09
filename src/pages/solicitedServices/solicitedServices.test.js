import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom'
import GlobalEnv from '../../GlobalEnv';
import SolicitedServices from  "./index"

describe("<SolicitedServices />", () => {
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

    it('render "SolicitedServices"', () => {
        const history = createMemoryHistory()
        const wrapper = shallow(<Router history={history}>
            <SolicitedServices /> 
        </Router>);
        expect(wrapper).toMatchSnapshot()
      });
    it("get User", () => {
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
    it("get Service", () => {
        const history = createMemoryHistory();
        serverService.use(
            rest.post(`${GlobalEnv.host}/service-auth`, (req, res, ctx) => {
              return res(ctx.status(500))
            }),
          )
        const { getByRole } = render(<Router history={history}>
            <SolicitedServices /> 
        </Router>);
        expect(screen.getByRole('solicited-services')).toHaveTextContent('Cargando...')
    })
})