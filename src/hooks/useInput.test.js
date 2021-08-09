/*Importamos las librerias principales*/
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { shallow } from "enzyme";
import UseInput from "./useInput";
import { useInput } from "./useInput";
import { render, fireEvent } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import TestRenderer, { act } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

/*Renderizado del componente UseInput*/
describe("UseInput", () => {
  it('render "UseInput"', () => {
    const UseInput = shallow(<UseInput />);
    expect(UseInput).toMatchSnapshot()
  });
  it("hook works", () => {
    const { value: test, bind: bindTest} = useInput("");
    render(<input {...bindTest} aria-label="Test"/>);
    fireEvent.change(input, {target: {value: '23'}})
    expect(input.value).toBe('23')
  })
  it('should handle onChange event', () => {
    const testRenderer = TestRenderer.create(<useInput />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('input').props.value).toEqual('');
    const mEvent = { target: { value: 'teresa teng' } };
    act(() => {
      testInstance.findByType('input').props.onChange(mEvent);
    });
    expect(testInstance.findByType('input').props.value).toEqual('teresa teng');
  });

  it('should handle onChange event when use shallow render', () => {
    const shallowRenderer = ShallowRenderer.createRenderer();
    shallowRenderer.render(<useInput/>);
    let tree = shallowRenderer.getRenderOutput();
    let input = tree.props.children[0];
    const mEvent = { target: { value: 'teresa teng' } };
    input.props.onChange(mEvent);
    tree = shallowRenderer.getRenderOutput();
    input = tree.props.children[0];
    expect(input.props.value).toEqual('teresa teng');
  });
});
