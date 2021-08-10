/*Importamos las librerias principales*/
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory  } from "history";
import InfoService from "./InfoService";
/*Renderizado del componente InfoService*/
describe("<InfoService />", () => {
  const history = createMemoryHistory()
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush, 
    }),
  }));
  const name = "nombre",description = "descripcion";
  let component;
  beforeEach(() => {
    component = render(<Router history={history}>
      <InfoService name={name} description={description} />
      </Router>);
  });
  test("renders InfoService", () => {
    component.getByText(name);
  });
  test("test handleEdit", () => {
    component.getByText(descripcion)
  })
  test("handleEdit test", () => {
    const wrapper = shallow(<Router history={history}>
      <InfoService />
    </Router>);
        const button = wrapper.find({ role: "edit" });
        button.simulate("click");
        expect(wrapper.state().modalDescription).toBe(false)
  })
  test("handleEdit test", () => {
    const wrapper = shallow(<Router history={history}>
      <InfoService />
    </Router>);
        const button = wrapper.find({ role: "delete" });
        button.simulate("click");
        expect(wrapper.state().stateRender).toBe(false)
  })
});
