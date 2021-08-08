import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import SecondaryButton from "./SecondaryButton";

test("renders SecondaryButton", () => {
  const component = render(<SecondaryButton name={"test"} />);
  component.getByText("test");
});

test("clicking SecondaryButton", () => {
  const mockHandler = jest.fn();
  const component = render(
    <SecondaryButton name={"test"} onClick={mockHandler} />
  );
  const button = component.getByText("test");
  fireEvent.click(button);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
