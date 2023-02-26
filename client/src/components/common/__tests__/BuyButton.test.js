import { render, screen, cleanup } from "@testing-library/react";
import { BuyButton } from "../index";

afterEach(() => {
  cleanup();
});

test("should render buybutton", () => {
  render(<BuyButton />);
  const component = screen.getByTestId("buy-button");
  expect(component).toBeInTheDocument();
  expect(component).toHaveTextContent("Comprar");
});
