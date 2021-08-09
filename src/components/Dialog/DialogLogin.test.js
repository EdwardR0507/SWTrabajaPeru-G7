/*Importamos las librerias principales*/
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { shallow } from "enzyme";
import { MemoryRouter } from 'react-router-dom';
import DialogLogin from "./DialogLogin";

describe("<DialogLogin />", () => {
    const mockHistoryPush = jest.fn();
    it("render DialogLogin", () => {
        const wrapper = shallow(<DialogLogin/>);
        expect(wrapper).toMatchSnapshot()
    })
    it("test handle open", () => {
        const { result, getByRole } = render(
            <DialogLogin />
        );
        fireEvent.click(getByRole("open"));
        expect(result.current.open).toBe(true);
    })
    it("test handle close", () => {
        
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
              push: mockHistoryPush, 
            }),
          }));
        const { result, getByRole } = renderHook(
            <DialogLogin />
        );
        fireEvent.click(getByRole("close"));
        expect(result.current.open).toBe(false);
    })
    it('Redirects to correct URL on click', () => {
        const { getByRole } = renderHook(
          <DialogLogin />,
        );
        fireEvent.click(getByRole('redirect'));
        expect(mockHistoryPush).toHaveBeenCalledWith('/signin');
      });
})