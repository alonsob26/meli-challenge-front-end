import { render, screen, cleanup } from "@testing-library/react";
import { Spinner } from "../index";

afterEach(() => {
  cleanup();
});

test("should render Spinner", () => {
  render(<Spinner />);
  const component = screen.getByTestId("spinner");
  expect(component).toBeInTheDocument();
});
