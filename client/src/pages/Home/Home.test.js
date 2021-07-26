import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { render, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom'
import Home from './index';

test('renders Home content', () => {
    const history = createMemoryHistory();
    const component = render(
        <Router history={history}>
            <Home />            
        </Router>    
    );
    component.getByText("Servicios");
    component.getByText("Trabajadores");
})

test('renders user logged home', () => {
    const history = createMemoryHistory();
    const user = {
        us_id: 31,
        us_nombre: "Test Name"
    };
    history.push({
        pathname: '/',
        search: `?id=${user.us_id}`,
        state: {user: user}
    })
    const component = render(
        <Router history={history}>
            <Route exact path="/" component={Home} />
        </Router>
    )
    component.getByText(user.us_nombre)
})

test('renders Home for user not logged or registered', () => {
    const history = createMemoryHistory();
    const component = render(
        <Router history={history}>
            <Home />
        </Router>
    )
    component.getByText("Registrarse");
    component.getByText("Iniciar Sesión");
})

test('show workers from axios', () => {
    const history = createMemoryHistory();
    const workerName = "Arian Zambrano";
    beforeEach(() => {
        axios.get = jest.fn(() => Promise.resolve({res: {data: worker}}))
    });
    afterEach(cleanup);
    const component = render(
        <Router history={history}>
            <Home />
        </Router> 
    )
    component.getAllByText(workerName)
})