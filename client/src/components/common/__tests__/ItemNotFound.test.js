import { render, screen, cleanup } from "@testing-library/react";
import { ItemNotFound } from "../index";

afterEach(() => {
  cleanup();
});

test("should render ItemNotFound", () => {
  render(<ItemNotFound />);
  const component = screen.getByTestId("not-found");
  expect(component).toBeInTheDocument();
});
