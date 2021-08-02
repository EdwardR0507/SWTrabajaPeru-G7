/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { shallow } from "enzyme";
import SearchField from "../../components/TextFields/SearchField";
/*Renderizado del componente InputField*/
describe("SearchField", () => {
  it('render "SearchField"', () => {
    const wrapper = shallow(<SearchField />);
    expect(wrapper).toMatchSnapshot()
  });
});
/*Renderizado del contenido basado en el placeholder*/
test('renders content based on placeholder', () => {
  const component = render(
      <SearchField placeholder="Placeholder de prueba" />
  )
  component.getByText("Placeholder de prueba")
})
