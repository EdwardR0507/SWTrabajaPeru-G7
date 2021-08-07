import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import { Router, Route } from 'react-router-dom';
import App from "./App";

test("should render Home", () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
            <App />
        </Router>
    )
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument()
})

test("should render 404", () => {
    const history = createMemoryHistory();
    history.push('some/bad/route')
    render(
        <Router history={history}>
            <App />
        </Router>
    )
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument()
})