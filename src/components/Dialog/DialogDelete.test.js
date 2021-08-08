/*Importamos las librerias principales*/
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import DialogDelete from "./DialogDelete"

describe(("<DialogDelete />"), () => {
    it("render DialogLogin", () => {
        const wrapper = shallow(<DialogDelete/>);
        expect(wrapper).toMatchSnapshot()
    })
})