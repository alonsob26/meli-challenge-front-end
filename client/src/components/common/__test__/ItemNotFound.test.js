import { render, screen } from "@testing-library/react";
import { ItemNotFound } from "../index";

test("should render ItemNotFound", () => {
  render(<ItemNotFound />);
  const component = screen.getByTestId("not-found");
  expect(component).toBeInTheDocument();
});
