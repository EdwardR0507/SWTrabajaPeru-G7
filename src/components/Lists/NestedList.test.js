/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import NestedList from "./NestedList";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
/*Renderizado del componente NestedList*/
describe("NestedList", () => {
  it('render "NestedList"', () => {
    const history = createMemoryHistory()
    const wrapper = shallow(<Router history={history}>
      <NestedList />
    </Router>);
    expect(wrapper).toMatchSnapshot() 
  });
  it("test handleClick", () => {
    const history = createMemoryHistory()
    const wrapper = shallow(<Router history={history}>
      <NestedList />
    </Router>);
    const button = wrapper.find(NestedList).shallow().find({prop: "button"});
    const open = wrapper.find(NestedList).shallow().find({prop: "in"});
    button.simulate("click")
    expect(open.props("in")).toBe(true)
  })
});
