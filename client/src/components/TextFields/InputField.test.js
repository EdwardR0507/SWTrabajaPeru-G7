/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { shallow } from "enzyme";
import InputField from "../../components/TextFields/InputField";
/*Renderizado del componente InputField*/
describe("InputField", () => {
  it('render "InputField"', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toMatchSnapshot()
  });
});
/*Renderizado del contenido basado en la etiqueta 'label'*/
test('renders content based on label', () => {
  const component = render(
      <InputField variant="filled" label="Test label" />
  )
  component.getByText("Test label")
})

